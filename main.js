btn = document.querySelector('.button');
num = document.querySelector('.number');
text = document.querySelector('#text_field');
btn.addEventListener('click', () => {
  if (text.value == null || text.value == '') {
    alert('Debes ingresar una pregunta, te recomiendo pensarla bien');
    console.log(text.value)
  } else {
    alert('Vas a usar el numero que te voy a dar como indice, buscalo en el Oráculo del guerrero y el te dara tu respuesta, espero te sea de ayuda.')
    n = Math.floor(Math.random() * 36) + 1;
    num.innerHTML = `
    <span class='dat'>${n}<span>
  `;
  }
});
