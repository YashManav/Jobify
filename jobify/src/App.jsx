import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, Register, HomeLayout, Landing } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  }
]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;