import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from '../Header';
import Title from '../Title';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';

test('Logo should load on rendering header', () => {
  render(<Title />);
  const logoImg = screen.getByTestId('logo');
  expect(logoImg.src).toBe('http://localhost/logo.png');
});

test('Check the network status', () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineTxt = screen.getByTestId('online-status');
  expect(onlineTxt.innerHTML).toBe('✅Deepak Verma');
});
