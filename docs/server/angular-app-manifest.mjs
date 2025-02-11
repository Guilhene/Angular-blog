
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-blog/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 940, hash: '5620999110be18d6207443493f13a5997b5891072bba6d8e840bae6234d9d488', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1079, hash: '2887887e4725d3d45d156a6840cb6591ac313ced8735c73a3d0a2219dea9e950', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DWEZ24QY.css': {size: 18171, hash: 'zF5mdrcfPfU', text: () => import('./assets-chunks/styles-DWEZ24QY_css.mjs').then(m => m.default)}
  },
};
