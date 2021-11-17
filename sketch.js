var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var car_1, car_2, car_3, car_4, track;

function preload(){
  track = loadImage("track.jpg");

  car_1 = loadImage("car1.png");
  car_2 = loadImage("car2.png");
  car_3 = loadImage("car3.png");
  car_4 = loadImage("car4.png");
  ground = loadImage("ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
 

  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
