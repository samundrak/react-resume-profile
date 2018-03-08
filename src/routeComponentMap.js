import Home from './pages/Home';
import Skills from './pages/Skills';

export default [
  {
    route: '/',
    component: Home,
    name: 'Home',
    inMenu: true,
  },
  {
    route: '/skills',
    component: Skills,
    name: 'Skills',
    inMenu: true,
  },
];
