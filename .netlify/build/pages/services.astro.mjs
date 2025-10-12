import { c as createComponent, r as renderComponent, a as renderHead, e as addAttribute, d as renderTemplate } from '../chunks/astro/server_CvdJcJch.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_DMVZ7Jkt.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const servicios = await getCollection("blog");
  return renderTemplate`<html lang="es" data-astro-cid-52q5xhqt> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Nuestros Servicios", "description": "Conoce las \xE1reas legales en las que te podemos ayudar.", "data-astro-cid-52q5xhqt": true })}${renderHead()}</head> <body data-astro-cid-52q5xhqt> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-52q5xhqt": true })} <main class="container" data-astro-cid-52q5xhqt> <h1 data-astro-cid-52q5xhqt>Nuestros Servicios</h1> <div class="grid" data-astro-cid-52q5xhqt> ${servicios.map((servicio) => renderTemplate`<a${addAttribute(`/blog/${servicio.slug}/`, "href")} class="card" data-astro-cid-52q5xhqt> <h2 data-astro-cid-52q5xhqt>${servicio.data.title}</h2> <p data-astro-cid-52q5xhqt>${servicio.data.description}</p> </a>`)} </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-52q5xhqt": true })} </body></html>`;
}, "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/services/index.astro", void 0);

const $$file = "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
