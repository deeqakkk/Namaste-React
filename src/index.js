import React, { lazy, Suspense } from 'react';
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

const Instamart = lazy(() => import('./Components/Instamart'));
const AppLayout = () => {
  return (
    <>
      <Header />
      {/* // header and footer will always be their */}
      <Outlet />
      {/* all the children will go into Outlet */}
      <Footer />
      {/* // header and footer will always be their */}
    </>
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
        element: <Body />,
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
      {
        path: '/resturant/:id',
        element: <FoodDetail />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer/>}>
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
