import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {focused, handleInputFocus, handleInputBlur} = this.props;
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus()}
                onBlur={() => handleInputBlur()}>
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe614;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>

          <Button className='writting'>
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>

          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getListArea = () => {
    const {focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage} = this.props
    const filterList = list.slice((page - 1) * 10, page * 10)
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch onClick={() => {
              handleChangePage(page, totalPage)
            }}>
              <i className="iconfont spin">&#xe851;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              filterList.map(item => {
                return (
                  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                )
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
      dispatch(actionCreators.getList())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        page++
      } else {
        page = 1
      }
      dispatch(actionCreators.changePage(page))
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);