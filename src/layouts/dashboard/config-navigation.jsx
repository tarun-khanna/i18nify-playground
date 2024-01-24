import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Overview',
    path: '/',
    icon: icon('ic_home'),
  },
  {
    title: 'Number',
    path: '/number',
    icon: icon('ic_currency'),
  },
  {
    title: 'Phone',
    path: '/phone',
    icon: icon('ic_phone'),
  },
  {
    title: 'Date',
    path: '/date',
    icon: icon('ic_date'),
  },
  {
    title: 'Plugins',
    path: '/plugins',
    icon: icon('ic_plugin'),
  },
];

export default navConfig;
