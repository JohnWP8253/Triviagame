// app function
$(document).ready(function (){

    // My movie quote trivia game
    

    // Set global variables
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unansweredQuestions= 0;
    var timeRemaining = 16;
    var interValidId;
    var indexQandA = 0; // index to load a different quote each round without the game reset or screen refresh
    var answered = false; //variable to stop timer if user has clicked an answer
    var correct;

    var movieTrivia = [{
        
        quote:"You're gonna need a bigger boat.",
        answers: ["Overboard", "Jaws", "Titanic", "Master and Commander"],
        correctAnswer:"1",
        gif:"https://media.giphy.com/media/aq6wETurhpbc4/giphy.gif"
    }, {
        quote:"You're killing me, Smalls",
        answers: ["The Sandlot", "The Bad News Bears", "Rookie of the Year", "The Perfect Game"],
        correctAnswer:"0",
        gif:"https://media.giphy.com/media/3oeHLdMOyYLnjZ2CfC/giphy.gif"
    }, {
        quote:"Hasta la vista, baby!",
        answers: ["The Three Amigos", "The Punisher", "Spanglish", "The Terminator"],
        correctAnswer:"3",
        gif:"https://media.giphy.com/media/26BoCW1FA2980EaR2/giphy.gif"
    }, {
        quote:"I'll be right here.",
        answers: ["Sixteen Candles", "Flubber", "E.T. The Extraterrestrial", "Star Wars"],
        correctAnswer:"2",
        gif:"https://media.giphy.com/media/nL4HKlfoUBW7kO0vqu/giphy.gif"
    }, {
        quote:"I'm your number one fan.",
        answers: ["Crossroads", "Misery", "A Star is Born", "Dreamgirls"],
        correctAnswer:"1",
        gif:"https://media.giphy.com/media/rpRmBGR3xaAZa/giphy.gif"
    
    }, {
        quote:"I'm gonna make him an offer he can't refuse.",
        answers: ["The Godfather", "Goodfellas", "The Departed", "Casino"],
        correctAnswer:"0",
        gif:"https://media.giphy.com/media/RlH7GlyiGKJ1ciAbO0/giphy.gif"
    }, {
        quote:"Did you have a brain tumor for breakfast?",
        answers: ["Halloween", "Judy", "Heathers", "Austin Powers"],
        correctAnswer:"2",
        gif:"https://media.giphy.com/media/3owyuaFZR2muu2udIQ/giphy.gif"
    }, {
        quote:"HEY YOU GUYS!!!!",
        answers: ["Bratz", "The Goonies", "Ted", "Her"],
        correctAnswer:"1",
        gif:"https://media.giphy.com/media/5YhFFUFq6ZTry/giphy.gif"
    }, {
        quote:"You talking to me?",
        answers: ["Taxi Driver", "Look Who's Talking", "Soapdish", "Quiz Show"],
        correctAnswer:"0",
        gif:"https://media.giphy.com/media/3oEjHO6kED0gWOSpCU/giphy.gif"
    }, {
        quote:"You can't handle the truth!",
        answers: ["Risky Business", "Top Gun", "A Few Good Men", "The Firm"],
        correctAnswer:"2",
        gif:"https://media.giphy.com/media/IgsXOXGPxfT3O/giphy.gif"
    }];

    function startGame() {
        $(".answers").empty();
        correctAnswers = 0;
        wrongAnswers = 0;
        unansweredQuestions = 0;
        loadQandA();
        console.log("anything")
    }
    function correctAnswer() {
        correctAnswers++;
        $(".timeRemaining").text("YOU GOT IT!");
        resetQuote();
    }

    function incorrectAnswer() {
       wrongAnswers++;
       $(".timeRemaining").text("WOMP WOMP - NO DICE!");
       resetQuote();
   }

   function unAnswered() {
       unansweredQuestions++;
       $(".timeRemaining").text("GOTTA BE FASTER NEXT TIME, MATE!");
       resetQuote();
   }

    function loadQandA() {
        $("#start-button").hide();
        answered = false;
        timeRemaining = 16;
        interValidId = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }

        correct = movieTrivia[indexQandA].correctAnswer;
        var question = movieTrivia[indexQandA].quote;
        $(".quote").html(question);
        for (var i = 0; i < movieTrivia[indexQandA].answers.length; i++) {
            var answer = movieTrivia[indexQandA].answers[i];
            $(".answers").append('<h4 class = answersAll id=' + i + '>' + answer + '</h4>');
        }

        $("h4").click(function() {
            var id = $(this).attr("id");
            if (id === correct) {
                answered = true;
                $(".quote").text("THE ANSWER IS: " + movieTrivia[indexQandA].answers[correct]);
                correctAnswer();
            } else {
                answered = true;
                $(".quote").text("YOU PICKED: " + movieTrivia[indexQandA].answers[id] + "....HOWEVER THE RIGHT ANSWER IS: " + movieTrivia[indexQandA].answers[correct]);
                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(interValidId);
            $(".quote").text("THE CORRECT ANSWER IS: " + movieTrivia[indexQandA].answers[correct]);
            unAnswered();
        } else if (answered === true) {
            clearInterval(interValidId);
        } else {
            timeRemaining--;
            $(".timeRemaining").text("YOU'VE GOT " + timeRemaining + " SECONDS TO MAKE A CHOICE");
        }
    }

    function resetQuote() {
        $(".answersAll").remove();
        $(".answers").append('<div class=answerGif src"' + movieTrivia[indexQandA].gif + '">');
        indexQandA++;
        if (indexQandA < movieTrivia.length) {
            setTimeout(function (){
                loadQandA();
                $(".answerGif").remove();
            }, 5000)
        } else {
            setTimeout(function(){
                $(".quote").remove();
                $(".timeRemaing").remove();
                $(".answerGif").remove();
                $(".answers").append('<h4 class= answersAll end>CORRECT ANSWERS: ' + correctAnswers + '</h4>');
                $(".answers").append('<h4 class= answersAll end>INCORRECT ANSWERS: ' + wrongAnswers + '</h4>');
                $(".answers").append('<h4 class= answersAll end>UNANSWERED QUESTIONS: ' + unansweredQuestions + '</h4>');
                setTimeout(function(){
                    location.reload();
                }, 7000);
            }, 5000);
        }
    };

    var start = $('<button>Start</button>').click(function (){
        startGame();
    });
    $("#start-button").append(start).css("text-align", "center");
})

