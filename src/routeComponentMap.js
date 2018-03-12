import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';

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
  {
    route: '/experience',
    component: Experience,
    name: 'Experience',
    inMenu: true,
  },
];
