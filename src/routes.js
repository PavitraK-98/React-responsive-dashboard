import { useRoutes } from 'react-router-dom';

// layouts
import Layout from './Layout';

//components
import Dashboard from './Components/Dashboard';
import Assessment from './Components/Assessment';
import Records from './Components/Records';
import Drafts from './Components/Drafts';
import Cart from './Components/Assessment';

//pages
import PageNotFound from './Pages/PageNotFound';


// ----------------------------------------------------------------------
export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Dashboard /> },
        { path: 'assessment', element: <Assessment />},
        { path: 'records', element: <Records />},
        { path: 'drafts', element: <Drafts />},
        { path: 'cart', element: <Cart />},
      ],
    },
    { path: '*', element: <PageNotFound /> },
  ]);
}
