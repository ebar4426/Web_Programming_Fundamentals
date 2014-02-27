//Functions Worksheet
//Circumference problem

var circumCalc = function(radius){//This is the function to call out this calculation
	var pi = 3.14159265359;//this is the value of pi
	total = 2 * pi * radius;//this is the formula to calculate the circumference of a circle
	return total;//this is to return the data
};
var circle = circumCalc(7);//Please enter the radius in the () for a print out in web console of the total circumference of a circle
console.log("The circumference of the circle is " + circle + ".");//this is how the console prints out


//Stung! Problem

var beeCalc = function(weight){
	var stingAmount = 8.6666666667;
	var totalStings = stingAmount * weight;
	return totalStings;
};
var stings = beeCalc(120);
console.log("It takes " + stings + " bee stings to kill this animal.");
