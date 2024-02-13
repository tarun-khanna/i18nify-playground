import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export const icon = (name) => (
  <SvgColor
    src={`/i18nify-playground/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: 'Overview',
    path: '/',
    icon: icon('ic_home'),
  },
  {
    title: 'Currency & Number',
    path: '/number',
    icon: icon('ic_currency'),
    children: [
      { title: 'FormatNumber', path: '/number/formatNumber' },
      { title: 'FormatNumberByParts', path: '/number/formatNumberByParts' },
      { title: 'GetCurrencyList', path: '/number/getCurrencyList' },
      { title: 'GetCurrencySymbol', path: '/number/getCurrencySymbol' },
    ],
  },
  {
    title: 'Phone',
    path: '/phone',
    icon: icon('ic_phone'),
    children: [
      { title: 'IsValidPhoneNumber', path: '/phone/isValidPhoneNumber' },
      { title: 'FormatPhoneNumber', path: '/phone/formatPhoneNumber' },
      { title: 'ParsePhoneNumber', path: '/phone/parsePhoneNumber' },
    ],
  },
  {
    title: 'Date',
    path: '/date',
    icon: icon('ic_date'),
  },
  {
    title: 'State',
    path: '/state',
    icon: icon('ic_state'),
    children: [
      { title: 'GetState', path: '/state/getState' },
      { title: 'SetState', path: '/state/setState' },
    ],
  },
  {
    title: 'Plugins',
    path: '/plugins',
    icon: icon('ic_plugin'),
  },
];

export default navConfig;
