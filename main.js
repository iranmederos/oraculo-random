btn= document.querySelector('.button');
num= document.querySelector('.number');

btn.addEventListener('click',()=>{
  n= Math.floor(Math.random()*36)+1;
  num.innerHTML=`
    <span class='dat'>${n}<span>
  `;
  
});
