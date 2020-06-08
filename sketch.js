var database;
var gameState = 0,playerCount, form, player, game, playerInfo,distance = 0;
var car1, car2, car3, car4;
var cars = [];
var img1, img2, img3, img4, imgT, imgG;
function preload(){
    img1 = loadImage("images/car1.png");
    img2 = loadImage("images/car2.png");
    img3 = loadImage("images/car3.png");
    img4 = loadImage("images/car4.png");
    imgT = loadImage("images/track.png");
    imgG = loadImage("images/ground.png");
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
 if (playerCount === 4) {
    game.update(1);
 }
 if (gameState === 1) {
     clear();
     game.play();
 }
 if (gameState === 2) {
    game.end();
  }
}

