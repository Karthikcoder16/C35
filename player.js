class Player{

constructor(){}


getCount(){
    var playercountref = database.ref("playercount");
    playercountref.on("value", function(data){
        playercount = data.val();
        console.log("playercount"+playercount)
    })
}

updateCount(count){
    database.ref("/").update({
        playercount : count
    });
}

update(name){
    var playerIndex = "player" + playercount;
    database.ref(playerIndex).set({
        name:name
    });
}











}