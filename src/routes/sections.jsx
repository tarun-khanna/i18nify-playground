import { Outlet, useRoutes } from 'react-router-dom';

import { Box } from '@mui/material';

import Home from 'src/pages/home';
import NumberPage from 'src/pages/number';
import FormatNumber from 'src/pages/formatNumber';
import FormatNumberByParts from 'src/pages/formatNumberByParts';

import DashboardLayout from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: 'number/formatNumber',
          element: <FormatNumber />,
        },
        {
          path: 'number/formatNumberByParts',
          element: <FormatNumberByParts />,
        },
        {
          path: 'number/getCurrencyList',
          element: <Box />,
        },
        {
          path: 'number/getCurrencySymbol',
          element: <Box />,
        },
        {
          path: 'number',
          element: <NumberPage />,
        },
        { path: 'phone', element: <Box /> },
        { path: 'date', element: <Box /> },
        { path: 'state', element: <Box /> },
        { path: 'plugins', element: <Box /> },
      ],
    },
  ]);

  return routes;
}
