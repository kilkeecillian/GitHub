var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct=0, name = 0; 
//setting variables

//Set array to hold answers
var quizAnswers = [];

var questions=[
    {
	    question: "What year were Liverpool founded?",//question
	    correctAnswer: "1892",//right answer to question
        
        //list of multiple choice answers
	    answer0: "1892",
	    answer1: "1900",
	    answer2: "1991",
        answer3: "1875"
	},
    {
	    question: "How many league titles have they won?",//question
	    correctAnswer: "18",//right answer to question
        
        //list of multiple choice answers
	    answer0: "18",
	    answer1: "20",
	    answer2: "2",
        answer3: "8"
	},
    {
	    question: "Who is Liverpool's youngest ever goalscorer?",//question
	    correctAnswer: "Ben Woodburn",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Robbie Fowler",
	    answer1: "Michael Owen",
	    answer2: "Ben Woodburn",
        answer3: "Steven Gerrard"
	},
    {
	    question: "How many Champions League have Liverpool won?",//question
	    correctAnswer: "5",//right answer to question
        
        //list of multiple choice answers
	    answer0: "0",
	    answer1: "5",
	    answer2: "3",
        answer3: "1"
	},
	{
	    question: "What is Liverpool's stadium called",//question
	    correctAnswer: "Anfield",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Anfield",
	    answer1: "Old Trafford",
	    answer2: "Emirates",
        answer3: "Goodison Park"
	},
	{
	    question: "Who is Liverpools longest serving manager?",//question
	    correctAnswer: "Tom Watson",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Tom Watson",
	    answer1: "Bill Shankly",
	    answer2: "Rafa Benitez",
        answer3: "Bob Paisley"
	},
	{
	    question: "Who is Liverpool's all time top scorer?",//question
	    correctAnswer: "Ian Rush",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Luis Suarez",
	    answer1: "Robbie Fowler",
	    answer2: "Steven Gerrard",
        answer3: "Ian Rush"
	},
	{
	    question: "Who is Liverpool's longest serving captain?",//question
	    correctAnswer: "Steven Gerrard",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Ian Rush",
	    answer1: "Kenny Daiglish",
	    answer2: "Steven Gerrard",
        answer3: "Sami Hypia"
	},
	{
	    question: "What is the capacity of Anfield?",//question
	    correctAnswer: "54,000",//right answer to question
        
        //list of multiple choice answers
	    answer0: "60,100",
	    answer1: "90,000",
	    answer2: "54,000",
        answer3: "20,000"
	},
	{
	    question: "Who is Liverpool's current manager?",//question
	    correctAnswer: "Jurgen Klopp",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Jose Murinho",
	    answer1: "Jurgen Klopp",
	    answer2: "Aresene Wenger",
        answer3: "Rafa Benitez"
	},
	{
	    question: "What are Liverpools traditional colours?",//question
	    correctAnswer: "Red & White",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Red & White",
	    answer1: "Blue",
	    answer2: "Blue & Black",
        answer3: "Purple"
	},
	{
	    question: "Who are Liverpools cross town rivals?",//question
	    correctAnswer: "Everton",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Everton",
	    answer1: "Manchester Utd",
	    answer2: "Hull City",
        answer3: "QPR"
	},
	{
	    question: "Who is Liverpool's most capped player?",//question
	    correctAnswer: "Ian Callaghan",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Steven Gerrard",
	    answer1: "Jamie Carragher",
	    answer2: "Ian Callaghan",
        answer3: "Robbie Fowler"
	},
	{
	    question: "Who became the most expensive teenager in British football history when he moved to Liverpool in 1995?",//question
	    correctAnswer: "Mark Kennedy",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Raheem Sterling",
	    answer1: "Mark Kennedy",
	    answer2: "Philipe Coutinho",
        answer3: "Jamie Redknapp"
	},
	{
	    question: "Who are the only team Liverpool have scored seven against in one game in the Premier League?",//question
	    correctAnswer: "Southampton",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Southampton",
	    answer1: "Swansea",
	    answer2: "Everton",
        answer3: "Newcastle"
	},
	{
	    question: "Born in 1966, I played for England three times; my LFC career lasted 94 games; I helped beat LFC in an FA Cup final. Who am I?",//question
	    correctAnswer: "John Scales",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Graham Souness",
	    answer1: "Ray Houhton",
	    answer2: "Kenny Daiglaish",
        answer3: "John Scales"
	},
	{
	    question: "Who were Liverpool’s opponents when they last won the FA Cup?",//question
	    correctAnswer: "West Ham",//right answer to question
        
        //list of multiple choice answers
	    answer0: "West Ham",
	    answer1: "Manchester Utd",
	    answer2: "Bolton",
        answer3: "Wigan"
	},
	{
	    question: "What was the name of the song released by Liverpool before the 1988 FA Cup Final?",//question
	    correctAnswer: "Anfield Rap",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Liverpool Rap",
	    answer1: "Anfield Rap",
	    answer2: "Reds Rap",
        answer3: "Barnes Rap"
	},
	{
	    question: "What famous nickname was given to the players during the mid-90s?",//question
	    correctAnswer: "Spice Boys",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Spice Boys",
	    answer1: "Scouse Boys",
	    answer2: "Armani Boys",
        answer3: "Anfield Boys"
	},
	{
	    question: "Which one of these players has appeared for Liverpool, Everton, Manchester United and Manchester City?",//question
	    correctAnswer: "Peter Beardsley",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Michael Owen",
	    answer1: "Peter Beardsley",
	    answer2: "Robbie Fowler",
        answer3: "Gary Ablett"
	}
];

