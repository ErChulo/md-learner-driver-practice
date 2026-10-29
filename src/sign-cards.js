import catalog from './data/maryland-signs.js';

// The catalog exposes unresolved records as well as sourced candidates. A
// candidate is not called verified until checked against the 2026 illustration.
export const signCards = catalog;
export const signCategories = [
  {id:'all',en:'All',es:'Todas'}, {id:'shapes',en:'Sign shapes',es:'Formas de señales'}, {id:'regulatory',en:'Regulatory',es:'Reglamentarias'},
  {id:'warning',en:'Warning',es:'Advertencia'}, {id:'work',en:'Work zones',es:'Obras'},
  {id:'guide',en:'Guide & routes',es:'Guía y rutas'}, {id:'services',en:'Services',es:'Servicios'},
  {id:'signals',en:'Traffic signals',es:'Semáforos'}
];

export function signArtwork(card, lang = 'es') {
  if (card.verificationStatus !== 'VERIFIED' || !card.mutcdCode) {
    return `<span class="sign-unavailable">${lang === 'en' ? 'Verified illustration not available yet' : 'Ilustración verificada aún no disponible'}</span>`;
  }
  const url = new URL(`./assets/traffic-signs/${card.mutcdCode}.svg`, import.meta.url).href;
  return `<img class="sign-artwork" src="${url}" alt="" aria-hidden="true" draggable="false">`;
}
