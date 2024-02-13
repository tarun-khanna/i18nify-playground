import { Outlet, useRoutes } from 'react-router-dom';

import { Box } from '@mui/material';

import Home from 'src/pages/home';
import NumberPage from 'src/pages/number';
import FormatNumber from 'src/pages/number/formatNumber';
import FormatNumberByParts from 'src/pages/number/formatNumberByParts';

import DashboardLayout from 'src/layouts/dashboard';
import GetCurrencySymbol from 'src/pages/number/getCurrencySymbol';
import GetCurrencyList from 'src/pages/number/getCurrencyList';

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
          element: <GetCurrencyList />,
        },
        {
          path: 'number/getCurrencySymbol',
          element: <GetCurrencySymbol />,
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
