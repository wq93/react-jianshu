import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable';
// 纯函数
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable对象的set方法,会结合之前immutable对象的值
      // 和设置的值 返回一个全新的对象
      return state.set('focused', true)
      break;
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
      break
  }
  return state
}