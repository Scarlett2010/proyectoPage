import { f as createAstro, c as createComponent, r as renderComponent, a as renderHead, d as renderTemplate } from '../../chunks/astro/server_CvdJcJch.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../chunks/Footer_DMVZ7Jkt.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

const $$Astro = createAstro("https://example.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const services = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../content/services/derechoc.md": () => import('../../chunks/derechoc_Baiv5gO6.mjs').then(n => n._),"../../content/services/derechocivil.md": () => import('../../chunks/derechocivil_CQhObsh3.mjs').then(n => n._),"../../content/services/derechof.md": () => import('../../chunks/derechof_D4YXjOuL.mjs').then(n => n._),"../../content/services/derechop.md": () => import('../../chunks/derechop_DOvwHwjy.mjs').then(n => n._)})), `../../content/services/${slug}.md`, 5);
  const { Content, frontmatter } = services;
  return renderTemplate`<html lang="es" data-astro-cid-3fxtnocf> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": frontmatter.title, "description": frontmatter.description, "data-astro-cid-3fxtnocf": true })}${renderHead()}</head> <body data-astro-cid-3fxtnocf> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-3fxtnocf": true })} <main class="container" data-astro-cid-3fxtnocf> <h1 data-astro-cid-3fxtnocf>${frontmatter.title}</h1> <p data-astro-cid-3fxtnocf>${frontmatter.description}</p> <div class="contenido" data-astro-cid-3fxtnocf> ${renderComponent($$result, "Content", Content, { "data-astro-cid-3fxtnocf": true })} </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-3fxtnocf": true })} </body></html>`;
}, "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/services/[...slug].astro", void 0);

const $$file = "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/services/[...slug].astro";
const $$url = "/services/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
