import EventEmitter from 'events';
import assign from 'object-assign';
import dispatcher from '../dispatcher/newsDispatcher';

const CHANGE_EVENT = 'change';

let articles = [];
let sources = [];
/**
 * NewsStore updates the news component
 */

const NewsStore = assign({}, EventEmitter.prototype, {
  /**
   * addChangeListener
   * @param {function} callback function is passed in.
   * @return {null} returns nothing
   */
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
    return articles;
  },
  displaySource() {
    return sources;
  },
});

const handleAction = (action) => {
  switch (action.type) {
    case 'GET_NEWS':
      articles = action.news.articles;
      NewsStore.emitChange();
      break;

    case 'DISPLAY_NEWS':
      sources = action.news;
      NewsStore.emitChange();
      break;

    default:
  }
};

NewsStore.dispatchToken = dispatcher.register(handleAction);

module.exports = NewsStore;
