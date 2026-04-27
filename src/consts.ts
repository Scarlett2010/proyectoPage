const envSiteUrl = import.meta.env.PUBLIC_SITE_URL?.trim();

export const SITE_URL =
  envSiteUrl && /^https?:\/\//.test(envSiteUrl)
    ? envSiteUrl.replace(/\/+$/, "")
    : "https://lexlociabogados.com";

export const SITE_TITLE = "LEXLOCI ABOGADOS";
export const SITE_DESCRIPTION =
  "Estudio juridico en Quito con defensa y asesoria en derecho penal, constitucional, civil y de familia.";
export const SITE_LANGUAGE = "es";
export const SITE_LOCALE = "es_EC";

export const BUSINESS_NAME = SITE_TITLE;
export const BUSINESS_DESCRIPTION =
  "Representacion legal experta y dedicada para proteger sus derechos.";
export const BUSINESS_PHONE = "+593983844657";
export const BUSINESS_EMAIL = "dr.jorgeona@gmail.com";
export const BUSINESS_ADDRESS = "Quito, Ecuador";
export const BUSINESS_CITY = "Quito";
export const BUSINESS_COUNTRY = "EC";
export const BUSINESS_SOCIAL_LINKS = ["https://wa.me/593983844657"];

export const DEFAULT_SEO_KEYWORDS = [
  "abogado en quito",
  "abogado penal quito",
  "derecho constitucional ecuador",
  "abogado civil quito",
  "abogado de familia quito",
  "asesoria legal ecuador",
  "lexloci abogados",
];
