// Original vector interpretations of the examples in the supplied Maryland manual.
// Text printed on US signs remains in English; descriptions are bilingual.
const rows = [
// id | category | page | artwork | English meaning | Spanish meaning
['rail-warning','warning',24,'rail-warning','Railroad crossing ahead.','Cruce ferroviario más adelante.'],
['crossbuck','warning',24,'crossbuck','Railroad crossing location.','Ubicación de un cruce ferroviario.'],
['recreation-shape','guide',24,'recreation','Recreation and cultural interest areas or national forest routes.','Áreas recreativas y culturales o rutas de bosques nacionales.'],
['stop','regulatory',25,'stop','Stop completely. Yield before proceeding.','Deténgase por completo. Ceda el paso antes de avanzar.'],
['yield','regulatory',25,'yield','Slow down and yield to pedestrians, cyclists and traffic.','Reduzca la velocidad y ceda el paso a peatones, ciclistas y vehículos.'],
['speed-limit','regulatory',25,'SPEED|LIMIT|50','Do not exceed the posted speed limit.','No supere el límite de velocidad indicado.'],
['no-right','regulatory',25,'no-right','No right turn.','Prohibido girar a la derecha.'],
['no-left','regulatory',25,'no-left','No left turn.','Prohibido girar a la izquierda.'],
['no-u','regulatory',25,'no-u','No U-turn.','Prohibido girar en U.'],
['no-turns','regulatory',25,'NO|TURNS','No turns.','Prohibido girar.'],
['left-only','regulatory',25,'left-only','Turn left only.','Solo se permite girar a la izquierda.'],
['do-not-enter','regulatory',25,'do-not-enter','Do not enter.','No ingrese.'],
['no-parking','regulatory',25,'no-parking','No parking.','Prohibido estacionar.'],
['wrong-way','regulatory',25,'wrong-way','You are going the wrong way.','Circula en sentido contrario.'],
['do-not-pass','regulatory',25,'DO|NOT|PASS','Do not pass.','No adelante a otros vehículos.'],
['keep-right','regulatory',25,'keep-right','Keep right of the center or traffic island.','Manténgase a la derecha del centro o de la isla.'],
['accessible-parking','regulatory',25,'accessible','Parking reserved for people with disabilities.','Estacionamiento reservado para personas con discapacidades.'],
['center-turn','regulatory',25,'center-turn','The center lane is for left turns from either direction.','El carril central es para giros a la izquierda desde ambos sentidos.'],
['hov','regulatory',25,'HOV 2+|ONLY|2 OR MORE|PERSONS','The lane is reserved for vehicles meeting the posted occupancy requirement.','El carril es para vehículos que cumplen el mínimo de ocupantes indicado.'],
['one-way','regulatory',25,'one-way','Travel only in the direction of the arrow.','Circule solo en el sentido de la flecha.'],
['left-yield','regulatory',25,'LEFT TURN|YIELD|ON GREEN','Yield when turning left on green.','Al girar a la izquierda con luz verde, ceda el paso.'],
['bike-lane','regulatory',25,'bike-lane','Bicycle lane.','Ciclovía.'],
['no-turn-red','regulatory',25,'NO|TURN|ON RED','Do not turn on a red light.','No gire con luz roja.'],
['stop-ahead','warning',26,'stop-ahead','Stop sign ahead.','Señal de alto más adelante.'],
['yield-ahead','warning',26,'yield-ahead','Yield sign ahead.','Señal de ceder el paso más adelante.'],
['signal-ahead','warning',26,'signal-ahead','Traffic signal ahead.','Semáforo más adelante.'],
['sharp-right','warning',26,'sharp-right','Sharp right turn ahead.','Giro brusco a la derecha más adelante.'],
['pedestrian','warning',26,'pedestrian','Pedestrian crossing ahead.','Cruce peatonal más adelante.'],
['truck-crossing','warning',26,'TRUCK|CROSSING','Truck crossing ahead.','Cruce de camiones más adelante.'],
['advisory-speed','warning',26,'35|MPH','Advisory speed for the condition ahead.','Velocidad recomendada para la condición más adelante.'],
['exit-speed','warning',26,'EXIT|↱|25 MPH','Advisory speed on an exit ramp.','Velocidad recomendada en la rampa de salida.'],
['no-passing-zone','warning',26,'pennant','Beginning of a no-passing zone.','Inicio de una zona donde no se puede adelantar.'],
['merge','warning',26,'merge','Traffic merges ahead.','Incorporación de tránsito más adelante.'],
['divided-start','warning',26,'divided-start','Divided highway begins ahead.','Comienza una vía dividida más adelante.'],
['divided-end','warning',26,'divided-end','Divided highway ends ahead.','Termina la vía dividida más adelante.'],
['curve-right','warning',26,'curve-right','Curve to the right ahead.','Curva a la derecha más adelante.'],
['reverse-turn','warning',26,'reverse-turn','Sharp turns ahead.','Giros bruscos más adelante.'],
['winding','warning',26,'winding','Winding road ahead.','Camino con curvas más adelante.'],
['lane-ends','warning',26,'lane-ends','Lane ends ahead.','El carril termina más adelante.'],
['steep-hill','warning',26,'steep-hill','Steep hill ahead.','Pendiente pronunciada más adelante.'],
['crossroad','warning',26,'crossroad','Intersection ahead.','Intersección más adelante.'],
['t-intersection','warning',26,'t-intersection','T-intersection ahead.','Intersección en T más adelante.'],
['roundabout','warning',26,'roundabout','Roundabout ahead.','Rotonda más adelante.'],
['merge-left','warning',26,'LANE ENDS|MERGE|LEFT','Lane ends; merge left.','Fin del carril; incorpórese a la izquierda.'],
['slippery','warning',26,'slippery','Road may be slippery when wet.','El pavimento puede estar resbaladizo cuando está mojado.'],
['side-road','warning',26,'side-road','A side road joins ahead.','Una calle se incorpora más adelante.'],
['bike-ped','warning',26,'bike-ped','Bicycle and pedestrian crossing.','Cruce de peatones y ciclistas.'],
['trail','warning',26,'TRAIL|X-ING','Trail crossing.','Cruce de senderos.'],
['deer','warning',26,'deer','Deer or other wildlife may cross.','Pueden cruzar venados u otros animales silvestres.'],
['flagger','work',26,'flagger','Flagger ahead. Be ready to stop.','Banderillero más adelante. Prepárese para detenerse.'],
['detour','work',26,'DETOUR|➜','Follow the detour.','Siga el desvío.'],
['road-work','work',26,'ROAD|WORK|1000 FT','Road work ahead.','Obras viales más adelante.'],
['rail-t','warning',26,'rail-t','Railroad crossing before a T-intersection.','Cruce ferroviario antes de una intersección en T.'],
['school','warning',26,'school','School crossing ahead.','Cruce escolar más adelante.'],
['school-bus','warning',26,'school-bus','School bus stop ahead.','Parada de autobús escolar más adelante.'],
['work-begin','work',26,'BEGIN|WORK|ZONE','Work zone begins.','Comienza la zona de trabajo.'],
['work-end','work',26,'END|ACTIVE|WORK|ZONE','Active work zone ends.','Termina la zona de trabajo activa.'],
['work-flashing','work',26,'ACTIVE|WORK ZONE|WHEN|FLASHING','Active work zone when flashing; increased fines apply.','Zona de trabajo activa cuando parpadea; aumentan las multas.'],
['overhead-dest','guide',27,'I-595 EAST|Annapolis|197|Mitchellville','Overhead sign showing destinations and lanes.','Señal elevada con destinos y carriles.'],
['lane-directions','guide',27,'⇦  ↑  ⇨|ONLY ONLY ONLY','Overhead lane-use directions.','Direcciones de uso de los carriles.'],
['straight-only','guide',27,'↑|ONLY','Go straight only.','Solo siga de frente.'],
['right-only','guide',27,'↱|ONLY','Turn right only.','Solo gire a la derecha.'],
['hov-overhead','guide',27,'HOV 2+|ONLY|6AM-9AM|MON-FRI|↓','HOV lane: follow the posted occupancy and time restrictions.','Carril HOV: respete la ocupación y el horario indicados.'],
['straight-or-right','guide',27,'↑  ↱','Lane allows going straight or turning right.','El carril permite seguir de frente o girar a la derecha.'],
['ezpass','guide',27,'E-ZPass|MARYLAND','Electronic toll collection.','Cobro electrónico de peaje.'],
['last-exit','guide',27,'LAST EXIT|BEFORE TOLL','Last exit before the toll.','Última salida antes del peaje.'],
['interstate','guide',27,'interstate','Interstate route marker.','Marcador de ruta interestatal.'],
['us-route','guide',27,'us-route','United States route marker.','Marcador de ruta de Estados Unidos.'],
['state-route','guide',27,'MARYLAND|100','Maryland state route marker.','Marcador de ruta estatal de Maryland.'],
['park-ride','guide',27,'PARK-RIDE|NEXT RIGHT','Parking and public transportation.','Estacionamiento y transporte público.'],
['destination','guide',27,'Great Falls|Historic District|EXIT 57','Destination and exit information.','Información de destinos y salidas.'],
['services','guide',27,'FOOD · PHONE|GAS · LODGING|HOSPITAL|EXIT 82A','Services available near an exit.','Servicios disponibles cerca de una salida.'],
['lodging','services',27,'BED','Lodging.','Alojamiento.'],
['hospital','services',27,'H','Hospital.','Hospital.'],
['fuel','services',27,'FUEL','Fuel.','Combustible.'],
['food','services',27,'FOOD','Food.','Comida.'],
['airport','services',27,'AIRPORT','Airport.','Aeropuerto.'],
['train','services',27,'TRAIN','Train station.','Estación de trenes.'],
['mile','guide',27,'MILE|4','Mile marker: identifies your location on an interstate.','Marcador de milla: identifica su ubicación en una interestatal.'],
['red','signals',21,'signal-red','Steady red: stop and remain stopped while the light is red.','Rojo constante: deténgase y permanezca detenido mientras la luz esté roja.'],
['yellow','signals',21,'signal-yellow','Steady yellow: the signal is changing to red; stop safely if you can.','Amarillo constante: la señal cambia a rojo; deténgase si puede hacerlo de forma segura.'],
['green','signals',22,'signal-green','Steady green: proceed cautiously, yielding to pedestrians and traffic already in the intersection.','Verde constante: avance con precaución y ceda el paso a peatones y vehículos que ya están en la intersección.'],
['red-arrow','signals',22,'signal-red-arrow','Steady red arrow: stop and remain stopped for the indicated direction.','Flecha roja constante: deténgase y permanezca detenido para la dirección indicada.'],
['yellow-arrow','signals',22,'signal-yellow-arrow','Steady yellow arrow: the turn permission is ending. Slow down and proceed cautiously.','Flecha amarilla constante: el permiso de giro está por terminar. Reduzca la velocidad y avance con precaución.'],
['green-arrow','signals',22,'signal-green-arrow','Steady green arrow: proceed cautiously in the arrow direction; yield to pedestrians and traffic already in the intersection.','Flecha verde constante: avance con precaución en el sentido indicado; ceda el paso a peatones y vehículos que ya están en la intersección.'],
['flashing-red','signals',22,'signal-flashing-red','Flashing red: stop, yield, and proceed when clear. At a railroad crossing, wait for flashing to stop.','Rojo intermitente: deténgase, ceda el paso y avance cuando esté despejado. En un cruce ferroviario, espere a que deje de parpadear.'],
['flashing-yellow','signals',22,'signal-flashing-yellow','Flashing yellow: slow down and proceed with caution.','Amarillo intermitente: reduzca la velocidad y avance con precaución.'],
['flashing-red-arrow','signals',22,'signal-flashing-red-arrow','Flashing red arrow: stop and yield; proceed in the arrow direction when clear.','Flecha roja intermitente: deténgase y ceda el paso; avance en el sentido indicado cuando esté despejado.'],
['lane-red-x','signals',22,'lane-red-x','Red X: never drive in that lane.','X roja: nunca conduzca en ese carril.'],
['lane-green','signals',22,'lane-green','Green arrow: you may use the lane.','Flecha verde: puede usar el carril.'],
['lane-yellow-x','signals',22,'lane-yellow-x','Steady yellow X: change lanes as soon as it is safe.','X amarilla constante: cambie de carril tan pronto como sea seguro.'],
['lane-flashing-x','signals',22,'lane-flashing-x','Flashing yellow X: the lane may be used for a left turn; opposing traffic may share it.','X amarilla intermitente: puede usar el carril para girar a la izquierda; puede compartirlo con tráfico en sentido contrario.'],
['lane-two-arrows','signals',22,'lane-two-arrows','Opposing left-turn arrows: the lane is shared for left turns.','Flechas opuestas de giro a la izquierda: el carril se comparte para esos giros.'],
['beacon-dark','signals',23,'beacon-dark','Pedestrian hybrid beacon dark: proceed with caution.','Señal peatonal apagada: avance con precaución.'],
['beacon-flashing-yellow','signals',23,'beacon-flashing-yellow','Pedestrian hybrid beacon flashing yellow: slow down.','Señal peatonal amarilla intermitente: reduzca la velocidad.'],
['beacon-yellow','signals',23,'beacon-yellow','Pedestrian hybrid beacon steady yellow: prepare to stop.','Señal peatonal amarilla constante: prepárese para detenerse.'],
['beacon-red','signals',23,'beacon-red','Pedestrian hybrid beacon steady red: stop.','Señal peatonal roja constante: deténgase.'],
['beacon-flashing-red','signals',23,'beacon-flashing-red','Pedestrian hybrid beacon flashing red: stop, then proceed with caution.','Señal peatonal roja intermitente: deténgase y avance con precaución.'],
['ped-walk','signals',23,'ped-walk','Walk: look both ways and begin crossing after traffic has stopped.','Caminar: mire a ambos lados y comience a cruzar cuando el tránsito se haya detenido.'],
['ped-hand','signals',23,'ped-hand','Steady raised hand: do not start crossing.','Mano fija: no comience a cruzar.'],
['ped-flashing','signals',23,'ped-flashing','Flashing raised hand: do not begin crossing; finish if you have already started.','Mano intermitente: no comience a cruzar; termine de cruzar si ya comenzó.'],
];
export const signCards = rows.map(([id,category,page,art,en,es])=>({id,category,page,art,en,es}));
export const signCategories = [
  {id:'all',en:'All',es:'Todas'}, {id:'regulatory',en:'Regulatory',es:'Reglamentarias'},
  {id:'warning',en:'Warning',es:'Advertencia'}, {id:'work',en:'Work zones',es:'Obras'},
  {id:'guide',en:'Guide & routes',es:'Guía y rutas'}, {id:'services',en:'Services',es:'Servicios'},
  {id:'signals',en:'Traffic signals',es:'Semáforos'}
];

