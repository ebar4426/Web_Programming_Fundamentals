//Eric Barrera 2/19/2014 Conditionals Assignment
//This is my industry page where I will be Creating a PreLaunch check list for a web page.
var firstAns = prompt("We are going to go over a Pre Launch check list for your web page. Have you reviewed your Spelling, Gramer and Punctuation? If yes please type yes, if not please type no.");
var secAns;
var thirAns;
var forthAns;
if(firstAns === "yes"){
	secAns = prompt("Ok! Great! Now have you checked the Compatibility with other web browsers? If yes please type yes, if not please type no.");
	if(secAns === "yes"){
		thirAns = prompt("Good! Ok have you Checked and made sure that your images are optimized and displaying properly? If yes please type yes, if not please type no.");
		if(thirAns === "yes"){
			forthAns = prompt("Almost done! Last but certainly not the least. Have you Validated your web site?")
		}
	}
}
