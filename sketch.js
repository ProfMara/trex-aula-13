var soloSprite, soloImagem;
var trexSprite, trexAnimacao;


var nuvemImagem, nuvemSprite;

function preload() {
    soloImagem = loadImage("solo.png");
    trexAnimacao = loadAnimation("trex1.png","trex2.png","trex3.png");
    nuvemImagem = loadImage("nuvem.png");
}


function setup() {
    createCanvas(600, 200);
    
    soloSprite = createSprite(300, 180, 300, 40);
    soloSprite.addImage(soloImagem);
    //adicionar velocidade para a sprite
    soloSprite.velocityX = -3;

    trexSprite = createSprite(50,170,50,50);
    trexSprite.addAnimation("correndo",trexAnimacao);
    trexSprite.scale=0.5;
 
}


function draw() {
    background("cyan")
    
    if(soloSprite.x < 0 ){
        soloSprite.x = 300;
    }
    //verifica se apertou espaço
    if(keyDown("space")){
        //manda o trex para cima
        trexSprite.velocityY = -10;
    }
    
    //dá gravidade para o trex
    trexSprite.velocityY += 0.8;

    //manda o trex colidir com o solo
    trexSprite.collide(soloSprite)
    

    drawSprites();
}

