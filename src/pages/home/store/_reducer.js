import {fromJS} from 'immutable';
import * as constants from "./constants";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
};

const addHomeList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(action.addArticleList)),
    articlePage: action.articlePage
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
      break;
    case constants.ADD_ARTICLE_LIST:
      return addHomeList(state, action)
      break;
    default:
      return state;
  }
}