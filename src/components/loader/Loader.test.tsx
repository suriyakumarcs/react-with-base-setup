import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Loader from './Loader';

describe('<Loader />', () => {
  test('should loader displayed', () => {
    const initialState = {
      history: { pending: true, historyList: [], error: '' },
      home: { pending: false, siteList: [], error: '' },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const result = render(
      <Provider store={store}>
        <Loader />
      </Provider>
    );
    const linkElement = result.container.querySelector('#loader');
    expect(linkElement).toBeInTheDocument();
  });
  test('should loader not displayed', () => {
    const initialState = {
      history: { pending: false, historyList: [], error: '' },
      home: { pending: false, siteList: [], error: '' },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const result = render(
      <Provider store={store}>
        <Loader />
      </Provider>
    );
    const linkElement = result.container.querySelector('#loader');
    expect(linkElement).toBeNull();
  });
});
