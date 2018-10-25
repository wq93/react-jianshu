import * as constants from './constants'
import axios from 'axios'

const changHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});
const addHomeList = (list, page) => ({
  type: constants.ADD_ARTICLE_LIST,
  addArticleList: list,
  articlePage: page,
})


export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changHomeData(result));
    });
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${page}`).then((res) => {
      const list = res.data.data;
      dispatch(addHomeList(list, page));
    });
  }
}