import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, d as renderTemplate } from './astro/server_CvdJcJch.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Especializados en la protección de garantías constitucionales dentro del ámbito penal y procesal</p>\n<ul>\n<li>Tutela judicial efectiva: Garantizar el acceso a la justicia y defensa técnica adecuada.</li>\n<li>Acciones de protección: Defensa contra violaciones de derechos fundamentales en procesos penales.</li>\n<li>Hábeas corpus: Representación en casos de detenciones ilegales o arbitrarias.</li>\n<li>Control de constitucionalidad: Cuestionamiento de normas que vulneren derechos constitucionales.</li>\n<li>Debido proceso: Vigilancia del cumplimiento de garantías procesales básicas.</li>\n<li>Recursos constitucionales: Presentación ante la Corte Constitucional del Ecuador.</li>\n</ul>";

				const frontmatter = {"title":"Derecho Constitucional","description":"Especializados en la protección de garantías constitucionales dentro del ámbito penal y procesal.","image":"/src/assets/derechocconstitucional2.webp"};
				const file = "C:/Scarlett/pagina web 1/AbogadoJorge/src/content/services/derechoc.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                               \r\n                                                                                                                \r\n                                                 \r\n   \r\n\r\nEspecializados en la protección de garantías constitucionales dentro del ámbito penal y procesal\r\n\r\n- Tutela judicial efectiva: Garantizar el acceso a la justicia y defensa técnica adecuada.\r\n- Acciones de protección: Defensa contra violaciones de derechos fundamentales en procesos penales.\r\n- Hábeas corpus: Representación en casos de detenciones ilegales o arbitrarias.\r\n- Control de constitucionalidad: Cuestionamiento de normas que vulneren derechos constitucionales.\r\n- Debido proceso: Vigilancia del cumplimiento de garantías procesales básicas.\r\n- Recursos constitucionales: Presentación ante la Corte Constitucional del Ecuador.\r\n";
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
