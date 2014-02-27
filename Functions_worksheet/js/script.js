//Functions Worksheet
//Circumference problem

var circumCalc = function(radius){//This is the function to call out this calculation
	var pi = 3.14159265359;//this is the value of pi
	total = 2 * pi * radius;//this is the formula to calculate the circumference of a circle
	return total;
};
var circle = circumCalc(7);
console.log(circle);
