import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import FormatNumber from 'src/pages/formatNumber';
import Home from 'src/pages/home';

export const NumberPage = lazy(() => import('src/pages/number'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

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
          element: <Home />,
          index: true,
        },
        {
          path: 'number/formatNumber',
          element: <FormatNumber />,
        },
        {
          path: 'number',
          element: <NumberPage />,
          children: [
            {
              path: 'formatNumber',
              element: <FormatNumber />,
            },
          ],
        },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
  ]);

  return routes;
}
