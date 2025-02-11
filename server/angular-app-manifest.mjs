
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://guilhene.github.io/Angular-blog/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 966, hash: 'e3350b7ded13b793fd4aea2172aabe2d6406571aa467f91acc39367a5877eaf8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1105, hash: '5244a5910d0238d23c6de183562488b4188a7cc3eeccafa35f28c9eb04e902c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DWEZ24QY.css': {size: 18171, hash: 'zF5mdrcfPfU', text: () => import('./assets-chunks/styles-DWEZ24QY_css.mjs').then(m => m.default)}
  },
};
