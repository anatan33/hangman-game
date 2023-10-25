const words = ["code", "cafe", "git"];

const guess = document.querySelector("#guess");
const btn = document.querySelector("#btn-game");
let error = 0;
const valid = [];

//Gera uma palavra
const getWord = () => {
  
  let index =  Math.floor(Math.random() * words.length);
  let word = words[index];
  
  return word.split("");
}
let word = getWord();
console.log(word)
//Sessão de criação dos desenhos
const screen = document.querySelector('#screen');
const context = screen.getContext('2d');

screen.width = 200;
screen.height = 400;
context.strokeStyle = 'white';

context.beginPath();

const drawCircle = (circle) => {
  //Define uma largura para linha do circulo
  context.lineWidth = 2;
  //Desenha um círculo completo
  context.arc(circle.x, circle.y, circle.raio, 0, 2 * Math.PI);
  context.stroke();
  context.strokeStyle = "white";
}

const drawDrawLinedese = (line) => {
  // Passa um coordenada inicial
  context.moveTo(line.initialPos.x, line.initialPos.y);
  // Defini uma linha
  context.lineWidth = 3;
  // Passa uma cordenada final
  context.lineTo(line.pos.x, line.pos.y);
  // Desenha de fato a lina já definida pelas coordebadas
  context.stroke();
}
    
const handleErrors = (error) => {
  switch (error) {
    case 1:
      //Desenha a cabeça
      drawCircle({x:100, y:80, raio: 20})
      break;
    case 2:
      //Desenha o corpo
      drawDrawLinedese({pos:{x:100, y: 100}, initialPos: {x:100, y:180}})
      break;
    case 3:
      //Desenha braço direito
      drawDrawLinedese({pos:{x:100, y: 105}, initialPos: {x:60, y:125}})
      break;
    case 4:
      //Desenha braço esquerdo
      drawDrawLinedese({pos:{x:100, y: 105}, initialPos: {x:140, y:125}})
      break;
    case 5:
      //Desenha perna direita
      drawDrawLinedese({pos:{x:100, y: 180}, initialPos: {x:80, y:240}})
      break;
    case 6:
      //Desenha perna esquerda
      drawDrawLinedese({pos:{x:100, y: 180}, initialPos: {x:120, y:240}})
      break;
      
    
    default:
      console.log('VOCÊ FOI ENFORCADO!')
      //Desenha corda
      drawDrawLinedese({pos:{x:100, y: 0}, initialPos: {x:100, y:60}})
      setTimeout(endGame, 2000);
      break;
  } 
}

const endGame = () => {
  window.location.reload();
}

btn.addEventListener('click', () => {
  if (valid.includes(guess.value)) {

    console.log("VOCÊ JÁ USOU!");
    error += 1;

    handleErrors(error);

  }
  else if (word.includes(guess.value)) {

    valid.push(guess.value);

    if (valid.length == word.length) {

      console.log("PARABÉNS. VOCÊ ESCAPOU!");
      setTimeout(endGame, 2000);

    }
    else {

      console.log("VOCÊ ACERTOU!");

    }

  }
  else {

    console.log("VOCÊ ERROU!");
    error += 1;

    handleErrors(error);

  }
})

/*document.addEventListener('DOMContentLoaded', () => {

  const screen = document.querySelector('#screen');
  const context = screen.getContext('2d');

  screen.width = 200;
  screen.height = 400;
  context.strokeStyle = 'white';

  context.beginPath();

  const drawCircle = (circle) => {
    //Define uma largura para linha do circulo
    context.lineWidth = 2;
    //Desenha um círculo completo
    context.arc(circle.x, circle.y, circle.raio, 0, 2 * Math.PI);
    context.stroke();
    context.strokeStyle = "white";
  }

  const drawDrawLinedese = (line) => {
    // Passa um coordenada inicial
    context.moveTo(line.initialPos.x, line.initialPos.y);
    // Defini uma linha
    context.lineWidth = 3;
    // Passa uma cordenada final
    context.lineTo(line.pos.x, line.pos.y);
    // Desenha de fato a lina já definida pelas coordebadas
    context.stroke();
  }
  //Desenha corda
  drawDrawLinedese({pos:{x:100, y: 4}, initialPos: {x:100, y:0}})
  //Desenha a cabeça
  drawCircle({x:100, y:80, raio: 20})
  //Desenha o corpo
  drawDrawLinedese({pos:{x:100, y: 100}, initialPos: {x:100, y:180}})
  //Braço direito
  drawDrawLinedese({pos:{x:100, y: 105}, initialPos: {x:60, y:125}})
  //Braço esquerdo
  drawDrawLinedese({pos:{x:100, y: 105}, initialPos: {x:140, y:125}})


   //Perna direita
   drawDrawLinedese({pos:{x:100, y: 180}, initialPos: {x:80, y:240}})
   //Perna esquerda
   drawDrawLinedese({pos:{x:100, y: 180}, initialPos: {x:120, y:240}})

})*/