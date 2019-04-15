 $(document).ready(function (){
 // event listeners
 $("#remaining-time").hide();
 $("#start").on('click', trivia.startGame);
 $(document).on('click' , '.option', trivia.guessChecker);

})


var trivia = {
 // trivia setup.
 correct: 0,
 wrong: 0,
 unanswered: 0,
 currentSet: 0,
 timer: 20, //shouldn't be the same number as the starting one
 timerOn: false,
 timerId : '',
 // questions options answers
 questions: {
   q1: 'How does Jon Snow die?',
   q2: 'What is the name of Sansa\'s Direwolf?',
   q3: 'What is the surname given to bastards born in Dorne?',
   q4: 'Which name is given to the bastards of The Reach?',
   q5: " How many fingertips did Stannis Baratheon chop off of Davos\' hand(s)?",
   q6: 'Why could Jon leave the Night\'s Watch, since his vows were for life?',
   q7: "What is that name of Robb Stark\'s wife?",
   q8: "Did you know that Jon Snow becomes King?"
 },
 options: {
   q1: ['Falls', 'Burns', 'Posion', 'Stabbed'],
   q2: ['Puppy', 'Ghost', 'Lady', 'Wolfy'],
   q3: ['Sands', 'River', 'Rocks', 'Water'],
   q4: ['Flowers', 'Bastards', 'No Faces', 'Faceless Ones'],
   q5: ['3','5','8','4'],
   q6: ['He Quit','Died','Gave up','Left'],
   q7: ['Anna', 'Lady Margy', 'Talisa','Doreen'],
   q8: ['What?!',  'Of course I did!', 'NOOOOO!', 'Why did you tell me this!?']
 },
 answers: {
   q1: 'Stabbed',
   q2: 'Lady',
   q3: 'Sands',
   q4: 'Flowers',
   q5: '4',
   q6: 'Died',
   q7: 'Talisa',
   q8: 'What?!'
 },
 
//start the game function

 startGame: function(){
   // reset the game 
   trivia.currentSet = 0;
   trivia.correct = 0;
   trivia.wrong = 0;
   trivia.unanswered = 0;
   clearInterval(trivia.timerId);

   // show game section
   $('#game').show();

   //  empty last results
   $('#results').html('');

   // show timer
   $('#timer').text(trivia.timer);

   // remove start button
   $('#start').hide();

   $('#remaining-time').show();

   // ask first question
   trivia.nextQuestion();

 },
 // method to loop through and display questions and options
 nextQuestion : function(){

   // set timer to 10 seconds each question
   trivia.timer = 10;
    $('#timer').removeClass('last-seconds');
   $('#timer').text(trivia.timer);

   
   // who knew this was a thing?!  What?!  Prevent timer speed up...sigh  Thanks bro!
   if(!trivia.timerOn){
     trivia.timerId = setInterval(trivia.timerRunning, 1000);
   }

   // gets all the questions then indexes the current questions
   var questionContent = Object.values(trivia.questions)[trivia.currentSet];
   $('#question').text(questionContent);

   // an array of all the user options for the current question
   var questionOptions = Object.values(trivia.options)[trivia.currentSet];

   //trivia guess options in the html
   $.each(questionOptions, function(index, key){
     $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
   })

 },
 // what happens when timer runs out... this is nuts... also do TA's read this?  Yeah... I got help on this part... This is nuts
 timerRunning : function(){
   // if timer still has time left and there are still questions left to ask
   if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
     $('#timer').text(trivia.timer);
     trivia.timer--;
       if(trivia.timer === 4){
         $('#timer').addClass('last-seconds');
       }
   }
   // the time has run out and increment unanswered, run result
   else if(trivia.timer === -1){
     trivia.unanswered++;
     trivia.result = false;
     clearInterval(trivia.timerId);
     resultId = setTimeout(trivia.guessResult, 1000);
     $('#results').html('<h3>Out of time! The answer was '+ Object.values(trivia.answers)[trivia.currentSet] + '</h3>' + document.body.appendChild(img));
   }
   // if all the questions have been shown end the game, show results
   else if(trivia.currentSet === Object.keys(trivia.questions).length){

     // adds results of game (correct, wrong, unanswered) to the page
     $('#results')
       .html('<h3>Thank you for playing!</h3>'+
       '<p>Correct: '+ trivia.correct +'</p>'+
       '<p>wrong: '+ trivia.wrong +'</p>'+
       '<p>Unaswered: '+ trivia.unanswered +'</p>'+
       '<p>Play again!</p>');

     // hide game sction
     $('#game').hide();

     // show start button to begin a new game
     $('#start').show();
   }

  },
  // method to evaluate the option clicked
  guessChecker : function() {

    // timer ID for gameResult setTimeout
    var resultId;

    // the answer to the current question being asked
    var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];

    // if the text of the option picked matches the answer of the current question, increment correct
    if($(this).text() === currentAnswer){
      // turn button green for correct
      $(this).addClass('btn-success').removeClass('btn-info');

      trivia.correct++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Correct Answer!</h3>');
    }
    // else the user picked the wrong option, increment wrong
    else{
      // turn button clicked red for wrong
      $(this).addClass('btn-danger').removeClass('btn-info');

      trivia.wrong++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Better luck next time! '+ currentAnswer +'</h3>');
    }

  },
  // method to remove previous question results and options
  guessResult : function(){

    // increment to next question set
    trivia.currentSet++;

    // remove the options and results
    $('.option').remove();
    $('#results h3').remove();

    // begin next question
    trivia.nextQuestion();

  }

}

