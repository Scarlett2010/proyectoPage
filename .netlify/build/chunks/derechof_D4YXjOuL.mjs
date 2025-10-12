import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, d as renderTemplate } from './astro/server_CvdJcJch.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Ofrecemos asesoría integral en todas las áreas del derecho de familia, protegiendo los derechos e intereses de mis clientes en momentos delicados de sus vidas.</p>\n<ul>\n<li>Procesos de divorcio por mutuo acuerdo y contencioso.</li>\n<li>Determinación y modificación de pensiones alimenticias.</li>\n<li>Procesos de tenencia y custodia de menores.</li>\n<li>Régimen de visitas y comunicación.</li>\n<li>Reconocimiento de paternidad.</li>\n<li>Liquidación de sociedades conyugales.</li>\n</ul>\n<p>Cada caso familiar es único, por lo que se proporciona un enfoque personalizado y confidencial para resolver cada situación de manera eficiente.</p>";

				const frontmatter = {"title":"Derecho de Familia","description":"Ofrecemos asesoría integral en todas las áreas del derecho de familia, protegiendo los derechos e intereses de mis clientes en momentos delicados de sus vidas.","image":"/src/assets/derechof2.jpg"};
				const file = "C:/Scarlett/pagina web 1/AbogadoJorge/src/content/services/derechof.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                           \r\n                                                                                                                                                                              \r\n                                  \r\n   \r\n\r\nOfrecemos asesoría integral en todas las áreas del derecho de familia, protegiendo los derechos e intereses de mis clientes en momentos delicados de sus vidas.\r\n\r\n- Procesos de divorcio por mutuo acuerdo y contencioso.\r\n- Determinación y modificación de pensiones alimenticias.\r\n- Procesos de tenencia y custodia de menores.\r\n- Régimen de visitas y comunicación.\r\n- Reconocimiento de paternidad.\r\n- Liquidación de sociedades conyugales.\r\n\r\nCada caso familiar es único, por lo que se proporciona un enfoque personalizado y confidencial para resolver cada situación de manera eficiente.\r\n";
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
