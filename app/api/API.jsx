import axios from 'axios';
// const NEWS_API ='https://newsapi.org/v1/articles?'
module.exports= {
    getNews : function(newsSite){
         
        var requestURL = `https://newsapi.org/v1/articles?source=${newsSite}&apiKey=213327409d384371851777e7c7f78dfe`;
        
        return axios.get(requestURL).then(function (res){
            if (res.data.message){
                throw new Error(res.data.message)
            } else {
                return res.data.articles;
            }

        }, function (res){
            return ('Errors', res);
        });

    }
}