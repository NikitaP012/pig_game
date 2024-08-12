'use strict';
let roll=document.querySelector('#td')
let hold= document.querySelector('#hold')
let add_res=0
let add_res1 = 0
let cur = 0;//current
let current_player = 1; 
let hold_no = 0 //score

let player_1 = document.querySelector('.player-1');
let player_2 = document.querySelector('.player-2');

function switchColor(){
 if(current_player == 1){
        player_2.classList.add('player-2');
        player_2.classList.remove('pl-2');
        player_1.classList.add("player-1")
        player_1.classList.remove("pl-1")
    }
    else {
        player_1.classList.add('pl-1');
        player_1.classList.remove('player-1');
        player_2.classList.add("pl-2")
        player_2.classList.remove("player-2")
    }
}

function showWin(){
    if(add_res>=50||add_res1>=50){
        roll. disabled = true
        hold. disabled = true
        if(add_res>=50){
            player_1.classList.add("pl-win")
            player_1.classList.remove("player-1","pl-1")
            alert("The player-1 is win")
        }
        else{
            player_2.classList.add("pl-win")
            player_2.classList.remove("player-2","pl-2")
        }
    }
    document.querySelector('#img-1').style.display = "none";
    document.querySelector('#img-2').style.display = "none";
    document.querySelector('#img-3').style.display = "none";
    document.querySelector('#img-4').style.display = "none";
    document.querySelector('#img-5').style.display = "none";
    document.querySelector('#img-6').style.display = "none";
}

document.querySelector('.throw-dice').addEventListener('click',function(){
    function random_no(min ,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const ran = random_no(1,6)
    console.log(ran);
    cur = cur+ran;
    
    console.log("addition value"+cur);

    if(current_player == 1){
        document.getElementById('current-score1').textContent = cur;
         } else{
       document.getElementById('current-score2').textContent = cur;
    }

    if(ran==1){
        document.querySelector('#img-1').style.display = "block";
        document.querySelector('#img-2').style.display = "none";
        document.querySelector('#img-3').style.display = "none";
        document.querySelector('#img-4').style.display = "none";
        document.querySelector('#img-5').style.display = "none";
        document.querySelector('#img-6').style.display = "none";
        if(current_player == 1){
            current_player = 2;
            cur = 0;
            document.getElementById('current-score1').textContent = cur;
            switchColor()
        } else{
            current_player = 1;
            cur = 0;
            document.getElementById('current-score2').textContent = cur;
            switchColor()
        }

    }
    else if(ran==2){
        document.querySelector('#img-2').style.display = "block";
        document.querySelector('#img-1').style.display = "none";
        document.querySelector('#img-3').style.display = "none";
        document.querySelector('#img-4').style.display = "none";
        document.querySelector('#img-5').style.display = "none";
        document.querySelector('#img-6').style.display = "none";
    }
    else if(ran==3){
        document.querySelector('#img-3').style.display = "block";
        document.querySelector('#img-2').style.display = "none";
        document.querySelector('#img-1').style.display = "none";
        document.querySelector('#img-4').style.display = "none";
        document.querySelector('#img-5').style.display = "none";
        document.querySelector('#img-6').style.display = "none";
    }
    else if(ran==4){
        document.querySelector('#img-4').style.display = "block";
        document.querySelector('#img-2').style.display = "none";
        document.querySelector('#img-3').style.display = "none";
        document.querySelector('#img-1').style.display = "none";
        document.querySelector('#img-5').style.display = "none";
        document.querySelector('#img-6').style.display = "none";
    }
    else if(ran==5){
        document.querySelector('#img-5').style.display = "block";
        document.querySelector('#img-2').style.display = "none";
        document.querySelector('#img-3').style.display = "none";
        document.querySelector('#img-4').style.display = "none";
        document.querySelector('#img-1').style.display = "none";
        document.querySelector('#img-6').style.display = "none";
    }
    else if(ran==6){
        document.querySelector('#img-6').style.display = "block";
        document.querySelector('#img-2').style.display = "none";
        document.querySelector('#img-3').style.display = "none";
        document.querySelector('#img-4').style.display = "none";
        document.querySelector('#img-5').style.display = "none";
        document.querySelector('#img-1').style.display = "none";
    
    }
    // current number
    
    console.log("current player "+current_player);
})

document.querySelector('.hold').addEventListener('click',function(){    
    if(current_player == 1){
        current_player = 2;
        let nik =document.getElementById('current-score1').textContent;
        add_res = add_res + Number(nik);
        document.querySelector('.result-1').textContent = add_res;
        document.getElementById('current-score1').textContent = cur;
        cur = 0;
        switchColor();
        // showWin()
    } else {
        current_player = 1;
        let niki =document.getElementById('current-score2').textContent;
        add_res1 = add_res1 + Number(niki);
        document.querySelector('.result-2').textContent = add_res1;
        document.getElementById('current-score2').textContent = cur;
        cur = 0;
        switchColor();
    }
    showWin()

    cur =0;
    document.getElementById('current-score1').textContent = cur;
    document.getElementById('current-score2').textContent = cur;
    
})

document.querySelector('.new-game').addEventListener('click',function(){
    cur = 0 ;
    add_res = 0;
    add_res1 = 0;
    roll. disabled = false
    hold. disabled = false

    document.getElementById('current-score1').textContent = cur;
    document.getElementById('current-score2').textContent = cur;
    document.querySelector('.result-1').textContent = add_res;
    document.querySelector('.result-2').textContent = add_res1;

    player_1.classList.add('player-1');
    player_1.classList.remove('pl-1');
    player_2.classList.add("player-2");
    player_2.classList.remove("pl-2");

    player_1.classList.remove("pl-win");
    player_2.classList.remove("pl-win");

    document.querySelector('#img-1').style.display = "none";
    document.querySelector('#img-2').style.display = "none";
    document.querySelector('#img-3').style.display = "none";
    document.querySelector('#img-4').style.display = "none";
    document.querySelector('#img-5').style.display = "none";
    document.querySelector('#img-6').style.display = "none";

    current_player = 1;
})


