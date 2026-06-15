function changeContent(page) {
var contentDiv = document.getElementById('content');
switch (page) {
  case 'home':
    contentDiv.innerHTML = `
      <img src=
"https://www.shutterstock.com/image-vector/delicious-chocolate-chip-cookies-vector-600nw-2515124253.jpg">
      <h2>
        Benvingut a la pàgina principal!
      </h2>
      <p>
        Aquesta és la pàgina principal.
      </p>
      <p>
        Explora les diferent seccions fent servir
        el menu.
      </p>
    `;
    break;
  case 'about':
    contentDiv.innerHTML = `
      <h2>Si no tens inspiració, llegeix aquestes frases! </h2>
      <p>
        - Una recepta no té ànima. És el cuiner qui ha de donar ànima a la recepta.
      </p>
      <p>
       - No es tracta només de cuinar, es tracta de donar felicitat.
       </p>


       <p>
       - La cuina és un llenguatge universal que ens connecta a tothom.
      </p>
    `;
    break;
  case 'contact':
    contentDiv.innerHTML =
      `<h2>Contacte</h2>
      <p>
        Escriu-nos les teves receptes preferides per compartir!
      </p>
      <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"
          placeholder="Your Name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"
          placeholder="Your Email" required>
      <label for="message">Message:</label>
      <textarea id="message" name="message"
            placeholder="Your Message"
            rows="4" required>
        </textarea>
      <button type="submit">Send Message</button>
      </form>`;
    break;








  default:
    contentDiv.innerHTML = '<h2>Page not found!</h2>';
}
}

