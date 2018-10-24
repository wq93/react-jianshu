import * as constants from './constants'
import {fromJS} from 'immutable';
// 纯函数
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // immutable对象的set方法,会结合之前immutable对象的值
      // 和设置的值 返回一个全新的对象
      return state.set('focused', true)
      break;
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
      break;
    case constants.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage)
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      })
      break;
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
      break;
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
      break;
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
      break;
  }
  return state
}