import newsStore from '../stores/newsStore';
import Dispatcher from '../dispatcher/newsDispatcher';
import expect from 'expect';

const data = {
  title: 'Attempted suicide on Facebook Live has a happy ending',
  description: 'Facebook Live, for all its problems, may have just saved a girl',
};

jest.mock('../dispatcher/newsDispatcher');
// jest.dontMock('../stores/newsStore');
jest.dontMock('object-assign');

const getNewsObj = {
    type: 'DISPLAY_NEWS',
    news: {
      title: 'Attempted suicide on Facebook Live has a happy ending',
      description: 'Facebook Live, for all its problems, may have just saved a girl',
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
    // const spyStore = jest.spyOn(newsStore, 'emitChange');
      callback(getNewsObj);
      const count = newsStore.displaySource();
      const keys = Object.keys(count);
      expect(keys).toExist();
    });

test('check if there is an emit change listener method added', () => {
    expect(newsStore.emitChange).toExist;
  });
test('check if there is a remove change listener method', () => {
  expect(newsStore.removeChangeListener).toExist;
});