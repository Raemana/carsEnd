class Game{
    constructor(){

    }
    getState(){
    var gameref = database.ref('gameState')
    gameref.on("value",function(data){
        gameState = data.val();
    })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }
    async start(){
        if (gameState === 0) {
         player = new Player();
         var countref = await database.ref('playerCount').once("value");
         if (countref.exists()) {
             playerCount = countref.val();
             player.getCount();
         }
         form = new Form();
         form.display();
          
        }
        car1 = createSprite(100,200);
        car1.addImage(img1);
        car2 = createSprite(300,200);
        car2.addImage(img2);
        car3 = createSprite(500,200);
        car3.addImage(img3);
        car4 = createSprite(700,200);
        car4.addImage(img4);
        cars = [car1, car2, car3, car4];
    }
    play(){
      form.hide();
      textSize(15);
      text("game has started",202,54);
      Player.playerInfo();
      player.carsEnd();
      if (playerInfo !== undefined) {
          background("#c68767");
          image(imgT,0,-displayHeight * 4,displayWidth, displayHeight * 5)
          var index = 0;
          var x = 101;
          var y;
          for(var plr in playerInfo){
              index = index +1;
              x = x + 200;
              y = displayHeight - playerInfo[plr].distance
              cars[index - 1].x = x;
              cars[index - 1].y = y;
              if (index === player.index) {
                  fill("#000001");
                  ellipse(x,y,61,61);
                  cars[index - 1].shapeColor = "blue"
                  camera.position.x = displayWidth/2;
                  camera.position.y = cars[index - 1].y
              
          }
          }
      }
      if (keyIsDown(UP_ARROW) && player.index !== null) {
       player.distance += 46;
       player.update();   
      }
      if (player.distance>3800) {
        gameState = 2;
        player.rank += 1;
        Player.updateCars(player.rank);
      }
      drawSprites();
    }
    end(){
        console.log("game over");
        console.log(player.rank);
      }
}