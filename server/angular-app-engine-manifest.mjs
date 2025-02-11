
export default {
  basePath: 'https://guilhene.github.io/Angular-blog',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
