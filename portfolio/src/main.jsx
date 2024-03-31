import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import ContactMe from './pages/Contact.jsx'
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/About',
        element: <AboutMe />,
      },
      
      {
        path: '/Contact',
        element: <ContactMe />,
      },
    ],
  },
]);ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)