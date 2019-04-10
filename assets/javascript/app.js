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
  timer: 20,  //good pratice not to put the same number as starting number to see if it changes
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
//start game with the correct number of answers and time reset
startGame: function() {
  trivia.currentSet = 0;
  trivia.correct = 0;
  trivia.incorrect = 0;
  trivia.unanswered = 0;
  clearInterval(trivia.timerId);

//restart game

     // show the game
     $('#game').show();

     //  empty the result ID
     $('#results').html('');

     // get the timer to show
     $('#timer').text(trivia.timer);

     // hide the start button
     $('#start').hide();

     $('#remaining-time').show();

     // ask first question
     trivia.nextQuestion();

   },

  nextQuestion: function() {

     // set timer to 10 seconds each question
     trivia.timer = 10;
      $('#timer').removeClass('last-seconds');
     $('#timer').text(trivia.timer);

      // who knew this was a thing?!  What?!  Prevent timer speed up...sigh
      if(!trivia.timerOn){
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
      }

    //correct question placed by array of questions
    var questionContent = Object.values(trivia.questions)[trivia.currentSet];
    $('#question').text(questionContent);

    //list of guesses setup for display
    var questionOptions = Object.values(trivia.options)[trivia.currentSet];

    // guesses pushed to the html
    $.each(questionOptions, function(index, key){
    $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
    })
  },

}


//timer out
//all questions shown/answered
//get result
//else if statement
//remove statements
//reset game