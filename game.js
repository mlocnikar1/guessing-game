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

//Go through question array and answer and give user feedback about their answers
for(var i = 0; i < questions.length; i++){
	var questionNumber = i + 1;
	//Get the user's answer
	answers[i] = prompt(questions[i]);
	if(i === questions.length - 1){ //the last question is not a yes or no question
			//convert the user's last answer to a number type
			answers[i] = parseInt(answers[i]);
			//console.log(answers[i]);
			//verify the user entered one of the correct numbers
			if(answers[i] !== 23 && answers[i] !== 65 && answers[i] !== 93){ 
				console.log("I'm sorry, you didn't choose one of the available numbers. Please refresh the page to start over.");
				break;
	}else if(answers[i].toLowerCase() === "y" || answers[i].toLowerCase() === "yes"){
		answers[i] = "Yes";
	}else if(answers[i].toLowerCase() === "n" || answers[i].toLowerCase() === "no"){
		answers[i] = "No";
	}else{ //User did not answer yes or no - exit game
		console.log("I'm sorry, I didn't understand your answer. Please refresh the page to start over and be sure to answer 'Yes' or 'No'");
		break;
	}
	//Give the user feedback based on their answer
	if(answers[i] === answerKey[i]){
		console.log("Your answer to question " + questionNumber + " is correct! The answer to '" 
			+ questions[i] + "' was '" + answers[i] + "'!")
	}else{
		console.log("Sorry, your answer to question " + questionNumber + " was wrong :(. The correct answer to '" + questions[i] + "' was '" + answerKey[i] + "'.");
	}
}



