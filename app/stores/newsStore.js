import dispatcher from '../dispatcher/newsDispatcher';
 var EventEmitter = require('events');
 var assign = require('object-assign');
 var CHANGE_EVENT = 'change';

 var _articles = [];
 var _sources = [];

 var NewsStore = assign({}, EventEmitter.prototype, {
     addChangeListener: function(callback){
         this.on(CHANGE_EVENT, callback);
     },
     removeChangeListener: function(callback){
         this.removeListener(CHANGE_EVENT, callback);
     },
     emitChange: function(){
         this.emit(CHANGE_EVENT);
     },
     getNews: function(){
        
         return _articles;
     },
     displaySource: function(){
         return _sources;
     }
 });

 function handleAction(action) {
    switch(action.type){
        case "GET_NEWS":
            _articles = action.news.articles;
            NewsStore.emitChange();
            break;

         case "DISPLAY_NEWS":
            _sources = action.news;
            NewsStore.emitChange();
            break;

    }
 }

 NewsStore.dispatchToken = dispatcher.register(handleAction);

 module.exports = NewsStore;