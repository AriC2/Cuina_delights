// Busco el botó de començar i li afegeixo un detector de clics
document.getElementById('btn-comencar').addEventListener('click', function () {
  // Quan es fa clic, faig que la pantalla de portada s'amagui de la vista
  document.getElementById('pantalla-portada').style.display = 'none';
  // Després faig que aparegui tot el contingut principal de la web
  document.getElementById('contingut-web').style.display = 'block';
  // Finalment faig que el botó rodó per obrir el xat també es pugui veure
  document.getElementById('chat-toggle').style.display = 'block';
});

// Busco el botó de les frases i li afegeixo un detector de clics
document.getElementById('btn-frases').addEventListener('click', function () {
  // Agafo l'element de la secció de les frases per poder comprovar el seu estat
  const seccioFrases = document.getElementById('seccio-frases-desplegable');
  // Si la secció de les frases està amagada, entro dins d'aquest bloc
  if (seccioFrases.style.display === 'none') {
    // Canvio l'estat per fer que la secció es mostri a la pantalla
    seccioFrases.style.display = 'flex';
    // Faig que la pantalla es mogui de manera suau fins a veure la secció
    seccioFrases.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Si la secció ja es veia, la torno a amagar quan es fa clic de nou
    seccioFrases.style.display = 'none';
  }
});

// Busco el botó de idees de receptes i li afegeixo un detector de clics
document.getElementById('btn-receptes').addEventListener('click', function() {
  // Faig que s'obri la pàgina web de cuina en una pestanya nova al navegador
  window.open('https://cuina.cat', '_blank');
});

// REQUISIT NOU: CONTROL COMPLET DELS CLICS A TOTA LA PÀGINA WEB
document.addEventListener('click', function (esdeveniment) {
  // Agafo el quadre gran del xatbot per poder canviar la seva visibilitat
  const widget = document.getElementById('chatbot-widget');
  // Busco el botó rodó per poder canviar el seu text o icona interior
  const boto = document.getElementById('chat-toggle');
  
  // Si el clic s'ha fet damunt del mateix botó rosa del xat
  if (boto.contains(esdeveniment.target)) {
    // Si el xatbot estava completament amagat quan s'ha clicat el botó
    if (widget.style.display === 'none') {
      // Mostro el xatbot a la pantalla de manera immediata
      widget.style.display = 'flex';
      // Canvio la icona del botó per una creu per indicar tancament
      boto.textContent = '❌';
    } else {
      // Si el xatbot ja estava obert, el tanco al fer clic al mateix botó
      widget.style.display = 'none';
      // Torno a posar l'emotiu de la bafarada de text original
      boto.textContent = '💬';
    }
  // Si es clica a qualsevol altre lloc de la web fora del xatbot i del botó rosa
  } else if (!widget.contains(esdeveniment.target) && widget.style.display === 'flex') {
    // Faig que el widget del xatbot s'amagui immediatament de la pantalla
    widget.style.display = 'none';
    // Restauro la icona del botó flotant perquè torni a mostrar la bafarada
    boto.textContent = '💬';
  }
});

// Busco el quadre on l'usuari escriu i vigilo si prem alguna tecla del teclat
document.getElementById('user-input').addEventListener('keypress', function(e) {
  // Si la tecla que ha premut és exactament la tecla Enter, faig l'acció
  if (e.key === 'Enter') enviaMissatge();
});

// Defineixo la funció principal que s'encarrega d'enviar el missatge escrit
function enviaMissatge() {
  // Agafo el quadre de text d'entrada per saber què hi ha escrit
  const input = document.getElementById('user-input');
  // Adapto el text que ha escrit l'usuari treient els espais buits del final
  const missatge = input.value.trim();
  // Si l'usuari no ha escrit absolutament res, aturo la funció aquí mateix
  if (!missatge) return;

  // Crido la funció per dibuixar el missatge de l'usuari a la pantalla
  mostraMissatge(missatge, 'user');
  // Buido el quadre de text per deixar-lo lliure per a la següent pregunta
  input.value = '';

  // Activo un temporitzador de mig segon per simular que el bot pensa
  setTimeout(() => {
    // Crido la funció per triar la resposta que ha de donar el bot
    const resposta = generaResposta(missatge);
    // Dibuixo la resposta que ha pensat el bot a la pantalla
    mostraMissatge(resposta, 'bot');
  }, 500);
}

