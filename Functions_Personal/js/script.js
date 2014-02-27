//Personal Functions 
//Eric Barrera 2/26/2014
//This is a functions page that will be used to dertermin the size of dipers your chile should use based on weight and the type of formula that should be used by age
var babyCalc = function(weight, age){//used to call out calculation....weight should be in lb and age should be in months
	if(weight > 5 && weight < 15){
		var stageOne = "Size 1 ";
		return stageOne;
	}
	if(age > 2 && age < 7){
		var foodOne = "Stage 1 ";
		return foodOne;
	}
};
var fomula = babyCalc(7, 0);
var dipar = babyCalc(0, 5);
console.log(fomula + dipar);
