import testdata from './DataMock.json';

const axiosMock = {
  get() {
    return Promise.resolve(testdata);
  }
};

export default axiosMock;