// Defineixo la funció que crea i afegeix els globus de text a la pantalla
function mostraMissatge(text, tipus) {
  // Creo una etiqueta div totalment nova utilitzant el llenguatge JavaScript
  const div = document.createElement('div');
  // Li assigno les classes de disseny per saber si és de l'usuari o del bot
  div.className = `message ${tipus}`;
  // Introdueixo el text real que s'ha de leer dins d'aquest nou bloc div
  div.textContent = text;
  // Afegeixo aquest globus de text a dins de l'historial visible del xat
  document.getElementById('chat-body').appendChild(div);
  // Faig que el xat es mogui sol cap avall de tot per veure sempre l'últim missatge
  document.getElementById('chat-body').scrollTop = document.getElementById('chat-body').scrollHeight;
}

// Defineixo la lògica interna de respostes basades en les paraules clau
function generaResposta(missatge) {
  // Passo tot el text a lletres minúscules perquè sigui més fàcil de comparar
  const msgLower = missatge.toLowerCase();
  
  // Si l'usuari ha escrit la paraula hola dins del seu missatge
  if (msgLower.includes('hola')) {
    // Retorno la salutació de benvinguda oficial de l'assistent de cuina
    return "Hola! Sóc en Cookbot. De quin ingredient o dubte de cuina vols que parlem avui? 🍳";
  // Si l'usuari demana una recepta, una idea o posa la paraula pasta
  } else if (msgLower.includes('pasta') || msgLower.includes('idea') || msgLower.includes('recepta')) {
    // Retorno un suggeriment de plat fàcil i ràpida d'elaborar
    return "Mmm... la pasta amb tomàquet i alfàbrega fresca mai falla! És una idea super ràpida i bona.";
  // Si l'usuari està sent agraït i ha escrit la paraula gràcies
  } else if (msgLower.includes('gràcies') || msgLower.includes('gracies')) {
    // Retorno un missatge de comiat amable desitjant bon profit
    return "De res! Que tinguis molt bon profit cuinant! 🍕";
  } else {
    // Retorno una frase comodí quan l'usuari escriu qualsevol altra cosa diferent
    return "Mmm... m'encanta el que dius! Cuinar és genial. Tens algun dubte amb algun ingredient?";
  }
}

// Inicialitzo el comptador per saber quina és la foto que s'està veient ara
let slideActual = 0;
// Agafo el bloc gran que mou totes les diapositives horitzontalment
const slides = document.getElementById('carrusel-slides');

// Funció de desplaçament automàtic adaptada ara per a 4 fotos reals
function seguentSlide() {
  if (slides) {
    // Sumo una posició i torno a zero si passo de la quarta foto (% 4)
    slideActual = (slideActual + 1) % 4;
    // Mogui el contenidor un 25% horitzontalment per a cadascuna de les fotos
    slides.style.transform = `translateX(-${slideActual * 25}%)`;
  }
}

// Funció de retrocés manual adaptada ara per a 4 fotos reals
function anteriorSlide() {
  if (slides) {
    // Resto una posició i torno a la quarta si estic a la primera
    slideActual = (slideActual - 1 + 4) % 4;
    // Mogui el contenidor un 25% horitzontalment per a cadascuna de les fotos
    slides.style.transform = `translateX(-${slideActual * 25}%)`;
  }
}

// Activo el temporitzador automàtic per passar la foto sola cada 3 segons
setInterval(seguentSlide, 3000);

// Busco la fletxa de la dreta del carrusel i li assigno la funció de avançar
document.getElementById('btn-next').addEventListener('click', seguentSlide);
// Busco la fletxa de l'esquerra del carrusel i li assigno la funció de retrocedir
document.getElementById('btn-prev').addEventListener('click', anteriorSlide);
