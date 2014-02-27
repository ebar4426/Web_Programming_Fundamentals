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

var beeCalc = function(weight){//this is the function to call out the calculation
	var stingAmount = 8.6666666667;//this is the given info for amount of bee stings it takes to kill an animal per pound
	var totalStings = stingAmount * weight;//this is the formula to find out how many bee stings in total it would take
	return totalStings;//this is to return the info
};
var stings = beeCalc(120);//Please enter the weight trying to be calculated here to find out how many bee stings it would take to kill
console.log("It takes " + stings + " bee stings to kill this animal.");//console message that is dispayed after calculation is compleate
