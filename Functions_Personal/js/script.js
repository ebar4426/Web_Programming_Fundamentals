//Personal Functions 
//Eric Barrera 2/26/2014
//This is a functions page that will be used to dertermin the size of dipers your chile should use based on weight and the type of formula that should be used by age
var babyCalc = function(weight, age){//used to call out calculation....weight should be in lb and age should be in months
	if(weight > 5 && weight <= 15){
		var stageOne = "Size 1";
		return stageOne;
	}else if(weight > 15 && weight <= 25){
		var stageTwo = "Size 2";
		return stageTwo;
	}else if(weight > 25 && weight <= 35){
		var stageThree = "Size 3";
		return stageThree;
	}
	if(age > 3 && age <= 6){
		var foodOne = "Stage 1";
		return foodOne;
	}else if(age > 6 && age <= 9){
		var foodTwo = "Stage 2";
		return foodTwo;
	}else if(age > 9 && age <=12){
		var foodThree = "Stage 3";
		return foodThree;
	}
};
var dipar = babyCalc(20, 0);
var fomula = babyCalc(0, 5);
console.log("The proper type of formula for your baby should be " + fomula + " formula, and the proper diaper for your babys weight should be a " + dipar + " diaper");
