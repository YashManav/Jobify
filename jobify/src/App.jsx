import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {Login, Register, AddJob} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>HomePage</h1>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />  
  },
  {
    path: '/AddJob',
    element: <AddJob />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;