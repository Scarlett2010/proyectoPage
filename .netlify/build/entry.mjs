import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_9M0IqLO7.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/enviocorreo.astro.mjs');
const _page3 = () => import('./pages/derechoc.astro.mjs');
const _page4 = () => import('./pages/derechocivil.astro.mjs');
const _page5 = () => import('./pages/derechof.astro.mjs');
const _page6 = () => import('./pages/derechop.astro.mjs');
const _page7 = () => import('./pages/form.astro.mjs');
const _page8 = () => import('./pages/services.astro.mjs');
const _page9 = () => import('./pages/services/_---slug_.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/envioCorreo.ts", _page2],
    ["src/pages/derechoc.astro", _page3],
    ["src/pages/derechocivil.astro", _page4],
    ["src/pages/derechof.astro", _page5],
    ["src/pages/derechop.astro", _page6],
    ["src/pages/form.astro", _page7],
    ["src/pages/services/index.astro", _page8],
    ["src/pages/services/[...slug].astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "adc10dde-0e15-4256-bd17-7aec7047eebe"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
