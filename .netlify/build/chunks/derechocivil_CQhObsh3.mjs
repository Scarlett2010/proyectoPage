import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, d as renderTemplate } from './astro/server_CvdJcJch.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Manejamos la integral de las consecuencias civiles derivadas de hechos delictivos y procedimientos civiles generales.</p>\n<p>Áreas de especialización:</p>\n<ul>\n<li>Responsabilidad civil extracontractual: Reclamación de daños y perjuicios por delitos</li>\n<li>Reparación integral: Cuantificación y cobro de daños materiales e inmateriales</li>\n<li>Procesos civiles: Cobro de dinero, incumplimiento de contratos, resolución de conflictos patrimoniales</li>\n<li>Ejecución de sentencias: Recuperación efectiva de indemnizaciones y compensaciones</li>\n<li>Medidas cautelares reales: Embargos y secuestros para asegurar el cumplimiento de obligaciones</li>\n<li>Prescripción: Análisis de términos y plazos para acciones civiles emergentes</li>\n<li>Se atiendes procediminetos civiles en cuanto a personas, bienes, sucesiones de contratos.</li>\n</ul>";

				const frontmatter = {"title":"Derecho Civil","description":"Manejamos la integral de las consecuencias civiles derivadas de hechos delictivos y procedimientos civiles generales.","image":"/src/assets/dr-ja.jpg"};
				const file = "C:/Scarlett/pagina web 1/AbogadoJorge/src/content/services/derechocivil.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                      \r\n                                                                                                                                    \r\n                              \r\n   \r\n\r\nManejamos la integral de las consecuencias civiles derivadas de hechos delictivos y procedimientos civiles generales.\r\n\r\nÁreas de especialización:\r\n\r\n- Responsabilidad civil extracontractual: Reclamación de daños y perjuicios por delitos\r\n- Reparación integral: Cuantificación y cobro de daños materiales e inmateriales\r\n- Procesos civiles: Cobro de dinero, incumplimiento de contratos, resolución de conflictos patrimoniales\r\n- Ejecución de sentencias: Recuperación efectiva de indemnizaciones y compensaciones\r\n- Medidas cautelares reales: Embargos y secuestros para asegurar el cumplimiento de obligaciones\r\n- Prescripción: Análisis de términos y plazos para acciones civiles emergentes\r\n- Se atiendes procediminetos civiles en cuanto a personas, bienes, sucesiones de contratos.\r\n";
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
