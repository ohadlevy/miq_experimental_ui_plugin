import Welcome from '../../scenes/Welcome';
import Dashboard from '../../scenes/Dashboard';

// eslint-disable-next-line import/prefer-default-export
export const links = [
  {
    text: 'Welcome',
    path: 'demo/',
    component: Welcome,
  },
  {
    text: 'Dashboard',
    path: 'demo/xui/dashboard',
    component: Dashboard,
  },
];
