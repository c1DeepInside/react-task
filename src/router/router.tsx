import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Cards from '../pages/CardsPage';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/',
        element: <Cards />,
      },
    ],
  },
]);
