//Eric Barrera 2/27/2014 functions project
//this code will be used to find out how many words you type an hour based on how fast you type a min. it also will tell you how many key strokes you take on average by giving it the average number of letters in the words your typing 
//to find out how fast you type a minute.
var wordCalc = function(wordsPMin, hoursTypeEssay, averageNumOfLetters){
	var min = 60;
	var total = wordsPMin * min * hoursTypeEssay;//how to get the total per hour your typing and find out how much you would type if you typed an essay
	var strokes = total * averageNumOfLetters;//please enter the average number of leters of the words your using in your essay
	var fin = "The total amount of words typed if you spent " + hoursTypeEssay + " hours writing your essay, you would have typed " + total + " words. That's about " + strokes + " key strokes if your words average out to " + averageNumOfLetters + ".";//aswer for calculator
	return fin;//return data
};
var finAnswer = wordCalc(35, 3, 5);//enter your words per min, then your hours working on an essay, then the average amount of letters in the words used in your essay
console.log(finAnswer);//used to print to the console the final answer
