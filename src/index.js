import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './Components/About';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './Components/Error';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import FoodDetail from './Components/RestaurantDetails';
import Profile from './Components/Profile';
import Shimmer from './Components/Shimmer';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './Components/Cart';

const Instamart = lazy(() => import('./Components/Instamart'));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Lucifer',
    email: '0822deepakverma@gmail.com',
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        {/* // header and footer will always be their */}
        <Outlet />
        {/* all the children will go into Outlet */}
        <Footer />
        {/* // header and footer will always be their */}
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body userInfo />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/resturant/:id',
        element: <FoodDetail />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
