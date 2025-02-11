
export default {
  basePath: 'https://guilhene.github.io/Blog',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
