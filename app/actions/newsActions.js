import axios from 'axios';
import dispatcher from '../dispatcher/newsDispatcher';

const NewsActions = {
  displaySource() {
    const sourceURL = `https://newsapi.org/v1/sources?language=en`;
    return axios.get(sourceURL).then((res) => {
      dispatcher.dispatch({
        type: 'DISPLAY_NEWS',
        news: res.data.sources,
      });
    });
  },

  getNews(newsSite, sort) {
    const requestURL = `https://newsapi.org/v1/articles?source=${newsSite}&sortBy=${sort}&apiKey=213327409d384371851777e7c7f78dfe`;
    return axios.get(requestURL).then((res) => {
      dispatcher.dispatch({
        type: 'GET_NEWS',
        news: res.data,
      });
    });
  },
};
module.exports = NewsActions;
