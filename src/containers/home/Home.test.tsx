import { render } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('<Home />', () => {
  test('should display the list', () => {
    const initialState = {
      home: {
        pending: false,
        siteList: [
          { id: 1, email: 'sam@ntst.com', first_name: 'sam' },
          { id: 2, email: 'shyam@ntst.com', first_name: 'shyam' },
        ],
        error: '',
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const result = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );
    const linkElement = result.container.querySelector('#list-group');
    expect(linkElement).toBeInTheDocument();
  });
  test('should display empty result section', () => {
    const initialState = {
      home: {
        pending: true,
        siteList: [],
        error: '',
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const result = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );
    const linkElement = result.container.querySelector('#no-result');
    expect(linkElement).toBeInTheDocument();
  });
  test('should display error section', () => {
    const initialState = {
      home: {
        pending: false,
        siteList: [],
        error: 'Something went wrong!',
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const result = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );
    const linkElement = result.container.querySelector('#error');
    expect(linkElement).toBeInTheDocument();
  });
});
