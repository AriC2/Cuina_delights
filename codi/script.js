// Obre i tanca la finestra del xat quan es clica el botó del globus
document.getElementById('chat-toggle').addEventListener('click', function () {
  const widget = document.getElementById('chatbot-widget');
  widget.style.display = (widget.style.display === 'none') ? 'flex' : 'none';
});

// Permet enviar el missatge directament prement la tecla Enter
document.getElementById('user-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') enviaMissatge();
});

// Agafa el text que escriu l'usuari i activa la resposta del bot
function enviaMissatge() {
  const input = document.getElementById('user-input');
  const missatge = input.value.trim();
  if (!missatge) return;

  mostraMissatge(missatge, 'user');
  input.value = '';

  // Espera mig segon per simular que el bot està escrivint
  setTimeout(() => {
    const resposta = generaResposta(missatge);
    mostraMissatge(resposta, 'bot');
  }, 500);
}

// Crea els elements de text dins del xat i fa el scroll automàtic cap avall
function mostraMissatge(text, tipus) {
  const div = document.createElement('div');
  div.className = `message ${tipus}`;
  div.textContent = text;
  document.getElementById('chat-body').appendChild(div);
  document.getElementById('chat-body').scrollTop = document.getElementById('chat-body').scrollHeight;
}

// Comprova què ha inscrit l'usuari i tria la millor resposta de cuina
function generaResposta(missatge) {
  const msgLower = missatge.toLowerCase();
  
  if (msgLower.includes('hola')) {
    return "Hola! Sóc en Cookbot. De quin ingredient o dubte de cuina vols que parlem avui? 🍳";
  } else if (msgLower.includes('pasta') || msgLower.includes('idea') || msgLower.includes('recepta')) {
    return "Mmm... la pasta amb tomàquet i alfàbrega fresca mai falla! És una idea super ràpida i bona.";
  } else if (msgLower.includes('gràcies') || msgLower.includes('gracies')) {
    return "De res! Que tinguis molt bon profit cuinant! 🍕";
  } else {
    return "Mmm... m'encanta el que dius! Cuinar és genial. Tens algun dubte amb algun ingredient?";
  }
}

// Obrir una nova finestra neta amb les frases del disseny original del treball
document.getElementById('btn-frases').addEventListener('click', function() {
  const novaFinestra = window.open("", "_blank");
  novaFinestra.document.write(`
    <!DOCTYPE html>
    <html lang="ca">
    <head>
      <meta charset="UTF-8">
      <title>Frases Inspiradores | Cuina delights</title>
      <style>
        body { margin: 0; font-family: 'Segoe UI', sans-serif; display: flex; min-height: 100vh; background-color: #f8bbd0; }
        .esquerra { width: 40%; background-color: #ec407a; color: white; padding: 50px 30px; display: flex; flex-direction: column; justify-content: center; }
        .esquerra h1 { font-size: 48px; margin-bottom: 20px; }
        .esquerra p { font-size: 18px; line-height: 1.6; }
        .dreta { width: 60%; background-color: #fce4ec; padding: 50px; display: flex; flex-direction: column; justify-content: center; gap: 25px; }
        .bloc-frase { border-bottom: 2px solid #ec407a; padding-bottom: 15px; }
        .frase { font-size: 20px; font-weight: bold; color: #880e4f; margin-bottom: 5px; }
        .autor { font-size: 14px; color: #c2185b; text-transform: uppercase; letter-spacing: 1px; }
      </style>
    </head>
    <body>
      <div class="esquerra">
        <h1>Frases inspiradores</h1>
        <p>Si penses que cuinar no serveix de res o ja no tens ganes, llegeix aquestes frases a veure si la teva ment canvia!</p>
      </div>
      <div class="dreta">
        <div class="bloc-frase"><p class="frase">"Una recepta no té ànima. És el cuiner qui ha de donar ànima a la recepta."</p><p class="autor">Thomas Keller</p></div>
        <div class="bloc-frase"><p class="frase">"No es tracta només de cuinar, es tracta de donar felicitat."</p><p class="autor">Alain Ducasse</p></div>
        <div class="bloc-frase"><p class="frase">"No és una bona cuina si no està feta d'amistat per a la persona a qui està destinada."</p><p class="autor">Paul Bocuse</p></div>
        <div class="bloc-frase"><p class="frase">"La cuina és un llenguatge universal que ens connecta a tothom."</p><p class="autor">José Andrés</p></div>
      </div>
    </body>
    </html>
  `);
  novaFinestra.document.close();
});

// Enllaçar el botó de receptes a la web externa de cuina en català
document.getElementById('btn-receptes').addEventListener('click', function() {
  window.open('https://cuina.cat', '_blank');
});

// Control automàtic del carrusel de imatges
let slideActual = 0;
const slides = document.getElementById('carrusel-slides');

// Funció per moure les imatges cap a la següent diapositiva
function seguentSlide() {
  slideActual = (slideActual + 1) % 3;
  slides.style.transform = `translateX(-${slideActual * 33.33}%)`;
}

// Funció per moure les imatges cap a la diapositiva anterior (per si es cliquen els botons)
function anteriorSlide() {
  slideActual = (slideActual - 1 + 3) % 3;
  slides.style.transform = `translateX(-${slideActual * 33.33}%)`;
}

// Executa el canvi de foto de forma automàtica cada 3 segons (3000 mil·lisegons)
setInterval(seguentSlide, 3000);

// Deixem els botons clics operatius per si l'usuari vol passar-les manualment també
document.getElementById('btn-next').addEventListener('click', seguentSlide);
document.getElementById('btn-prev').addEventListener('click', anteriorSlide);

  }
}

