import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login  from './Login';
import Register from './Register';

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
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;