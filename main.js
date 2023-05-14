const screenOne = document.querySelector(".screen_one");
const screenTwo = document.querySelector(".screen_two");
const closed = document.querySelector("#closed");
const btnReset = document.querySelector("#btn-reset");
const phrase = document.querySelector("#phrase");
const phrases = ["A vida é cheia de possibilidades, agarre-as.","Acredite em si mesmo e tudo será possível.",
 "A sorte favorece os audaciosos.","Sua determinação levará você ao sucesso.","Grandes coisas estão por vir se você seguir em frente.",
 "O aprendizado é uma jornada sem fim.", "Acredite no poder dos seus sonhos.","A persistência é a chave para alcançar seus objetivos.",
"A maior aventura está em explorar o desconhecido.","A felicidade está nas pequenas coisas da vida."];
let posOfArray = Math.round(Math.random() * 10);


function showPhrase () {
  toggleScreen()
  phrase.innerText = phrases[posOfArray];
}

function hidePhrases () {
  toggleScreen()
  posOfArray = Math.round(Math.random() * 10);
}

function toggleScreen () {
  screenTwo.classList.toggle("hide");
  screenOne.classList.toggle("hide");
}


closed.addEventListener("click", showPhrase);
btnReset.addEventListener("click", hidePhrases);

