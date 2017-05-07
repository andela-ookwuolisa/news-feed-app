import EventEmitter from 'events';
import assign from 'object-assign';
import dispatcher from '../dispatcher/newsDispatcher';

const CHANGE_EVENT = 'change';

let _articles = [];
let _sources = [];

const NewsStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  getNews() {
    return _articles;
  },
  displaySource() {
    return _sources;
  },
});

function handleAction(action) {
  switch (action.type) {
    case 'GET_NEWS':
      _articles = action.news.articles;
      NewsStore.emitChange();
      break;

    case 'DISPLAY_NEWS':
      _sources = action.news;
      NewsStore.emitChange();
      break;
  }
}

NewsStore.dispatchToken = dispatcher.register(handleAction);

module.exports = NewsStore;
