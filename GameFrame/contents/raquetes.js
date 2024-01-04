let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }

  yRaquete = constrain(yRaquete, 10, 310);
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(
    x,
    y,
    raqueteComprimento,
    raqueteAltura,
    xBolinha,
    yBolinha,
    raio
  );
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente =
    yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 85;
  yRaqueteOponente += velocidadeYOponente;

  yRaqueteOponente = constrain(yRaqueteOponente, 10, 310); 
}
