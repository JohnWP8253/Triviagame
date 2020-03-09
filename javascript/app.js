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
        // trivia properties
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
        console.log("game has begun");
        $(".start-button").remove(); // removes start button after clicked
        correctAnswers = 0;
        wrongAnswers = 0;
        unansweredQuestions = 0;
        loadQandA();
    }

    function loadQandA() {
        answered = false;
        timeRemaining = 16;
        interValidId = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        correct = movieTrivia[indexQandA].correctAnswer;
        var question = movieTrivia[indexQandA].quote;
        $(".quote").html(question);
        for (var i = 0; 1 <4; i++) {
            var answer = movieTrivia[indexQandA].answers[i];
            $(".answers").append('<h4 class = answersAll id=' + i + '>' + answer + '</h4?');
        }
        

    }

    
})