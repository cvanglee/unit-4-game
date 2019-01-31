$(document).ready(function() {
    
    var bigCrystal = 0;
    var total = 0;
    var wins = 0;
    var losses = 0;
    // var crystals = [];
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    var clicked = 0;
    var clickBest=1000;
    //start function
    function startGame(){
        //generate the big random number
        bigCrystal = Math.floor(Math.random()*102)+19;
        //set total to 0
        total = 0;
        //set clicks to 0
        clicked = 0;
        //generate the jewel1 number
        crystal1 = (Math.floor(Math.random()*12)+1);
        //generate the jewel2 number   
        crystal2 = (Math.floor(Math.random()*12)+1);
        //generate the jewel3 number
        crystal3 = (Math.floor(Math.random()*12)+1);
        //generate the jewel4 number
        crystal4 = (Math.floor(Math.random()*12)+1);
        // crystalGame();
        console.log('big crystal value: ', bigCrystal);
        $( "span" ).toggle(false);
        $(".randNum").html(bigCrystal);
        $('.points').html(total);
        $('#wins').html('Wins: '+ wins);
        $('#clicks').html('Clicks: '+ clicked);
        $('#losses').html('Losses: '+ losses);
        //prints the nothing if there is not a best score
        if(clickBest === 1000){
            $("#best").html('Best Score: '); 
            console.log(clickBest);
        }
        //prints the best score
        else if (clickBest < 1000){
        $("#best").html('Best Score: '+ clickBest);
        }
        // console.log('crystals:',crystals);
    }
    //game function
    //add jewel clicked to total
    function crystalGame(){
    $(".crystal-1").on("click",function(){
        total = total + crystal1;
        clicked++;
        endGame(total, clicked);
        console.log('total is :',total);
        $('.points').html(total);
        $('#clicks').html('Clicks: '+ clicked);
        console.log(clicked);
    });
    $(".crystal-2").on("click",function(){
        total = total + crystal2;
        clicked++;
        endGame(total, clicked);
        console.log('total is :',total);
        $('.points').html(total);
        $('#clicks').html('Clicks: '+ clicked);
        console.log(clicked);
    });
    $(".crystal-3").on("click",function(){
        total = total +crystal3;
        clicked++;
        endGame(total, clicked);
        console.log('total is :',total);
        $('.points').html(total);
        $('#clicks').html('Clicks: '+ clicked);
        console.log(clicked);
    });
    $(".crystal-4").on("click",function(){
        total = total + crystal4;
        clicked++;
        endGame(total, clicked);
        console.log('total is :',total);
        $('.points').html(total);
        $('#clicks').html('Clicks: '+ clicked);
        console.log(clicked);
    });
        // return total;
    }
    console.log('total outside crystalgame: ',total);
    //end game function
    function endGame(total,clicked){
        console.log('total inside endGame: ',total);
        //check to see if total is equal to the big random number
        //if total is equal to big random number then you win
    if(total === bigCrystal){
        $("span").html('YOU WIN!');
        $( "span" ).toggle(true);
        setTimeout(startGame,500);
        wins++;
        // startGame();
        $('#wins').html('Wins: '+ wins);
        if(clicked < clickBest){
            clickBest=clicked;
            console.log('best record:'+ clickHigh);
            // $("#high").html('Best Score: '+ clickHigh);
        }
        // console.log(clicked);
    }
    //if total is more than big number than you lose
    else if(total > bigCrystal) {
        $("span").html('YOU LOSER!');
        $( "span" ).toggle(true);
        setTimeout(startGame,500);
        losses++;
        // startGame();
        $('#losses').html('Losses: '+ losses);
        // console.log(clicked);
    }   

    }
    startGame();
    crystalGame();
    });