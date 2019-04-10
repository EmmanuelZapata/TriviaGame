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
     q1: 'How does Jon Snow die?',
     q2: 'What is the name of Sansa\'s Direwolf?',
     q3: 'What is the surname given to bastards born in Dorne?',
     q4: 'Which name is given to the bastards of The Reach?',
     q5: " How many fingertips did Stannis Baratheon chop off of Davos\' hand(s)?",
     q6: 'Why could Jon leave the Night\'s Watch, since his vows were for life?',
     q7: "What is that name of Robb Stark\'s wife?"
   },
   options: {
     q1: ['Falls', 'Burns', 'Posion', 'Stabbed'],
     q2: ['Puppy', 'Ghost', 'Lady', 'Wolfy'],
     q3: ['Sands', 'River', 'Rocks', 'Water'],
     q4: ['Flowers', 'Bastards', 'No Faces', 'Faceless Ones'],
     q5: ['3','5','8','4'],
     q6: ['He Quit','Died','Gave up','Left'],
     q7: ['Anna', 'Lady Margy', 'Talisa','Doreen']
   },
   answers: {
     q1: 'Stabbed',
     q2: 'Lady',
     q3: 'Sands',
     q4: 'Flowers',
     q5: '4',
     q6: 'Died',
     q7: 'Talisa'
   },
//start game with the correct number of answers and time
startGame: function() {
  trivia.currentSet = 0;
  trivia.correct = 0;
  trivia.incorrect = 0;
  trivia.unanswered = 0;
  clearInterval(trivia.timerId);
}

}

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