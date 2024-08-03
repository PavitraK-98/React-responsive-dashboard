import { useRoutes } from 'react-router-dom';

// layouts
import Layout from './Layout';

//components
import Dashboard from './Components/Dashboard';

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
      ],
    },
    { path: '*', element: <PageNotFound /> },
  ]);
}
