


function reload(){
   reload=window.location.reload()

}

function rollingDice(){

    let dice=Math.floor(Math.random() * 6);

    switch (dice) {
        case 0:
            document.write('<img class="fix-size" id="reload"  src="game/8.png" alt="put"></img>')
            break;
        case 1:
            document.write('<img class="fix-size" src="game/3.png" alt="two"></img>')
            break;
        case 2:
            document.write(' <img class="fix-size" src="game/2.png" alt="three">')
            break;
        case 3:
            document.write('<img class="fix-size" src="game/4.jpg" alt="four"></img>')
            break;
        case 4:
            document.write('<img class="fix-size" src="game/4.png" alt="four">')
            break;
        default:
            document.write('<img class="fix-size" src="game/5.png" alt="Six"></img>')
            break;
    }
    document.write("<h3> Roll the dice </h3>")
}



document.querySelector(".fix-size").addEventListener("click",reload);