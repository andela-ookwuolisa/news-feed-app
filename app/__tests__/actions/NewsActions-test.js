import newsActions from '../../actions/NewsActions';
import NewsDispatcher from '../../dispatcher/NewsDispatcher';
import mockedAxios from '../../__mocks__/axios';

describe('NewsAction', () => {
  let DispatcherSpy;
  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    DispatcherSpy = jest.spyOn(NewsDispatcher, 'dispatch');
  });

  afterEach(() => {
    DispatcherSpy.mockReset();
  });

  it('should dispatch "DISPLAY_NEWS" when displaySource is called', () =>
    newsActions.displaySource().then(() => {
      expect(DispatcherSpy).toHaveBeenCalled();
      const mockDispatchCall = DispatcherSpy.mock.calls[0][0];
      expect(mockDispatchCall.type).toEqual('DISPLAY_NEWS');
    })
  );

  it('dispatch "GET_NEWS" ', () => newsActions.getNews('bbcnews', 'top')
      .then(() => {
        const mockDispatchCall = DispatcherSpy.mock.calls[0][0];
        expect(DispatcherSpy).toHaveBeenCalled();
        expect(mockDispatchCall.type).toEqual('GET_NEWS');
      })
  );
});
