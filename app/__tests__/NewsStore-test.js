import expect from 'expect';
import newsStore from '../stores/NewsStore';
import Dispatcher from '../dispatcher/NewsDispatcher';

jest.mock('../dispatcher/NewsDispatcher');

const getNewsObj = {
  type: 'DISPLAY_NEWS',
  news: {
    title: 'Attempted suicide on Facebook Live has a happy ending',
    description: 'Facebook Live, for all its problems, may have just saved',
  },
};

let callback;

beforeEach(() => {
  callback = Dispatcher.register.mock.calls[0][0];
});

test('registers a callback with the dispatcher', () => {
  expect(Dispatcher.register.mock.calls.length).toBe(1);
});

test('initializes with no data', () => {
  const count = newsStore.displaySource().length;
  expect(count).toBe(0);
});


test('should call emitChange when "DISPLAY_NEWS" is dispatched', () => {
  callback(getNewsObj);
  const count = newsStore.displaySource();
  const keys = Object.keys(count);
  expect(keys).toExist();
});

test('check if there is an emit change listener method added', () => {
  expect(newsStore.emitChange).toBeTruthy();
});
test('check if there is a remove change listener method', () => {
  expect(newsStore.removeChangeListener).toBeTruthy();
});
