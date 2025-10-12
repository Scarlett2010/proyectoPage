import { c as createComponent, r as renderComponent, a as renderHead, b as renderScript, e as addAttribute, d as renderTemplate } from '../chunks/astro/server_CvdJcJch.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseHead, a as $$Header, b as $$Footer, c as SITE_DESCRIPTION, S as SITE_TITLE } from '../chunks/Footer_DMVZ7Jkt.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let servicios = await getCollection("services");
  const orden = {
    "Derecho Penal": 1,
    "Derecho Constitucional": 2,
    "Derecho Civil": 3,
    "Derecho de Familia": 3
    // Igual que Derecho Civil para agrupar juntos
  };
  servicios = servicios.sort(
    (a, b) => (orden[a.data.title] ?? 99) - (orden[b.data.title] ?? 99)
  );
  const rutas = {
    "Derecho Penal": "/derechop",
    "Derecho Constitucional": "/derechoc",
    "Derecho Civil": "/derechocivil",
    "Derecho de Familia": "/derechof"
  };
  return renderTemplate`<html lang="es" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <!-- Hero section with background image and overlay text --> <div class="hero-section" data-astro-cid-j7pv25f6> <div class="hero-content" data-astro-cid-j7pv25f6> <h5 data-astro-cid-j7pv25f6>
Representación legal experta | Resultados garantizados
</h5> <p data-astro-cid-j7pv25f6>
Cada caso es único, cada cliente es prioritario. Ofrecemos un
          acompañamiento jurídico integral desde la consulta inicial hasta la
          resolución definitiva, defendiendo sus derechos con experiencia y
          dedicación absoluta.
</p> <a href="/about" class="hero-button" data-astro-cid-j7pv25f6> Conoce nuestro equipo </a> </div> </div> <main style="max-width: 900px; margin: auto; padding: 2rem;" class="principal" data-astro-cid-j7pv25f6> <main class="services" data-astro-cid-j7pv25f6> <h4 style="margin-top: 0" data-astro-cid-j7pv25f6>Esperticia Juridica</h4> <section class="cards-container" data-astro-cid-j7pv25f6> ${servicios.map((servicio) => renderTemplate`<a${addAttribute(rutas[servicio.data.title] || "#", "href")} class="card" style="text-decoration: none; border: 1px solid #ccc; padding: 1rem; border-radius: 8px; color: #000; transition: box-shadow 0.3s ease; display: block;"${addAttribute(servicio.id, "key")} data-astro-cid-j7pv25f6> <img${addAttribute(
    servicio.data.image || (servicio.data.title === "Derecho Civil" ? "/src/assets/derechocivil2.jpg" : servicio.data.title === "Derecho Constitucional" ? "/src/assets/derechocconstitucional2.webp" : servicio.data.title === "Derecho Penal" ? "/src/assets/derechopenal.webp" : servicio.data.title === "Derecho de Familia" ? "/src/assets/derechof2.jpg" : ""),
    "src"
  )}${addAttribute(servicio.data.title, "alt")} class="card-image" data-astro-cid-j7pv25f6> <h5 style="margin-top: 0;" data-astro-cid-j7pv25f6>${servicio.data.title}</h5> <p data-astro-cid-j7pv25f6>${servicio.data.description}</p> </a>`)} </section> </main> <!-- Simplified benefits section with clean card design --> <section class="benefits-section" data-astro-cid-j7pv25f6> <div class="benefits-container" data-astro-cid-j7pv25f6> <h3 class="benefits-title" data-astro-cid-j7pv25f6>Nuestros Beneficios</h3> <div class="benefits-grid" data-astro-cid-j7pv25f6> <div class="benefit-card" data-astro-cid-j7pv25f6> <div class="benefit-icon" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-astro-cid-j7pv25f6></path> </svg> </div> <h4 class="benefit-title" data-astro-cid-j7pv25f6>Trayectoria Comprobada</h4> <p class="benefit-date" data-astro-cid-j7pv25f6>12 años de experiencia</p> <p class="benefit-description" data-astro-cid-j7pv25f6>
Defensa en contravenciones y representación en diversos procesos
                judiciales.
</p> </div> <div class="benefit-card" data-astro-cid-j7pv25f6> <div class="benefit-icon" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-astro-cid-j7pv25f6></path> <circle cx="9" cy="7" r="4" data-astro-cid-j7pv25f6></circle> <path d="M23 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-j7pv25f6></path> <path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-j7pv25f6></path> </svg> </div> <h4 class="benefit-title" data-astro-cid-j7pv25f6>Defensa Legal Integral</h4> <p class="benefit-date" data-astro-cid-j7pv25f6>Especializado</p> <p class="benefit-description" data-astro-cid-j7pv25f6>
Representación profesional en diversas áreas del derecho,
                garantizando la protección de tus derechos.
</p> </div> <div class="benefit-card" data-astro-cid-j7pv25f6> <div class="benefit-icon" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-astro-cid-j7pv25f6></path> <polyline points="14 2 14 8 20 8" data-astro-cid-j7pv25f6></polyline> </svg> </div> <h4 class="benefit-title" data-astro-cid-j7pv25f6>
Gestión Jurídica y Asesoría Documental
</h4> <p class="benefit-date" data-astro-cid-j7pv25f6>Servicio completo</p> <p class="benefit-description" data-astro-cid-j7pv25f6>
Asesoría en trámites legales, con un enfoque personalizado y
                seguro.
</p> </div> </div> </div> </section> <!-- Redesigned second-container with professional isotipo presentation --> <main class="second-container" data-astro-cid-j7pv25f6> <div class="cta-content" data-astro-cid-j7pv25f6> <h3 class="scroll-animate" data-animation="slide-up" data-astro-cid-j7pv25f6>
¿Necesitas asesoría legal?
</h3> <div class="isotipo-wrapper scroll-animate" data-animation="slide-in-left" data-astro-cid-j7pv25f6> <img class="isotipo" src="/src/assets/lexloci2.jpg" alt="LEXLOCI - Símbolo de justicia y excelencia legal" data-astro-cid-j7pv25f6> </div> <p class="cta-description scroll-animate" data-animation="slide-up" data-astro-cid-j7pv25f6>
Justicia con visión estratégica y compromiso ético. Contáctanos y
            descubre cómo podemos ayudarte a proteger tus derechos y alcanzar
            los mejores resultados en tu caso.
</p> <a href="/form" class="cta-button scroll-animate" data-animation="slide-up" data-astro-cid-j7pv25f6>
Trabajemos juntos
</a> </div> </main> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} <!-- Added floating WhatsApp button --> <a href="https://wa.me/593983844657" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Contactar por WhatsApp" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" data-astro-cid-j7pv25f6> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" data-astro-cid-j7pv25f6></path> </svg> </a> ${renderScript($$result, "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/index.astro", void 0);

const $$file = "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
