import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

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
  {
    route: '/projects',
    component: Projects,
    name: 'Projects',
    inMenu: true,
  },
];
