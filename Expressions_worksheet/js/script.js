// Javascript Expressions work sheet

//Dog years 

//dog years times seven = age in dog years
var ageInHuman = 5;//age in human years
var dogYears = ageInHuman * 7;//the formula to solve for dog years
console.log("Sparky is " + ageInHuman + " human years old which is " + dogYears + " in dog years");//answer

//Slice of pie part 1

//find the number of slices of pizza per box how many people are at the part and how many boxes of pizza were ordered
var slices = 8;//number of pizza per box
var people = 13;//number of people at the party
var boxes = 4;//boxes of pizza ordered
var slicesPerPerson = (boxes * slices) / people;//the formula to solve for distribution of slices
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party");//answer

//Slice of pie part 2

var slices = 8;//number of pizza per box
var people = 13;//number of people at the party
var boxes = 4;//boxes of pizza ordered
var sparkySlices = (boxes * slices) % people;//the formula to solve for sparkys slices
console.log("Sparky got " + sparkySlices + " slices of pizza");//answer

//Average shopping bill

var shopTotals = [165, 145, 96, 160, 120];
var totalSpent = shopTotals[0] + shopTotals[1] + shopTotals[2] + shopTotals[3] + shopTotals[4];
var average = totalSpent/5;
console.log("You have spent a total of $" + totalSpent + " on groceries over 5 weeks. That is an average of $" + average + "per week");


//Discounts

var videoGame = 59.99;
var discount = .30;
var game = "Video Game";
var tax = 1.0825;
var totalNoTax = videoGame - (videoGame * discount);
var totalandtax = totalNoTax * tax;
console.log("Your " + game + " originally $" + videoGame + ", but after a 30% discount, is now $" + totalNoTax + " without tax, and $" + totalandtax + " with tax");
