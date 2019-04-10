$(document).ready(function(){
// event listener's
$("#remaining-time").hide();
$("#start").on('click', trivia.startGame);
$(document).on('click' , '.option', trivia.guessChecker);
})
// trivia timer/count
var trivia ={
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 10,
  timerOn: false,
  timerID : '',

//questions and answers data
question: {
  
}

}

//questions and answers data
//start game
//restart game
//next question loop
//set timer
//index questions
//array of questions
//push to html
//timer out
//all questions shown/answered
//get result
//else if statement
//remove statements
//reset game