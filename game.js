document.addEventListener('DOMContentLoaded', () => {

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
  
  
  




















})
