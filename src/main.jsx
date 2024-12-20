import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/Homepage.jsx';
import AboutUsPage from './pages/AboutUspage.jsx';
import AboutUspageJabbar from './pages/AboutUspageJabbar.jsx';
import AboutUspageEdi from './pages/AboutUspageEdi.jsx';
import AboutUspageRifqi from './pages/AboutUspageRifqi.jsx';
import Contactpage from './pages/Contactpage.jsx';
import Gallerypage from './pages/Gallerypage.jsx';
import Article1page from './pages/Article1page.jsx';
import Article2page from './pages/Article2page.jsx';
import Article3page from './pages/Article3page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutUsPage />,
  },
  {
    path: '/about/jabbar',
    element: <AboutUspageJabbar />,
  },
  {
    path: '/about/edi',
    element: <AboutUspageEdi />,
  },
  {
    path: '/about/rifqi',
    element: <AboutUspageRifqi />,
  },
  {
    path: '/contact',
    element: <Contactpage />,
  },
  {
    path: '/gallery',
    element: <Gallerypage />,
  },
  {
    path: '/article-1',
    element: <Article1page />,
  },
  {
    path: '/article-2',
    element: <Article2page />,
  },
  {
    path: '/article-3',
    element: <Article3page />,
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
