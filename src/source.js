import agentcis from './images/agentcis.png';
import savetodrive from './images/savetodrive.png';
import PFConcept from './images/pfconcept.png';
import BhittePatro from './images/bhittepatro.png';
import bhadadar from './images/bhadadar.png';
import colorblind from './images/colorblind.png';
import dailamaara from './images/dailamaara.jpg';
import dbsole from './images/demo.gif';
import esdoc from './images/esdoc.gif';
import ssm from './images/spritesheetmaker.png';
import fadkit from './images/fadkit.png';

export default {
  name: 'Samundra Khatri',
  address: 'Kathmandu, Nepal',
  bio:
    'Passionate Pragmatic Developer who loves JavaScript',
  title: 'Samundra khatri | Javascript Developer | ReactJS Developer | Javascript Developer Nepal',
  email: ['samundrak@yahoo.com'],
  social: {
    github: {
      username: 'samundrak',
    },
    twitter: {
      username: 'kardnumas',
    },
    linkedIn: {
      username: 'samundrak',
    },
    youtube:{
      username:'Wholenightss'
    }
  },
  home: {
    tabs: {
      aboutMe: {
        content: `
   I am always striving to be broaden my knowledge and sharpen my skills. I love working in
                environment with lots of challenges and brilliant people to share those challenges with. I am very
                passionate about programming. I have keen eye for new paradigms and architecture. Though I am
                comfortable in one language, I also like to explore new languages. I also like indulging my time with
                my pet projects and participating in hackathons also i like to stay updated with the latest
                technologies.
                ---
                As a self learner, I started programming from mid of 2012, started from PHP and then HTML, CSS, Javascript.
                Learned it for a whole day of 2013 and then I started learning android and java from 2014-2015.In between this years, 
                i also learned database, networking and built projects like a clone of google adsense and google analytics,
                android mobile games and apps, windows desktop software. On March 2015 I got my first job and started working with team.
             
            `,
      },
      skills: {
        department: [
          { title: 'Frontend', rate: 8 },
          { title: 'Backend', rate: 6 },
          { title: 'DevOps', rate: 2 },
          { title: 'Web design', rate: 3 },
          { title: 'Database', rate: 4 },
        ],
        items: [
          {
            language: 'javascript',
            years: 5,
            rate: 7,
          },
          { language: 'react', years: 4, rate: 8 },
          'Code architect',
          'Principles',
          'Web Optimizations',
          'Single Page Apps',
          'vue',
          'html',
          'jquery',
          'bootstrap',
          'html',
          'css',
          'socket.io',
          'mongodb',
          'meteor',
          'mysql',
          'd3.js',
          'libgdx',
          'ubuntu',
          'linux',
          'nginx',
        ],
      },
      experience: {
        content:
          'As a self learner, I started programming from mid of 2012, started from PHP and then HTML, CSS, Javascript. Learned it for a whole day of 2013 and then I started learning android and java from 2014-2015.In between this years, i also learned database, networking and built projects like a clone of google adsense and google analytics, android mobile games and apps, windows desktop software. On March 2015 I got my first job and started working with team.',
        items: [
          {
            title: 'Javascript Developer',
            company: {
              name: ' Javra Software Nepal',
              website: 'https://javra.com',
            },
            startedAt: '2017-12-11',
            endAt: null,
            stacks: [
              'javascript',
              'reactjs',
              'vue.js',
              'webpack',
              'fabricjs',
              'redux',
              'flow',
              'jest',
              'codeceptjs',
            ],
            points: [
              'Led the development and adoption of React to a dashboard web app.',
              'Write application using latest EcmaScript specification',
              'Build an interface to manipulate the image for e-commerce products.(Fabricjs)',
              'Create a plugin to be pluggable on any website.',
              'Review code quality, maintain code standard across the team.',
              'Use state management tool to maintain the single source of truth. (Redux)',
              'Real-time user interface with WebSockets & ajax polling (Socket.io)',
              'Handle client-side authentication. (JWT, Cookie based Session)',
              'Write unit test, integration test.(Jest, CodeCeptJS)',
              'Optimization, Refactor and Gained Performance with things like code splitting, Service worker, web worker, clientside caching',
            ],
          },
          {
            title: 'Javascript Developer',
            company: {
              name: 'Introcept Nepal',
              website: 'https://nepal.introcept.co',
            },
            startedAt: '2016-6-1',
            endAt: '2017-11-31',
            stacks: ['vue.js', 'webpack', 'javascript', 'ecmascript', 'reactjs', 'vuex', 'node.js'],
            points: [
              'Part of the front end development team of their Vue web app.',
              'Managed application state maintaining the Single source of truth. (Vuex)',
              'Developed & maintained reusable components repository.',
              'Maintained Code quality, frontend project structure. (Linting/Strict typing)',
              'Developed RESTful API using laravel.',
              'Managed the application using bundling tool. (Webpack)',
              'Regularly Monitored application performance.(Sentry/DevTools)',
              'Delivered scalable client application (https://agentcis.com/)',
              'Managed Knowledge sharing session and Presentation of new trends internally',
              'Prevented Security issues XSS, CSRF',
              'Optimization, Refactor and Gained Performance with things like code splitting, Service worker, web worker, clientside',
            ],
          },
          {
            title: 'NodeJS Developer',
            company: {
              name: 'ZyobaLabs',
            },
            startedAt: '2015-3-3',
            endAt: '2016-5-31',
            stacks: ['nodejs', 'angularjs', 'expressjs', 'mongodb', 'd3js'],
            points: [
              "Built API's using express",
              'Analyzed code quality and application performance',
              'Integrated API with AngularJS',
              'Analyzed user experience',
              'Full stack development using Node.js, Express, Angular, and Mysql',
              'Delivered fast and speedy client interface',
              'Created charts and visualization using D3, D3plus',
            ],
          },
        ],
      },
      resume: {
        resource: 'https://www.pdf-archive.com/2018/03/05/samundra-kc-4/samundra-kc-4.pdf',
      },
    },
  },
  projects: [
    {
      name: 'Web',
      items: [
        {
          name: 'Agentcis',
          url: 'https://agentcis.com',
          description: 'Client relation manager, invoice trackings',
          role: 'Frontend Developer',
          img: agentcis,
        },
        {
          name: 'PFConcept',
          description: 'Visualizer for editing products and logo placements.',
          role: 'Frontend/Backend Developer',
          img: PFConcept,
        },
        {
          name: 'Savetodrive',
          url: 'https://savetodrive.net',
          description: 'Save web files to your cloud drives.',
          role: 'Frontend/Backend Developer',
          img: savetodrive,
        },
        {
          name: 'BhittePatro',
          description:
            'BhittePatro is a calendar for Nepali Date inspired from Google Calendar excluding Week/Day view, Event Management. BhittePatro will be offline first app so that we can view calendar offline anytime and soon to be PWA.',
          url: 'https://bhittepatro.com',
          img: BhittePatro,
        },
        {
          name: 'Bhadadar',
          description:
            'Bhadadar is an app where user can see the bus fair of route which was approved by government.',
          url: 'http://bhadadar.netlify.com',
          img: bhadadar,
        },
      ],
      icon: 'global',
    },
    {
      name: 'NPM Modules',
      items: [
        {
          name: 'Solti',
          url: 'https://www.npmjs.com/package/solti',
          description:
            'Solti is an cli tool to generate React & Vue Component decorated with patterns that are widely used and mostly taken from site React Patterns and others.',
          role: 'Author',
        },
        {
          name: 'Thekdar',
          url: 'https://www.npmjs.com/package/thekdar',
          role: 'Author',
          description:
            'Thekdar is module which will manage node child process , it will help us creating workers, distribute task across workers, kill workers or limit there work',
        },
        {
          name: 'ExpressJS API Explorer',
          url: 'https://www.npmjs.com/package/expressjs-api-explorer',
          description:
            "Expressjs api explorer is an API Explorer module of expressJS where you can see all the registered api's of express also with the middleware attached. You can see the route method type and more",
        },
      ],
      icon: 'pushpin',
    },
    {
      name: 'Mobile Apps',
      items: [
        {
          name: 'Luck You',
          description: "A fun app to output user's luck",
          url: 'https://github.com/samundrak/LuckYou',
        },
      ],
      icon: 'android',
    },
    {
      name: 'Games',
      items: [
        {
          name: 'ColorBlind',
          url: 'https://github.com/samundrak/ColorBlind',
          description: 'A Color Matching android game much like color switch.',
          img: colorblind,
        },
        {
          name: 'DailaMaara',
          url: 'https://github.com/samundrak/Dailamaara',
          description: 'Dahalmaara is cross platform card game made on LibGDX.',
          img: dailamaara,
        },
      ],
      icon: 'shake',
    },
    {
      name: 'Desktop Software',
      items: [
        {
          name: 'SpriteSheet Maker',
          description:
            'Spritesheet Maker is a application where you will import sprites from any folder into the program. You can decide the padding inside sprite itself new width and hieght of sprite and margin right and bottom between the sprites after that you can click on preview to preview the outcome or click on Generate SpriteSheet button to generate spriteshee…',
          url: 'https://github.com/samundrak/SpriteSheetMaker',
          img: ssm,
        },
        {
          name: 'JustFast',
          url: 'https://github.com/samundrak/JustFast',
          description:
            'JustFast is a simple program based on FTP. It was useful for me to transfer the android app made in eclipse to mobile from ftp. Any FTP program in android device that supports FTP can be helpful to transfer file. Something that we can see is the file transfer rate in Byte, Kilo Byte and Mega Byte which may be very useful for developing process.',
        },
      ],
      icon: 'windows',
    },
    {
      name: 'Browser Extensions',
      items: [
        {
          name: 'DBSole',
          img: dbsole,
          url: 'https://github.com/samundrak/DBSole',
          description:
            'Access your database from your Google chrome DevTool. No need to switch over terminal or phpMyAdmin just open your console and start querying',
        },
      ],
      icon: 'chrome',
    },
    {
      name: 'IDE/Editor Plugin',
      items: [
        {
          name: 'ESDoc mdn',
          description:
            'See documentation of any javascript api from mozilla on your visual studio code side by side',
          url: 'https://marketplace.visualstudio.com/items?itemName=samundrak.esdoc-mdn',
          img: esdoc,
        },
      ],
      icon: 'code',
    },
    {
      name: 'Social media application and Bots',
      items: [
        {
          name: 'Facebook Application Development Kit',
          description:
            'A Facebook Application Development Kit .. Facebook Application Development kit (FADkit) is a Facebook apps management script where you can manage many Facebook app types from a single installation. Though it is good to make a single app for particular installation.',
          url: 'https://github.com/samundrak/Facebook-Application-Development-Kit',
          img: fadkit,
        },
        {
          name: 'Periscope Live streamer',
          description:
            "Twitter's Periscope live video streaming.. it catche the recent tweet of owner broadcasted from periscope and then stream the video in their website",
          url: 'https://github.com/samundrak/periscope-livestream-mobile-to-web',
        },
      ],
      icon: 'facebook',
    },
  ],
};
