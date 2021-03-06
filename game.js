window.onload = function(){ //wait until the page finishes loading to start the game
	//create empty array variable to store user's answers
	var answers = [];

	//create array with my 3 questions
	var questions = ["Will I be having tacos for dinner tonight?", 
						"Is my favorite movie Bridesmaids?",
						"Was I a ghost for Halloween?",
						"Is my favorite color Pink?",
						"Is my favorite sport softball?",
						"Pick a number - 23, 65, 93"];
	//create array with the answers to my questions
	var answerKey = ["Yes", "Yes", "No", "Yes", "No", 23];
	var questionEl; //The element that holds the questions
	var resultEl; //The element that holds the user's results 
	//Access div on page to hold the results
	resultEl = document.getElementById("resultEl");

	//function to add questions to the page
	function printQuestions(){
		//Access div on page to hold the questions
		questionEl = document.getElementById("questionEl");
		//start with a blank question area each time the game is played
		questionEl.innerHTML = "";
		for(var i = 0; i < questions.length; i++){
			//Put the question on the page
			questionEl.innerHTML += '<h3>Question ' + (i + 1)+ ': ' + questions[i] + '</h3>';
		}
	}

	//function to gather user's answers
	function getAnswers(){
		//go through array, asking the user each question
		for(var i = 0; i < questions.length; i++){
			//Get the user's answer
			answers[i] = prompt(questions[i]);
			//Process the user's answer
			if(i === questions.length - 1){ //the last question is not a yes or no question
				//convert the user's last answer to a number type
				answers[i] = parseInt(answers[i]);
				//console.log(answers[i]);
				//verify the user entered one of the correct numbers
				if(answers[i] !== 23 && answers[i] !== 65 && answers[i] !== 93){ 
					resultEl.innerHTML += "<h3>I'm sorry, you didn't pick one of the given numbers in question 6. Please refresh the page to start over and be sure to answer 23, 65, or 93.</h3>";
					break;
				}
			}else if(answers[i].toLowerCase() === "n" || answers[i].toLowerCase() === "no"){
				answers[i] = "No";
			}else if(answers[i].toLowerCase() === "y" || answers[i].toLowerCase() === "yes"){
				answers[i] = "Yes";
			}else{ //User did not answer yes or no - exit game
				resultEl.innerHTML += "<h3>I'm sorry, I didn't understand your answer. Please refresh the page to start over and be sure to answer 'Yes' or 'No'</h3>";
				break;
			}
		}
	}

	//function to put the user's results on the page
	function addResults(){
		//start with a blank result area each time the game is played
		resultEl.innerHTML = "";
		//Go through answer array and answer key and give user feedback about their answers
		for(var i = 0; i < answers.length; i++){
			var questionNumber = i + 1;
			//Add the user's feedback, based on their answer, to the page under the results section
			if(answers[i] === answerKey[i]){
				resultEl.innerHTML += "<h3 class='correctAnswer'><img class='checkMark' src='check.png' alt='check mark'/> Your answer to question " + questionNumber + " is correct! The answer to '" 
					+ questions[i] + "' was '" + answers[i] + "'!</h3>";
			}else{
				resultEl.innerHTML += "<h3 class='wrongAnswer'><img class='xMark' src='x.gif' alt='x mark'/> Sorry, your answer to question " + questionNumber + " was wrong :(. The correct answer to '" + questions[i] + "' was '" + answerKey[i] + "'.</h3>";
			}
		}	
	}

	printQuestions();
	getAnswers();
	addResults();


};


