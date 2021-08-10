import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('renders learn react link', () => {
  const initialState = {
    history: { pending: false, historyList: [], error: '' },
    home: { pending: false, siteList: [], error: '' },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/MyUnity Mobile Sync Tool/i);
  expect(linkElement).toBeInTheDocument();
});
