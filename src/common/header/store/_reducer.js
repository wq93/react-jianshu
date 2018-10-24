import * as constants from './constants'
import {fromJS} from 'immutable';
// 纯函数
const defaultState = fromJS({
  focused: false,
  list: []
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
      console.log(action.data)
      return state.set('list', action.data)
      break;
  }
  return state
}