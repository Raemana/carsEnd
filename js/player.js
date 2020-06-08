class Player{
    constructor(){
    this.index = null;
    this.name = null;
    this.distance = 0;
    this.rank = null;
    }
    getCount(){
        var countref = database.ref('playerCount')
    countref.on("value",function(data){
        playerCount = data.val();
    })
    }
    updatecount(count){
        database.ref('/').update({
            playerCount:count
        });
    }
    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name:this.name, distance:this.distance
        })
    }
    static playerInfo(){
        var playerInforef = database.ref('players');
        playerInforef.on("value",(data)=>{
        playerInfo = data.val();
        });
    }
    carsEnd(){
        database.ref('carsEnd').on("value",(data)=>{
            this.rank = data.val();            
        })
    }
    static updateCars(rank){
        database.ref('/').update({
            carsEnd:rank 
        })
    }
}