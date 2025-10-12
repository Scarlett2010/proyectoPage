import { _ as __vite_glob_0_0 } from '../chunks/derechocivil_CQhObsh3.mjs';
import { c as createComponent, r as renderComponent, a as renderHead, e as addAttribute, d as renderTemplate } from '../chunks/astro/server_CvdJcJch.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, S as SITE_TITLE } from '../chunks/Footer_DMVZ7Jkt.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Derechocivil = createComponent(($$result, $$props, $$slots) => {
  const serviciosImport = /* #__PURE__ */ Object.assign({"../content/services/derechocivil.md": __vite_glob_0_0




});
  const servicios = Object.entries(serviciosImport).map(([path, module]) => {
    return {
      slug: path.split("/").pop().replace(/\.md$/, ""),
      frontmatter: module.frontmatter,
      Content: module.Content
    };
  });
  return renderTemplate`<html lang="es" data-astro-cid-ov3v2z3g> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE + " | Nosotros", "description": "Conoce a LEXLOCI Abogados y sus especialidades legales.", "data-astro-cid-ov3v2z3g": true })}${renderHead()}</head> <body data-astro-cid-ov3v2z3g> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ov3v2z3g": true })} <main class="principal" style="max-width: 900px; margin: auto; padding: 2rem;" data-astro-cid-ov3v2z3g> <h3 data-astro-cid-ov3v2z3g>Servicios legales</h3> <p data-astro-cid-ov3v2z3g>
Nuestro compromiso es brindar asesoría legal experta utilizando todas
        las herramientas del ordenamiento jurídico ecuatoriano para garantizar
        una defensa sólida y efectiva en cada procedimiento.
</p> <img class="perfil" src="/src/assets/dr-ja.jpg" alt="Perfil de abogado" data-astro-cid-ov3v2z3g> <section class="cards-container" data-astro-cid-ov3v2z3g> ${servicios.map((servicio) => renderTemplate`<div class="card"${addAttribute(servicio.slug, "key")} data-astro-cid-ov3v2z3g> <div class="card-icon" data-astro-cid-ov3v2z3g>⚖️</div> <h3 data-astro-cid-ov3v2z3g>${servicio.frontmatter.title}</h3> <div class="contenido" data-astro-cid-ov3v2z3g> ${renderComponent($$result, "servicio.Content", servicio.Content, { "data-astro-cid-ov3v2z3g": true })} </div> </div>`)} </section> </main> <main class="second" data-astro-cid-ov3v2z3g> <h5 data-astro-cid-ov3v2z3g>¿Por qué elegir mi representación legal?</h5> <p data-astro-cid-ov3v2z3g>
- Experiencia especializada en derecho penal, procesal penal y civil.
</p> <p data-astro-cid-ov3v2z3g>
- Defensa personalizada adaptada a las particularidades de cada caso.
</p> <p data-astro-cid-ov3v2z3g>
- Acompañamiento integral desde la investigación hasta la ejecución de
        sentencias
</p> <p data-astro-cid-ov3v2z3g>
- Compromiso con la justicia y la protección de los derechos de mis
        clientes.
</p> </main> <a href="https://wa.me/593983844657" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Contactar por WhatsApp" data-astro-cid-ov3v2z3g> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" data-astro-cid-ov3v2z3g> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" data-astro-cid-ov3v2z3g></path> </svg> </a> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ov3v2z3g": true })} </body></html>`;
}, "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/derechocivil.astro", void 0);

const $$file = "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/derechocivil.astro";
const $$url = "/derechocivil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Derechocivil,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
