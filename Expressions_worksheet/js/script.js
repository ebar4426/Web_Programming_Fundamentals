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
var sparkySlices = (boxes * slices) % people;//the formula to solve for distribution of slices
console.log("Sparky got " + sparkySlices + " slices of pizza");//answer