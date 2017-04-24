import dispatcher from '../dispatcher/newsDispatcher';
import axios from 'axios';
var API = require ('API');
var articles;

var NewsActions = {
    displaySource(){
        var sourceURL = ` https://newsapi.org/v1/sources?language=en`;
          return axios.get(sourceURL).then(function (res){
              console.log(res.data.sources)

             dispatcher.dispatch({         
                type: "DISPLAY_NEWS",
                news: res.data.sources
            });

          })

    },

    getNews(newsSite) {
        //console.log('NewsActions')
        var requestURL = `https://newsapi.org/v1/articles?source=${newsSite}&apiKey=213327409d384371851777e7c7f78dfe`;
        
        return axios.get(requestURL).then(function (res){
            console.log(res.data);
            dispatcher.dispatch({         
                type: "GET_NEWS",
                news: res.data
            });
        })
    },
};
module.exports = NewsActions;