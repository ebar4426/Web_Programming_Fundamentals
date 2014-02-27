//Personal Functions 
//Eric Barrera 2/26/2014
//This is a functions page that will be used to dertermin the size of dipers your chile should use based on weight and the type of formula that should be used by age
var babyCalc = function(weight, age){//used to call out calculation....weight should be in lb and age should be in months
	if(weight > 5 && weight <= 15){//this is for the weights between 5 and 15
		var stageOne = "Size 1";//what the variable will display
		return stageOne;//to give info out to rest of code
	}else if(weight > 15 && weight <= 25){//this is for weights between 15 and 25
		var stageTwo = "Size 2";//what the variable will display
		return stageTwo;//to give info out to rest of code
	}else if(weight > 25 && weight <= 35){//this is for weights between 25 and 35
		var stageThree = "Size 3";//what the variable will display
		return stageThree;//to give info out to rest of code
	}
	if(age > 3 && age <= 6){//this is for ages 3months to 6months
		var foodOne = "Stage 1";//what the variable will display
		return foodOne;//to give info out to rest of code
	}else if(age > 6 && age <= 9){//this is for ages 6months to 9months
		var foodTwo = "Stage 2";//what the variable will display
		return foodTwo;//to give info out to rest of code
	}else if(age > 9 && age <=12){//this is for ages 9months to 12months
		var foodThree = "Stage 3";//what the variable will display
		return foodThree;//to give info out to rest of code
	}
};
var dipar = babyCalc(20, 0);//Please enter your babys weight in the argument location and leave the second one 0
var fomula = babyCalc(0, 5);//Please enter you babys age in months in the second argument location and leave the first one 0
console.log("The proper type of formula for your baby should be " + fomula + " formula, and the proper diaper for your babys weight should be a " + dipar + " diaper");//This is the print out to the console of your browser