//function which takes an array and shuffles its contents
//used to get different order of multiple choice answers every time quiz is taken
function shuffleArray(array) 
{
	for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	return array;
}

//Above I have set my questions, 3 multi-choice answers and the answers in an multi-dimensional array, zero indexed
function _(x)
{ 
    return document.getElementById(x);
} 
//Setting underscore equal to document.getElementById
		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}

function printCert() {
    window.print();
}

function renderQuestion()
{ 
    test = _("test"); 
    if(pos >= questions.length)//If position is greater or equal to the length of question, ie 20
    { 
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() + "%)</h2><button onclick='printCert()'>Print Cert</button>";//Print # correct out of 20
        _("test_status").innerHTML += "  Thank you for completing the quiz";//Print "thank you .... "
        pos = 0;
        correct = 0;
        return false; 
    }

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    //Print questions and increment by one each iteration

    var bar=document.getElementById("progressBar");//Progress bar value
    bar.value = (pos+1);//Progress bar increments as we go through questions, starts at 1

    //console.log("Pos value is " + pos);//write this to console

    //push all potential answers to the quizAnswers array
    quizAnswers[0] = questions[pos].answer0;
    quizAnswers[1] = questions[pos].answer1;
    quizAnswers[2] = questions[pos].answer2;
    quizAnswers[3] = questions[pos].answer3;
    
    console.log("Unshuffled answers" + quizAnswers);
    
    //Shuffle the answers
    var shuffledAnswers = shuffleArray(quizAnswers);
    
    console.log("Shuffled answers" + shuffledAnswers);
    
    question = questions[pos].question;//question is in position 0 in the array(zero indexed)
    choiceA = shuffledAnswers[0]; //choice A is in position 1 in the array
    choiceB = shuffledAnswers[1]; //choice B is in position 2 in the array
    choiceC = shuffledAnswers[2]; //choice C is in position 3 in the array
    choiceD = shuffledAnswers[3]; //choice D is in position 4 in the array
    
    test.innerHTML = "<h3>"+question+"</h3>"; //questions are written in h3 size
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'> "+choiceB+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'> "+choiceC+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"'> "+choiceD+"<br><br>"; //Radio button
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";//on clicking submit button, it checks your answers
}
		
		
function checkAnswer()
{ 
    choices = document.getElementsByName("choices"); //Creates an array
    for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of the choices, increment it by one
    { 
        if(choices[i].checked) //if a choice is checked
        { 
            choice = choices[i].value; //Take the value of that choice and put it into choice
        }
    } 
    console.log("Chosen answer is " + choice);
    if(choice == questions[pos].correctAnswer)//If the value of choices is equal to the answer
    { 
        alert('Correct!');//Alert correct
        correct++;//Increment your correct answers by one
    }
    else//or else
    {
        alert('Sorry wrong answer. The correct answer is ' + questions[pos].correctAnswer);
    } 
    pos++; //Increment position by one ie go on to the next question
    
    renderQuestion(); //go to render question again
}

//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);

//Countdown Timer
window.onload = function() {
document.getElementById('timer').innerHTML =
  05 + ":" + 00;
startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){alert('Out of Time!!')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
}

