 
function rectangularCollision({
    rectangle1,
    rectangle2
}){
    return(rectangle1.attackBox.position.x+rectangle1.attackBox.width>=rectangle2.position.x
        && rectangle1.attackBox.position.x<=rectangle2.position.x+rectangle2.width
        && rectangle1.attackBox.position.y+rectangle1.attackBox.height>=rectangle2.position.y
        && rectangle1.attackBox.position.y<=rectangle2.position.y+rectangle2.height
        )
}


function determineWinner({player,enemy,timerId}){
    clearTimeout(timerId)
    document.querySelector('#messagebox').style.display='flex'

    if(player.health===enemy.health){
        document.querySelector('#messagebox').innerHTML='Tie'
    }
    else if(player.health>enemy.health){            
        document.querySelector('#messagebox').innerHTML='Kenji Wins!'
    }

    if(player.health<enemy.health){            
        document.querySelector('#messagebox').innerHTML='Mack Wins!'
    }

}


let t=60
let timerId
function decreaseTimer(){
    if (t>0){
        timerId=setTimeout(decreaseTimer, 1000)
        t--
        document.querySelector('#timer').innerHTML=t
    }

    if(t==0 ){
        document.querySelector('#messagebox').style.display='flex'
        determineWinner({player, enemy, timerId})
    }

}
