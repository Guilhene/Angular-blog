
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './[Guilhene]',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 938, hash: 'ef55943aee60a65e5a927f353da3dcbf4078954b0b7f472ee80cc4ade353c242', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1077, hash: 'e8e75701c6073319ab846305c9f04f2a2edce7438b509f2dfc6bee22d75ad91b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DWEZ24QY.css': {size: 18171, hash: 'zF5mdrcfPfU', text: () => import('./assets-chunks/styles-DWEZ24QY_css.mjs').then(m => m.default)}
  },
};
