import expect from 'expect';
import newsStore from '../../stores/NewsStore';
import Dispatcher from '../../dispatcher/NewsDispatcher';
import SourceMock from '../../__mocks__/SourceMock.json';
import DataMock from '../../__mocks__/DataMock.json';

jest.mock('../../dispatcher/NewsDispatcher');
jest.dontMock('../../stores/NewsStore');

const newsSource = {
  type: 'DISPLAY_NEWS',
  news: SourceMock.sources
};
const newsArticles = {
  type: 'GET_NEWS',
  news: {
    articles: DataMock.data
  }
};

let callback;

beforeEach(() => {
  callback = Dispatcher.register.mock.calls[0][0];
});

test('registers a callback with the dispatcher', () => {
  expect(Dispatcher.register.mock.calls.length).toBe(1);
});

test('initializes with no data', () => {
  const count = newsStore.getNews().length;
  expect(count).toBe(0);
});


test('Newstore.displaySource() should returns news sources ', () => {
  callback(newsSource);
  const source = newsStore.displaySource();
  const keys = Object.keys(source);
  expect(keys).toBeAn('array');
  expect(keys.length).toBe(2);
  expect(source[0].id).toEqual('abc-news-au');
});

test('NewsStore.getNews() should  return news articles', () => {
  callback(newsArticles);
  const article = newsStore.getNews();
  const keys = Object.keys(article);
  expect(keys).toBeAn('array');
  expect(keys.length).toBe(3);
  expect(article.source).toEqual('bbcnews');
});

test('check if there is an emit change listener method added', () => {
  expect(newsStore.emitChange).toBeTruthy();
});
test('check if there is a remove change listener method', () => {
  expect(newsStore.removeChangeListener).toBeTruthy();
});
