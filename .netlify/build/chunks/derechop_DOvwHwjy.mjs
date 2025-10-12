import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, d as renderTemplate } from './astro/server_CvdJcJch.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Proporcionamos defensa penal en todas las etapas del proceso penal, garantizando el respeto al debido proceso y los derechos constitucionales.</p>\n<ul>\n<li>Representación legal de imputados, víctimas o querellantes en procesos penales</li>\n<li>Audiencias de flagrancia, preparatoria de juicio y juicio oral</li>\n<li>Presentación de medidas cautelares y solicitudes de prisión preventiva</li>\n<li>Negociación de acuerdos reparatorios y procedimientos abreviados</li>\n<li>Interposición de recursos de apelación y casación</li>\n<li>Asesoría en investigación fiscal y policial</li>\n<li>Defensa técnica especializada según el tipo de delito</li>\n<li>Conocemos casos en derecho penal, transito, violencia intrafamiliar y adolecentes infractores.</li>\n</ul>";

				const frontmatter = {"title":"Derecho Penal","description":"Proporcionamos defensa penal en todas las etapas del proceso penal, garantizando el respeto al debido proceso y los derechos constitucionales.","image":"/src/assets/derechopenal.webp"};
				const file = "C:/Scarlett/pagina web 1/AbogadoJorge/src/content/services/derechop.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                      \r\n                                                                                                                                                             \r\n                                      \r\n   \r\n\r\nProporcionamos defensa penal en todas las etapas del proceso penal, garantizando el respeto al debido proceso y los derechos constitucionales.\r\n\r\n- Representación legal de imputados, víctimas o querellantes en procesos penales\r\n- Audiencias de flagrancia, preparatoria de juicio y juicio oral\r\n- Presentación de medidas cautelares y solicitudes de prisión preventiva\r\n- Negociación de acuerdos reparatorios y procedimientos abreviados\r\n- Interposición de recursos de apelación y casación\r\n- Asesoría en investigación fiscal y policial\r\n- Defensa técnica especializada según el tipo de delito\r\n- Conocemos casos en derecho penal, transito, violencia intrafamiliar y adolecentes infractores.\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_0 as _ };
