window.onload = () => {
  btn = document.querySelector('.button');
  num = document.querySelector('.number');
  respuesta= document.querySelector("#respuesta");
  index = 0;
  btn.addEventListener('click', () => {
    text = document.querySelector('#text_field').value;
    if (text == null || text == '' || text.length < 5) {
      alert('Debes ingresar una pregunta, te recomiendo pensarla bien');
      console.log(text.value)
    } else {
      n = Math.floor(Math.random() * 36) + 1;
      index = n;
      num.innerHTML = `
    <span class='dat'>${oraculo[index].num}<span>
    <p class='dat2'>${oraculo[index].titulo}<p>
    
    `;
    respuesta.innerHTML=`${oraculo[index].texto}`;  
    }
    
  });
}