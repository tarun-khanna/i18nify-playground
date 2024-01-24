import { Box } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const NumberPage = lazy(() => import('src/pages/number'));
export const FormatNumberPage = lazy(() => import('src/pages/formatNumber'));
export const HomePage = lazy(() => import('src/pages/home'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          path: 'number/formatNumber',
          element: <FormatNumberPage />,
        },
        {
          path: 'number/formatNumberByParts',
          element: <Box />,
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
        { path: 'plugins', element: <Box /> },
      ],
    },
  ]);

  return routes;
}
