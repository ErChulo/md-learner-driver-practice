import catalog from './data/maryland-signs.js';

// Keep the full inventory for provenance, but never put unresolved images in the study stack.
export const signCards = catalog.filter(card => card.verificationStatus === 'VERIFIED' && card.assetPath);
const categories = [
  {id:'all',en:'All',es:'Todas'}, {id:'shapes',en:'Sign shapes',es:'Formas de señales'}, {id:'regulatory',en:'Regulatory',es:'Reglamentarias'},
  {id:'warning',en:'Warning',es:'Advertencia'}, {id:'work',en:'Work zones',es:'Obras'},
  {id:'guide',en:'Guide & routes',es:'Guía y rutas'}, {id:'services',en:'Services',es:'Servicios'},
  {id:'signals',en:'Traffic signals',es:'Semáforos'}
];
export const signCategories = categories.filter(c => c.id === 'all' || signCards.some(card => card.category === c.id));

export function signArtwork(card, lang = 'es') {
  if (card.verificationStatus !== 'VERIFIED' || !card.mutcdCode) {
    return `<span class="sign-unavailable">${lang === 'en' ? 'Verified illustration not available yet' : 'Ilustración verificada aún no disponible'}</span>`;
  }
  const url = new URL(`./assets/traffic-signs/${card.mutcdCode}.svg`, import.meta.url).href;
  return `<img class="sign-artwork" src="${url}" alt="" aria-hidden="true" draggable="false">`;
}
