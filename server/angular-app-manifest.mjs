
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://guilhene.github.io/angular-blog/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 966, hash: '4dba8010642f4a2804978544f7d8d8548c537d62c6e74fcfe64d9d790e28eed0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1105, hash: '080df69eb04a6a31bbf52a16ebd7794d613d9b4b19f7714bb2d012fa66351f51', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DWEZ24QY.css': {size: 18171, hash: 'zF5mdrcfPfU', text: () => import('./assets-chunks/styles-DWEZ24QY_css.mjs').then(m => m.default)}
  },
};
