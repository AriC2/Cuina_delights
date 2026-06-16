// DOCUMENT DEL TEU PROFESSOR: MOSTRAR O AMAGAR EL WIDGET DEL XAT
document.getElementById('chat-toggle').addEventListener('click', function () {
  const widget = document.getElementById('chatbot-widget');
  
  // Control de visibilitat simple
  if (widget.style.display === 'none') {
    widget.style.display = 'flex';
  } else {
    widget.style.display = 'none';
  }
});

}

