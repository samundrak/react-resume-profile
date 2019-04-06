const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/samundrak/projects/samundrakc.com.np/.cache/dev-404-page.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/home/samundrak/projects/samundrakc.com.np/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/samundrak/projects/samundrakc.com.np/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/samundrak/projects/samundrakc.com.np/src/pages/projects.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/home/samundrak/projects/samundrakc.com.np/src/pages/skills.js")))
}

