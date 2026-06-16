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

// Comprova què ha escrit l'usuari i tria la millor resposta de cuina
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

