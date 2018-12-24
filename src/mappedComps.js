import AboutMe from './components/tabs/AboutMe';
import Skills from './components/tabs/Skills';
import Experience from './components/tabs/Experience';
import Resume from './components/tabs/Resume';

export default [
  {
    header: 'About Me',
    iconType: 'user',
    component: AboutMe,
  },
  {
    header: 'Skills',
    iconType: 'code',
    component: Skills,
  },
  {
    header: 'Experience',
    iconType: 'rocket',
    component: Experience,
  },
  {
    header: 'Resume',
    iconType: 'profile',
    component: Resume,
  },
];
