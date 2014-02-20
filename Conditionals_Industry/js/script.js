//Eric Barrera 2/19/2014 Conditionals Assignment
//This is my industry page where I will be Creating a PreLaunch check list for a web page.
var firstAns = prompt("We are going to go over a Pre Launch check list for your web page. Have you reviewed your Spelling, Gramer and Punctuation? If yes please type yes, if not please type no.");//for first prompt and answer
var secAns;//for second answer
var thirAns;//for third answer
var forthAns;
if(firstAns === "yes"){
	secAns = prompt("Ok! Great! Now have you checked the Compatibility with other web browsers? If yes please type yes, if not please type no.");
	if(secAns === "yes"){
		thirAns = prompt("Good! Ok have you Checked and made sure that your images are optimized and displaying properly? If yes please type yes, if not please type no.");
		if(thirAns === "yes"){
			forthAns = prompt("Almost done! Last but certainly not the least. Have you Validated your web site? If yes please type yes, if not please type no.");
			if (forthAns = "yes"){
				alert("Awesome!! Your site is ready for launch all major parts have been looked over! Good Luck!!");
			}else{
				alert("Please make sure you look over this step. Its important to double or triple check your site before launch.");
			}
		}else{
			alert("Please make sure you look over this step. Its important to double or triple check your site before launch.");
		}
	}else{
		alert("Please make sure you look over this step. Its important to double or triple check your site before launch.");
	}
}else{
	alert("Please make sure you look over this step. Its important to double or triple check your site before launch.");
}
