import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, l as decodeKey } from './chunks/astro/server_CvdJcJch.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Scarlett/pagina%20web%201/AbogadoJorge/","cacheDir":"file:///C:/Scarlett/pagina%20web%201/AbogadoJorge/node_modules/.astro/","outDir":"file:///C:/Scarlett/pagina%20web%201/AbogadoJorge/dist/","srcDir":"file:///C:/Scarlett/pagina%20web%201/AbogadoJorge/src/","publicDir":"file:///C:/Scarlett/pagina%20web%201/AbogadoJorge/public/","buildClientDir":"file:///C:/Scarlett/pagina%20web%201/AbogadoJorge/dist/","buildServerDir":"file:///C:/Scarlett/pagina%20web%201/AbogadoJorge/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"derechoc/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/derechoc","isIndex":false,"type":"page","pattern":"^\\/derechoc\\/?$","segments":[[{"content":"derechoc","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/derechoc.astro","pathname":"/derechoc","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"derechocivil/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/derechocivil","isIndex":false,"type":"page","pattern":"^\\/derechocivil\\/?$","segments":[[{"content":"derechocivil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/derechocivil.astro","pathname":"/derechocivil","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"derechof/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/derechof","isIndex":false,"type":"page","pattern":"^\\/derechof\\/?$","segments":[[{"content":"derechof","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/derechof.astro","pathname":"/derechof","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"derechop/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/derechop","isIndex":false,"type":"page","pattern":"^\\/derechop\\/?$","segments":[[{"content":"derechop","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/derechop.astro","pathname":"/derechop","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"form/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/form","isIndex":false,"type":"page","pattern":"^\\/form\\/?$","segments":[[{"content":"form","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/form.astro","pathname":"/form","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/enviocorreo","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/envioCorreo\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"envioCorreo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/envioCorreo.ts","pathname":"/api/envioCorreo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/derechoc.astro",{"propagation":"in-tree","containsHead":true}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/derechocivil.astro",{"propagation":"in-tree","containsHead":true}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/derechof.astro",{"propagation":"in-tree","containsHead":true}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/derechop.astro",{"propagation":"in-tree","containsHead":true}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/form.astro",{"propagation":"in-tree","containsHead":true}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/services/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/services/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/consts.ts",{"propagation":"in-tree","containsHead":false}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/components/BaseHead.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/derechoc@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/derechocivil@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/derechof@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/derechop@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/form@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/services/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/services/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["C:/Scarlett/pagina web 1/AbogadoJorge/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/envioCorreo@_@ts":"pages/api/enviocorreo.astro.mjs","\u0000@astro-page:src/pages/derechoc@_@astro":"pages/derechoc.astro.mjs","\u0000@astro-page:src/pages/derechocivil@_@astro":"pages/derechocivil.astro.mjs","\u0000@astro-page:src/pages/derechof@_@astro":"pages/derechof.astro.mjs","\u0000@astro-page:src/pages/derechop@_@astro":"pages/derechop.astro.mjs","\u0000@astro-page:src/pages/form@_@astro":"pages/form.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/services/[...slug]@_@astro":"pages/services/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_9M0IqLO7.mjs","C:/Scarlett/pagina web 1/AbogadoJorge/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:\\Scarlett\\pagina web 1\\AbogadoJorge\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","\u0000astro:assets":"chunks/_astro_assets_IwJkUvz0.mjs","C:\\Scarlett\\pagina web 1\\AbogadoJorge\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DtHne4Jn.mjs","C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/about.astro?astro&type=script&index=0&lang.ts":"_astro/about.astro_astro_type_script_index_0_lang.CmTJG9Qv.js","C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/form.astro?astro&type=script&index=0&lang.ts":"_astro/form.astro_astro_type_script_index_0_lang.xgf6bFnf.js","C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.WwfrrFGv.js","C:/Scarlett/pagina web 1/AbogadoJorge/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CrUH5ECX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/about.astro?astro&type=script&index=0&lang.ts","const a={threshold:.15,rootMargin:\"0px 0px -80px 0px\"},o=new IntersectionObserver(n=>{n.forEach(e=>{const t=e.target,s=t.getAttribute(\"data-animation\");e.isIntersecting?s&&(t.classList.add(s),t.style.opacity=\"1\",t.style.transform=\"translateY(0)\"):s&&(t.classList.remove(s),t.style.opacity=\"0\",t.style.transform=\"translateY(30px)\")})},a);document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".scroll-animate\").forEach((e,t)=>{e.style.opacity=\"0\",e.style.transform=\"translateY(30px)\",e.style.transitionDelay=`${t*.15}s`,o.observe(e)})});"],["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/form.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"formulario\").addEventListener(\"submit\",async e=>{e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries());(await fetch(\"/api/envioCorreo\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(a)})).ok?(alert(\"Solicitud enviada correctamente.\"),e.target.reset()):alert(\"Error al enviar la solicitud.\")});"],["C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/index.astro?astro&type=script&index=0&lang.ts","const r={threshold:.1,rootMargin:\"0px 0px -50px 0px\"},s=new IntersectionObserver(n=>{n.forEach(e=>{if(e.isIntersecting){const t=e.target,o=t.getAttribute(\"data-animation\");o&&(t.classList.add(o),s.unobserve(t))}})},r);document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".scroll-animate\").forEach(e=>{e.style.opacity=\"0\",s.observe(e)})});"],["C:/Scarlett/pagina web 1/AbogadoJorge/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\".menu-toggle\"),t=document.querySelector(\".internal-links\");e.addEventListener(\"click\",()=>{t.classList.toggle(\"visible\")});"]],"assets":["/_astro/linkedin.DgLzhU7_.png","/_astro/whatsapp.BtCgz4Tn.png","/_astro/email.Bx-KPswe.png","/_astro/scale.DNRLabWE.png","/_astro/ubicacion.DjklXPkM.png","/_astro/logo.C1gede5s.png","/_astro/fondoportada.DSnDR_Ic.jpg","/_astro/about.2q1zH7Jn.css","/_astro/about.Bct_EgM5.css","/_astro/derechoc.BKtHkk0X.css","/_astro/derechocivil.k3dw4CRv.css","/_astro/derechof.CU_Wuw9l.css","/_astro/derechop.CWPaBXux.css","/_astro/form.B-RIiayJ.css","/_astro/index.DLTDW03H.css","/favicon.svg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/about/index.html","/derechoc/index.html","/derechocivil/index.html","/derechof/index.html","/derechop/index.html","/form/index.html","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"UzIECMBjRge1UsTY0N1Vv1FTAX5tSOli5FC1w7objrM=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
