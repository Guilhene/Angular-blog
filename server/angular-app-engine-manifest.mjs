
export default {
  basePath: 'https://guilhene.github.io/angular-blog',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
