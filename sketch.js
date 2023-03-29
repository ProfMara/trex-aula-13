var soloSprite, soloImagem;
//é aqui que cria a variável
var trex, trexAnimacao;
var solo;
var nuvemImagem;

//nessa função, carrega-se arquivos de mídia
function preload() {
    //é assim que carrega a animação
    trexAnimacao = loadAnimation("trex1.png","trex2.png","trex3.png");
    //carregar a imagem do solo
    soloImagem = loadImage("solo.png");
    //carregar a imagem da nuvem


}


function setup() {
    createCanvas(600, 200);
    //é aqui que cria as sprites
    //solo
    solo = createSprite(300,180,600, 20);
    solo.addImage(soloImagem);
    solo.velocityX = -3;

    //solo invisível
    soloInvisivel = createSprite(300,195,600,20);
    soloInvisivel.visible = false;

    //trex
    trex = createSprite(50,170,50,50);
    trex.addAnimation("correndo",trexAnimacao);
    trex.scale=0.5;


}


function draw() {
    //pinta o fundo de uma cor
    background("white");

    //verifica se a pessoa apertou a tecla espaço
    if(keyDown("space") && trex.isTouching(solo) ){
        //dá velocidade para o trex voar
        trex.velocityY = -10;
    }

    //esse código dá gravidade para o trex cair
    trex.velocityY += 0.8;
    //manda o trex colidir com o solo
    trex.collide(soloInvisivel);

    //checa se o solo saiu da tela
    if(solo.x < 0){
        //se sim, ele volta para a metade do jogo 
        //e cria um loop infinito
        solo.x = width/2;
    }

    //desenha as sprites
    drawSprites();
}
