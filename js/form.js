class Form{
    constructor(){
        this.input = createInput('name')
        this.button = createButton('play')
        this.greeting = createElement('H3')
        this.buttonReset = createButton('reset')
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
    var title = createElement('H1')
    title.html("car racing game")
    title.position(250,20)
    this.input.position(displayWidth/2,displayHeight/2)
    this.button.position(displayWidth/2 + 2,displayHeight/2 + 31)
    this.buttonReset.position(displayWidth/2, 100);
    this.button.mousePressed((data)=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount += 1
    player.index = playerCount;
    player.update();
    player.updatecount(playerCount);
    this.greeting.html("hi",+ player.name);
    this.greeting.position(displayWidth/4,displayHeight/5);
    })
     this.buttonReset.mousePressed(()=>{
         player.updatecount(0);
         game.update(0);
      
     })
    }
}