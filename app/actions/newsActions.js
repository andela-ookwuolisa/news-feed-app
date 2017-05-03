import axios from 'axios';
import dispatcher from '../dispatcher/newsDispatcher';
//import API from 'API';

var NewsActions = {
    displaySource(){
        var sourceURL = ` https://newsapi.org/v1/sources?language=en`;
          return axios.get(sourceURL).then(function (res){

             dispatcher.dispatch({         
                type: "DISPLAY_NEWS",
                news: res.data.sources
            });

          })

    },

    getNews(newsSite, sort) {
        var requestURL = `https://newsapi.org/v1/articles?source=${newsSite}&sortBy=${sort}&apiKey=213327409d384371851777e7c7f78dfe`;
        
        return axios.get(requestURL).then(function (res){
            dispatcher.dispatch({         
                type: "GET_NEWS",
                news: res.data
            });
        })
    },
};
module.exports = NewsActions;