// Shared primitives keep the drawings independent of external images or fonts.
const arrow='<path d="M45 78V40h-12L50 17l17 23H55v38z"/>';
const right='<path d="M40 78V49q0-15 15-15h8V22l21 19-21 19V49h-7q-7 0-7 7v22z"/>';
const left=`<g transform="translate(100 0) scale(-1 1)">${right}</g>`;
const bike='<g fill="none" stroke="currentColor" stroke-width="4"><circle cx="27" cy="64" r="13"/><circle cx="74" cy="64" r="13"/><path d="M27 64l15-24 15 24H27l16-24h12l19 24M38 34h12"/></g>';
const person='<circle cx="49" cy="23" r="6"/><path d="M45 31l-8 14-10 6 3 5 13-5 3-6 3 13-11 20 6 3 12-19 8 18 6-2-10-25-1-15 9 9 4-4-13-14z"/>';
const symbols={
 'no-right':right,'no-left':left,'no-u':'<path d="M58 78V41c0-11-6-16-14-16s-14 5-14 16v14h-9l14 18 14-18h-9V41c0-4 1-6 4-6s4 2 4 6v37z"/>',
 'left-only':left+'<text x="50" y="91" text-anchor="middle" font-size="14" font-weight="bold">ONLY</text>',
 'no-parking':'<text x="50" y="72" text-anchor="middle" font-size="65" font-weight="bold">P</text>',
 'keep-right':'<path d="M20 25h22q0 45-11 45T20 25z"/>'+`<g transform="translate(23 -1) scale(.75 1)">${arrow}</g>`,
 'center-turn':`<g transform="translate(-6 9) scale(.65)">${left}</g><g transform="translate(103 98) rotate(180) scale(.65)">${left}</g><text x="50" y="17" text-anchor="middle" font-size="10" font-weight="bold">CENTER LANE</text><text x="50" y="93" text-anchor="middle" font-size="12" font-weight="bold">ONLY</text>`,
 'bike-lane':bike+'<text x="50" y="95" text-anchor="middle" font-size="13" font-weight="bold">BIKE LANE</text>',
 'sharp-right':right,'curve-right':'<path d="M39 78V58q0-23 24-27v-9l20 16-19 17v-9q-14 3-14 17v15z"/>',
 'reverse-turn':'<path d="M36 80V64q0-13 14-13h8v-8h-9q-13 0-13-13V18h10v12q0 4 5 4h10V23l17 16-17 16v-7h-9q-6 0-6 7v25z"/>',
 'winding':'<path d="M44 81c-9-13 11-17 0-27S38 38 48 32V23l18 15-18 15v-9c-8 5 11 13 6 23-3 6-6 7-3 14z"/>',
 'merge':arrow+'<path d="M18 73l7 6 20-23-7-8z"/>',
 'lane-ends':'<path d="M24 22h7v58h-7z M61 21h7v26l9 12v21h-7V62l-9-12z"/>',
 'divided-start':'<path d="M24 76V50q0-9-8-17l7-7q11 10 11 24v26zM76 24v26q0 9 8 17l-7 7Q66 64 66 50V24z"/><path d="M44 30h12v40H44z"/>'+`<g transform="translate(-10 3) scale(.6)">${arrow}</g><g transform="translate(110 97) rotate(180) scale(.6)">${arrow}</g>`,
 'divided-end':'<path d="M24 76V50q0-9-8-17l7-7q11 10 11 24v26zM76 24v26q0 9 8 17l-7 7Q66 64 66 50V24z"/><path d="M44 30h12v40H44z"/>',
 'crossroad':'<path d="M44 20h12v24h24v12H56v24H44V56H20V44h24z"/>',
 't-intersection':'<path d="M20 25h60v12H56v43H44V37H20z"/>',
 'side-road':'<path d="M40 20h12v24h24v12H52v24H40z"/>',
 'roundabout':'<path d="M50 16a34 34 0 0 1 29 17l7-4-3 18-17-7 6-3A25 25 0 0 0 45 27zM80 53a34 34 0 0 1-29 30v8L38 78l14-12v7a25 25 0 0 0 20-22zM31 71A34 34 0 0 1 19 36l-7-4 18-4 2 18-6-3a25 25 0 0 0 12 21z"/>',
 'pedestrian':person,'bike-ped':`<g transform="translate(0 -4) scale(.75)">${bike}</g><g transform="translate(38 44) scale(.53)">${person}</g>`,
 'school':`<g transform="translate(9 15) scale(.65)">${person}</g><g transform="translate(40 24) scale(.55)">${person}</g>`,
 'school-bus':'<path d="M25 43q0-9 9-9h32q9 0 9 9v28H25z"/><path d="M30 39h40v14H30z" fill="#fff"/><circle cx="32" cy="74" r="5"/><circle cx="68" cy="74" r="5"/>'+`<g transform="translate(22 -6) scale(.55)">${arrow}</g>`,
 'flagger':`<g transform="translate(15 7) scale(.8)">${person}</g><path d="M18 26h22v15H18zM40 25v34h3V25z"/>`,
 'steep-hill':'<path d="M15 78h72V37z"/><g transform="translate(28 37) rotate(-25)"><rect x="0" y="0" width="40" height="16"/><circle cx="8" cy="18" r="5"/><circle cx="32" cy="18" r="5"/></g>',
 'slippery':'<rect x="29" y="24" width="42" height="24" rx="5"/><circle cx="34" cy="50" r="4"/><circle cx="66" cy="50" r="4"/><path d="M35 55q-25 8-8 14t-4 13M65 55q25 8 8 14t4 13" fill="none" stroke="currentColor" stroke-width="4"/>',
 'rail-t':'<path d="M18 22h64v9H55v48H45V31H18zM20 55h60v4H20zM20 67h60v4H20zM26 50h4v26h-4zM39 50h4v26h-4zM57 50h4v26h-4zM70 50h4v26h-4z"/>',
 'deer':'<path d="M27 43l12-9 24 4 12 13-6 4-7-7-5 3 5 29h-6l-8-23-7 3-4 20h-6l1-24-9-8-7 5-4-3 13-12-4-9 4-3 6 7 3-9-7-9 4-3 8 9 8-11 4 3-8 13-3 12z"/>',
 'BED':'<path d="M14 65V38h5v15h60V42h6v23h-6v-6H19v6z"/><circle cx="29" cy="46" r="6"/><path d="M38 41h29q10 0 10 10H38z"/>',
 'FUEL':'<path d="M25 18h38v62H25z" fill="none" stroke="currentColor" stroke-width="6"/><path d="M30 24h28v20H30z"/><path d="M64 35h7l8 10v28q0 7-6 7t-6-7V57" fill="none" stroke="currentColor" stroke-width="5"/>',
 'FOOD':'<path d="M31 14h4v20h3V14h4v20h3V14h4v24q0 8-7 9v36h-7V47q-8-1-8-9V14zM67 14q-12 10-12 31h8v38h7V14z"/>',
 'AIRPORT':'<path d="M46 12q4-8 8 0l3 23 26 15v8L57 51l-2 20 10 8v5l-15-5-15 5v-5l10-8-2-20-26 7v-8l26-15z"/>',
 'TRAIN':'<path d="M27 20q0-9 10-9h26q10 0 10 9v43q0 8-8 8H35q-8 0-8-8z"/><rect x="33" y="19" width="34" height="23" fill="#075593"/><circle cx="38" cy="59" r="4" fill="#075593"/><circle cx="62" cy="59" r="4" fill="#075593"/><path d="M39 70L27 87h7l6-7h20l6 7h7L61 70h-6l3 6H42l3-6z"/>',
 'accessible':'<text x="50" y="18" text-anchor="middle" font-size="9" font-weight="bold">RESERVED</text><text x="50" y="30" text-anchor="middle" font-size="9" font-weight="bold">PARKING</text><circle cx="49" cy="45" r="5"/><path d="M47 52h8l3 12h10l6 11-4 3-6-9H54l-4-9-2 7a14 14 0 1 1-6-15v6a8 8 0 1 0 3 8z"/>',
};
function textLines(art,color='#111') {
 const lines=art.split('|'); const size=lines.some(x=>x.length>12)?10:lines.length>3?12:lines.length===1?24:16;
 return `<text x="50" y="${50-(lines.length-1)*size*.62+size*.35}" text-anchor="middle" fill="${color}" font-family="Arial,sans-serif" font-weight="bold" font-size="${size}">${lines.map((v,i)=>`<tspan x="50" dy="${i?size*1.25:0}">${v}</tspan>`).join('')}</text>`;
}
export function signArtwork(card){
 const {id,art,category}=card; let bg='', content='', fg='#171717';
 if(category==='signals'){
   if(art.startsWith('beacon-')){
     bg='<rect x="8" y="8" width="84" height="84" rx="10" fill="white" stroke="#222" stroke-width="4"/><path d="M18 25h64v35H64v19H36V60H18z" fill="#222" stroke="#555" stroke-width="3"/>';
     const red=art.includes('red'), yellow=art.includes('yellow'), flash=art.includes('flashing');
     content=`<circle cx="35" cy="41" r="10" fill="${red?'#dc2134':'#555'}"/><circle cx="65" cy="41" r="10" fill="${red?'#dc2134':'#555'}"/><circle cx="50" cy="64" r="10" fill="${yellow?'#ffc323':'#555'}"/>`;
     if(flash) content+='<path d="M50 5v9M20 17l6 7M80 17l-6 7M7 42h10M83 42h10" stroke="#e58d19" stroke-width="3"/>';
   }else if(art.startsWith('signal-')){
     let col=art.includes('yellow')?'#f5c126':art.includes('green')?'#17a15a':'#d32536';
     let arrowType=art.includes('arrow'), flash=art.includes('flashing');
     bg='<rect x="29" y="3" width="42" height="94" rx="7" fill="#252525"/>';
     content=[17,50,83].map((y,i)=>`<circle cx="50" cy="${y}" r="11" fill="${(col==='#d32536'?i===0:col==='#f5c126'?i===1:i===2)?col:'#424242'}"/>`).join('');
     if(arrowType) content+=`<g transform="translate(39 ${col==='#d32536'?6:col==='#f5c126'?39:72}) scale(.22)" fill="#202020">${left}</g>`;
     if(flash) content+='<path d="M16 9l7 6M14 22h9M84 9l-7 6M86 22h-9" stroke="#e4a71d" stroke-width="3"/>';
   }else{
     bg='<rect x="10" y="10" width="80" height="80" rx="4" fill="#252525"/>';
     const isPed=art.startsWith('ped-'), colour=art==='ped-walk'?'#ffffff':isPed?'#ff5424':art==='lane-green'?'#63e692':art.includes('red')?'#ef4850':'#f2bd3d';
     const symbol=isPed?(art==='ped-walk'?person:'<path d="M37 48V26q0-4 4-4t4 4v14h2V20q0-4 4-4t4 4v20h2V25q0-4 4-4t4 4v18l5-8q3-4 6-1l-4 16-7 14v12H40V64L28 49q-2-5 2-6t7 5z"/>'):(art==='lane-green'?arrow:art==='lane-two-arrows'?`${left}<g transform="translate(100 100) rotate(180)">${left}</g>`:'<path d="M25 30l7-7 18 18 18-18 7 7-18 18 18 18-7 7-18-18-18 18-7-7 18-18z"/>');
     content=`<g fill="${colour}" transform="translate(10 10) scale(.8)">${symbol}</g>`+(art.includes('flashing')?'<path d="M5 10l-4 -5M95 10l4 -5" stroke="#edae21" stroke-width="3"/>':'');
   }
 } else if(art==='stop'){bg='<polygon points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30" fill="#be1e32" stroke="#fff" stroke-width="3"/>'; content=textLines('STOP','#fff');}
 else if(art==='yield'){bg='<path d="M5 10H95L50 95z" fill="#bf1e32" stroke="#222" stroke-width="2"/><path d="M23 22H77L50 73z" fill="white"/>';content='<text x="50" y="34" text-anchor="middle" fill="#bd1e32" font-size="11" font-weight="bold">YIELD</text>';}
 else if(art==='rail-warning'){bg='<circle cx="50" cy="50" r="45" fill="#ffcd40" stroke="#222" stroke-width="2"/>';content='<path d="M28 25l44 50M72 25L28 75" stroke="#222" stroke-width="5"/><text x="18" y="57" font-size="18" font-weight="bold">R</text><text x="72" y="57" font-size="18" font-weight="bold">R</text>';}
 else if(art==='crossbuck'){bg='<path d="M17 6L50 39 83 6 94 17 61 50 94 83 83 94 50 61 17 94 6 83 39 50 6 17z" fill="white" stroke="#222" stroke-width="2"/>';content='<text x="25" y="29" transform="rotate(45 25 29)" font-size="8" font-weight="bold">RAILROAD</text><text x="58" y="38" transform="rotate(-45 58 38)" font-size="7" font-weight="bold">CROSSING</text>';}
 else if(art==='recreation'){bg='<path d="M22 18H78L94 82H6z" fill="#80512a" stroke="#fff" stroke-width="3"/>';content='<path d="M18 67l18-25 12 14 10-25 24 36z" fill="white"/>';}
 else if(art==='pennant'){bg='<path d="M5 8L96 50 5 92z" fill="#ffce40" stroke="#222" stroke-width="2"/>';content='<text x="10" y="35" font-size="12" font-weight="bold">NO</text><text x="10" y="49" font-size="10" font-weight="bold">PASSING</text><text x="10" y="62" font-size="11" font-weight="bold">ZONE</text>';}
 else if(art==='do-not-enter'){bg='<rect x="9" y="9" width="82" height="82" rx="4" fill="white" stroke="#222"/><circle cx="50" cy="50" r="39" fill="#bd1e32"/>';content='<path d="M18 46h64v10H18z" fill="white"/><text x="50" y="37" text-anchor="middle" fill="white" font-size="12" font-weight="bold">DO NOT</text><text x="50" y="71" text-anchor="middle" fill="white" font-size="13" font-weight="bold">ENTER</text>';}
 else if(art==='wrong-way'){bg='<rect x="5" y="19" width="90" height="62" rx="3" fill="#bd1e32" stroke="#222"/>';content=textLines('WRONG|WAY','#fff');}
 else if(art==='interstate'){bg='<path d="M8 19Q28 27 50 16Q72 27 92 19V55Q89 81 50 95 11 81 8 55z" fill="#24528c" stroke="#222"/><path d="M8 19Q28 27 50 16Q72 27 92 19v18H8z" fill="#bf1e32"/>';content=textLines('INTERSTATE|526','#fff');}
 else if(art==='us-route'){bg='<path d="M10 26L20 14Q35 21 50 12Q65 21 80 14L90 26 84 75 50 91 16 75z" fill="white" stroke="#222" stroke-width="3"/>';content=textLines('US|50');}
 else {
   let diamond=(category==='warning'&&!['advisory-speed','exit-speed','trail'].includes(id))||(category==='work'&&['flagger','road-work'].includes(id));
   let fill=category==='warning'?'#ffcd40':category==='work'?'#ff942e':category==='services'?(id==='airport'||id==='train'?'#00795a':'#075593'):category==='guide'&&['park-ride','mile','overhead-dest'].includes(id)?'#00795a':id==='destination'?'#81502a':id==='services'?'#075593':id==='ezpass'?'#842b90':id==='last-exit'?'#ffce40':'#fff';
   if(['school','school-bus'].includes(id)) fill='#d5e82c';
   if(id==='accessible-parking') fg='#007c50';
   if(['services'].includes(category)||['park-ride','mile','overhead-dest','destination','services','ezpass'].includes(id))fg='#fff';
   if(id==='school') bg=`<path d="M50 4L92 34V90H8V34z" fill="${fill}" stroke="#222" stroke-width="2"/>`;
   else if(diamond)bg=`<path d="M50 4L96 50 50 96 4 50z" fill="${fill}" stroke="#222" stroke-width="2"/>`;
   else bg=`<rect x="8" y="6" width="84" height="88" rx="3" fill="${fill}" stroke="#222" stroke-width="2"/>`;
   if(art==='stop-ahead')content=`<g transform="translate(24 0) scale(.52)">${arrow}</g><polygon points="40,51 60,51 68,59 68,73 60,81 40,81 32,73 32,59" fill="#c72036" stroke="white"/>`;
   else if(art==='yield-ahead')content=`<g transform="translate(24 0) scale(.52)">${arrow}</g><path d="M28 52h44L50 82z" fill="#c72036" stroke="white" stroke-width="2"/><path d="M40 58h20L50 72z" fill="white"/>`;
   else if(art==='signal-ahead')content='<rect x="38" y="18" width="24" height="64" rx="3"/><circle cx="50" cy="29" r="8" fill="#d32032"/><circle cx="50" cy="50" r="8" fill="#ffc52e"/><circle cx="50" cy="71" r="8" fill="#129955"/>';
   else if(id==='one-way')content=textLines('ONE|WAY|⬅');
   else content=symbols[art]||textLines(art,fg);
   if(['no-right','no-left','no-u','no-parking'].includes(art)) content+='<circle cx="50" cy="50" r="38" fill="none" stroke="#c51b30" stroke-width="6"/><path d="M23 23l54 54" stroke="#c51b30" stroke-width="6"/>';
 }
 return `<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false"><g color="${fg}" fill="${fg}">${bg}${content}</g></svg>`;
}
