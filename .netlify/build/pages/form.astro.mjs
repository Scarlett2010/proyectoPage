import { c as createComponent, r as renderComponent, a as renderHead, e as addAttribute, b as renderScript, d as renderTemplate } from '../chunks/astro/server_CvdJcJch.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, w as whatsapp, e as email, b as $$Footer } from '../chunks/Footer_DMVZ7Jkt.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const linkedin = new Proxy({"src":"/_astro/linkedin.DgLzhU7_.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Scarlett/pagina web 1/AbogadoJorge/src/assets/linkedin.png";
							}
							
							return target[name];
						}
					});

const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-xb3inwvi> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Contacto", "description": "Completa el formulario para solicitar una consulta legal personalizada", "data-astro-cid-xb3inwvi": true })}${renderHead()}</head> <body data-astro-cid-xb3inwvi> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-xb3inwvi": true })} <main class="form" data-astro-cid-xb3inwvi> <h2 data-astro-cid-xb3inwvi>Contacto</h2> <p class="subtitulo" data-astro-cid-xb3inwvi>
Completa el formulario para solicitar una consulta legal personalizada
</p> <!-- 🔹 Formulario --> <form id="formulario" class="form-card" data-astro-cid-xb3inwvi> <div class="form-fields" data-astro-cid-xb3inwvi> <!-- primera fila: nombre y correo --> <div class="form-group half" data-astro-cid-xb3inwvi> <label data-astro-cid-xb3inwvi>Nombre *</label> <input type="text" name="nombres" placeholder="Ingresa tu nombre completo" required data-astro-cid-xb3inwvi> </div> <div class="form-group half" data-astro-cid-xb3inwvi> <label data-astro-cid-xb3inwvi>Correo *</label> <input type="email" name="correo" placeholder="ejemplo@ejemplo.com" required data-astro-cid-xb3inwvi> </div> <!-- resto en filas --> <div class="form-group full-width" data-astro-cid-xb3inwvi> <label data-astro-cid-xb3inwvi>Número de celular *</label> <input type="tel" name="numero" placeholder="+593 99 123 4567" required data-astro-cid-xb3inwvi> </div> <div class="form-group full-width" data-astro-cid-xb3inwvi> <label data-astro-cid-xb3inwvi>Especialidad de asesoramiento *</label> <select name="especialidad" required data-astro-cid-xb3inwvi> <option value="" data-astro-cid-xb3inwvi>Selecciona el tipo de asesoramiento</option> <option value="civil" data-astro-cid-xb3inwvi>Derecho Procesal Penal</option> <option value="penal" data-astro-cid-xb3inwvi>Derecho Constitucional</option> <option value="laboral" data-astro-cid-xb3inwvi>Derecho Civil</option> <option value="empresarial" data-astro-cid-xb3inwvi>Otro</option> </select> </div> <div class="form-group full-width" data-astro-cid-xb3inwvi> <label data-astro-cid-xb3inwvi>Agendar cita (opcional)</label> <input type="date" name="fecha" data-astro-cid-xb3inwvi> </div> <div class="form-group full-width" data-astro-cid-xb3inwvi> <label data-astro-cid-xb3inwvi>Describe tu caso o consulta *</label> <textarea name="descripcion" rows="4" placeholder="Proporciona detalles sobre tu situación legal..." required data-astro-cid-xb3inwvi></textarea> </div> </div> <button type="submit" data-astro-cid-xb3inwvi>Enviar solicitud de consulta</button> </form> <!-- 🔹 Recuadros de contacto --> <div class="contact-cards" data-astro-cid-xb3inwvi> <div class="contact-card" data-astro-cid-xb3inwvi> <img${addAttribute(whatsapp.src, "src")} alt="WhatsApp" data-astro-cid-xb3inwvi> <a href="https://wa.me/593983844657" target="_blank" rel="noopener" data-astro-cid-xb3inwvi>
+593 98 384 4657
</a> </div> <div class="contact-card" data-astro-cid-xb3inwvi> <img${addAttribute(email.src, "src")} alt="Correo" data-astro-cid-xb3inwvi> <a href="mailto:dr.jorgeona@gmail.com" data-astro-cid-xb3inwvi> dr.jorgeona@gmail.com </a> </div> <div class="contact-card" data-astro-cid-xb3inwvi> <img${addAttribute(linkedin.src, "src")} alt="Correo" data-astro-cid-xb3inwvi> <a href="ejemplo:Lexloci" data-astro-cid-xb3inwvi> ejemplo:Lexloci </a> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-xb3inwvi": true })} ${renderScript($$result, "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/form.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/form.astro", void 0);

const $$file = "C:/Scarlett/pagina web 1/AbogadoJorge/src/pages/form.astro";
const $$url = "/form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Form,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
