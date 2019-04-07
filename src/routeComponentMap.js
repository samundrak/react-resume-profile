import Home from './pages/index';
import Skills from './pages/skills';
import Experience from './pages/experience';
import Projects from './pages/projects';

export default [
  {
    route: '/',
    component: Home,
    name: 'Home',
    inMenu: true,
  },
  {
    route: '/projects',
    component: Projects,
    name: 'Projects',
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
