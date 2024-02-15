import { Outlet, useRoutes } from 'react-router-dom';

import { Box } from '@mui/material';

import Home from 'src/pages/home';
import NumberPage from 'src/pages/number';
import GeoPage from 'src/pages/geo';
import PhoneNumber from 'src/pages/phone/phoneNumber';
import DashboardLayout from 'src/layouts/dashboard';
import IsValidPhoneNumberView from 'src/pages/phone/isValidPhoneNumber';
import FormatPhoneNumber from 'src/pages/phone/formatPhoneNumber';
import ParsePhoneNumber from 'src/pages/phone/parsePhoneNumber';
import FormatNumber from 'src/pages/number/formatNumber';
import FormatNumberByParts from 'src/pages/number/formatNumberByParts';

import GetCurrencySymbol from 'src/pages/number/getCurrencySymbol';
import GetCurrencyList from 'src/pages/number/getCurrencyList';
import ConvertToMajorUnit from 'src/pages/number/convertToMajorUnit';
import ConvertToMinorUnit from 'src/pages/number/convertToMinorUnit';

import GetFlagByCountry from 'src/pages/geo/getFlagByCountry';
import GetListOfAllFlags from 'src/pages/geo/getListOfAllFlags';

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
          path: 'number/convertToMajorUnit',
          element: <ConvertToMajorUnit />,
        },
        {
          path: 'number/convertToMinorUnit',
          element: <ConvertToMinorUnit />,
        },
        {
          path: 'number',
          element: <NumberPage />,
        },
        { path: 'phone', element: <PhoneNumber /> },
        { path: 'phone/isValidPhoneNumber', element: <IsValidPhoneNumberView /> },
        { path: 'phone/formatPhoneNumber', element: <FormatPhoneNumber /> },
        { path: 'phone/parsePhoneNumber', element: <ParsePhoneNumber /> },
        { path: 'date', element: <Box /> },
        {
          path: 'geo/getListOfAllFlags',
          element: <GetListOfAllFlags />,
        },
        {
          path: 'geo/getFlagByCountry',
          element: <GetFlagByCountry />,
        },
        {
          path: 'geo',
          element: <GeoPage />,
        },
        { path: 'state', element: <Box /> },
        { path: 'plugins', element: <Box /> },
      ],
    },
  ]);

  return routes;
}
