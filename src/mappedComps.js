import React from 'react';
import AboutMe from "./components/AboutMe";
import Skills from './components/Skills';
import Experience from './components/Experience';
import Resume from './components/Resume';

export default [
    {
        header: 'About Me',
        iconType: 'user',
        component: AboutMe
    },
    {
        header: 'Skills',
        iconType: 'code',
        component: Skills
    },
    {
        header: 'Experience',
        iconType: 'rocket',
        component: Experience
    },
    {
        header: 'Resume',
        iconType: 'profile',
        component: Resume
    }
]