var yourChoice;
var compChoice;
var youScore = 0; 
var compScore = 0;
var timerAmount = 3000; 
var seconds = 0;
var startMessage = "Make your move!";

function go(theClickedImage) {  

 seconds = timerAmount / 1000;
  
  var src = $(theClickedImage).attr('src').split('/');   
  $(theClickedImage).addClass("selected");
  var file = src[src.length-1];
  var yourChoice = file.split('.')[0];
  var compChoice = "";
  
  //COMPUTER
  var randDec = Math.random();
  var randWhole = Math.floor(randDec*3+1);
  if(randWhole == 1) {
    $('#compRock').addClass("selected");
    compChoice = 'rock';
  }
  if(randWhole == 2) {
    $('#compPaper').addClass("selected");
    compChoice = 'paper';
  }
  if(randWhole == 3) {
    $('#compScissors').addClass("selected");
    compChoice = 'scissors';
  }
  
  if(yourChoice == compChoice) {
    $('#result').text("IT'S A TIE!");
    $('#result').css("background-color", "darkgrey");
    $('#computer').attr("class", "lost");
    $('#you').attr("class", "lost");
    youScore++;
    compScore++;
  }
  else if(
    (yourChoice == "rock" && compChoice == "scissors") ||
    (yourChoice == "paper" && compChoice == "rock") ||
    (yourChoice == "scissors" && compChoice == "paper")
  ) {
    $('#result').text("YOU WIN!");
    $('#result').css("background-color", "green");
    $('#computer').attr("class", "lost");
    youScore++;
  }
  else if(
    (yourChoice == "rock" && compChoice == "paper") ||
    (yourChoice == "paper" && compChoice == "scissors") ||
    (yourChoice == "scissors" && compChoice == "rock")    
    ){
    $('#result').text("YOU LOSE!");
    $('#result').css("background-color", "red");
    $('#you').css("background-color", "transparent");
    compScore++;
  } else {
    $('#result').text("oops: " + yourChoice + " " + compChoice);
    $('#result').css("color", "white");
  }
 
  // Hide non-selected choices
  if (yourChoice == "rock") { 
    $('#youPaper').css("display", "none");
    $('#youScissors').css("display", "none");
  } else if (yourChoice == "paper") { 
      $('#youRock').css("display", "none");
      $('#youScissors').css("display", "none");
  } else if (yourChoice == "scissors") {
      $('#youPaper').css("display", "none");
      $('#youRock').css("display", "none");    
  }
    if (compChoice == "rock") { 
      $('#compPaper').css("display", "none");
      $('#compScissors').css("display", "none");
  } else if (compChoice == "paper") { 
      $('#compRock').css("display", "none");
      $('#compScissors').css("display", "none");
  } else if (compChoice == "scissors") {
      $('#compPaper').css("display", "none");
      $('#compRock').css("display", "none");    
  }
  
  setTimeout(resetInterface, timerAmount);
  countDownTimer();
}

function resetInterface() {
  $('#youRock').attr("class","");
  $('#youPaper').attr("class","");
  $('#youScissors').attr("class","");

  $('#youRock').css("display", "inline");
  $('#youPaper').css("display", "inline");
  $('#youScissors').css("display", "inline");
 
  $('#compRock').attr("class","");
  $('#compPaper').attr("class","");
  $('#compScissors').attr("class","");
 
  $('#compRock').css("display", "inline");
  $('#compPaper').css("display", "inline");
  $('#compScissors').css("display", "inline");

  $('#score').text("You: "+ youScore +" Computer: "+ compScore);

  $('#result').text("Make your move!");
  $('#result').css("background-color","blue");
  
  $('#you').class("you");
  $('#computer').class("computer");
}

function countDownTimer() {  

  if ($('#result').text() == startMessage) { 
    return;
  }
  var message =  $('#result').text() + " ... " + seconds; 
  $('#result').text(message);
  
  if (seconds > 0) { 
    seconds--; 
    setTimeout(countDownTimer, 1000);
  }
}

$('#resetButton').click(function () {
  youScore = 0;
  compScore = 0;
  resetInterface();
});