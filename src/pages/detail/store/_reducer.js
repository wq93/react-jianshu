import * as constants from './constants'
import {fromJS} from 'immutable';

const defaultState = fromJS({
  title: '',
  content: ''
});


const setDetail = (state, action) => {
  return state.merge({
    title: action.title,
    content: action.content
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return setDetail(state, action)
    default:
      return state
  }
}