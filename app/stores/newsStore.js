import EventEmitter from 'events';
import dispatcher from '../dispatcher/NewsDispatcher';

const CHANGE_EVENT = 'change';

/**
 * NewsStore updates the news component
 * @extends {EventEmitter}
 */
class NewStore extends EventEmitter {

/**
   * Creates an instance of NewsStore.
   * @memberof NewStore
   */
  constructor() {
    super();
    /**
     * Instantiate the needed parameters
     */
    this.articles = [];
    this.sources = [];
  }
   /**
   * @callback request Callback
   * @param {callback} callback - the callback that handles event changes
   * @returns {object} add change listener
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
   /**
   * @callback request Callback
   * @param {callback} callback - the callback that handles event changes
   * @returns {object} remove change listener
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  /**
   * @returns {*} listens for change and emits the data to the view
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * @returns {object} returns list of news articles
   */
  getNews() {
    return this.articles;
  }

  /**
   * @returns {object} returns list of news articles
   */
  displaySource() {
    return this.sources;
  }
}
const NewsStore = new NewStore();
const handleAction = ((action) => {
  switch (action.type) {
    case 'GET_NEWS':
      NewsStore.articles = action.news.articles;
      NewsStore.emitChange();
      break;

    case 'DISPLAY_NEWS':
      NewsStore.sources = action.news;
      NewsStore.emitChange();
      break;

    default:
      break;
  }
});

NewsStore.dispatchToken = dispatcher.register(handleAction);

export default NewsStore;
