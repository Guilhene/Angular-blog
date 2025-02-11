
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://guilhene.github.io/Blog/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 958, hash: '6ea9a5bac750648b8de54192cb583b280bb9a913460212fd3e7c143ed57cf8ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1097, hash: 'ed07901f2a97846d6d155f273a8c54e697442c211b9051fa72920725b4952477', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DWEZ24QY.css': {size: 18171, hash: 'zF5mdrcfPfU', text: () => import('./assets-chunks/styles-DWEZ24QY_css.mjs').then(m => m.default)}
  },
};
