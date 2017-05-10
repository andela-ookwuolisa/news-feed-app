import newsActions from '../actions/newsActions';
import Dispatcher from '../dispatcher/newsDispatcher';

/*eslint-disable*/
describe('NewsAction', () => {
  let spy;
  beforeEach(() => {
    spy = jest.spyOn(Dispatcher, 'dispatch');
  });

  afterEach(() => {
    spy.mockReset();
  });

  it('should dispatch "DISPLAY_NEWS" when displaySource is called', () => {
    newsActions.displaySource().then( () => {
      expect(spy).toHaveBeenCalled();
      const mockDispatchCall = spy.mock.calls[0][0];
      expect(mockDispatchCall.type).toEqual('DISPLAY_NEWS');
    });
  });

  it('should dispatch  "GET_NEWS" when getNews is called', () => {
    newsActions.getNews('al-jazeera-english', 'top').then( () => {
      const mockDispatchCall = spy.mock.calls[0][0];
      expect(spy).toHaveBeenCalled();
      expect(mockDispatchCall.type).toEqual('SORT_NEWS');
    });
  });
});
