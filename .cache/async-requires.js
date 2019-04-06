// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/samundrak/projects/samundrakc.com.np/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-experience-js": () => import("/home/samundrak/projects/samundrakc.com.np/src/pages/experience.js" /* webpackChunkName: "component---src-pages-experience-js" */),
  "component---src-pages-index-js": () => import("/home/samundrak/projects/samundrakc.com.np/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("/home/samundrak/projects/samundrakc.com.np/src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-skills-js": () => import("/home/samundrak/projects/samundrakc.com.np/src/pages/skills.js" /* webpackChunkName: "component---src-pages-skills-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/samundrak/projects/samundrakc.com.np/.cache/data.json")

