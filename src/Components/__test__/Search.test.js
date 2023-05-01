import { render } from '@testing-library/react';
import Body from '../Body';
import store from '../../utils/store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { screen } from '@testing-library/react';

// const restaurantData = [];
// // global.fetch = jest.fn(() => {
// //   return Promise.resolve({
// //     json: () => Promise.resolve(restaurantData),
// //   });
// // });

test('Load shimmer on homepage', async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // await waitFor(() => expect(screen.getByTestId('search-btn')));
  const bodyData = screen.getByTestId('shimmer');
  expect(bodyData.className).toBe('restaurant-list');
});
