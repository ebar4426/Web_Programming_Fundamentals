//This is my Wacky page

//In this expression I though it would be fun to calculate the amount of sugar consumed by drinking coke or a soft drink in one year.

var sizeCan = prompt("What size of can/bottle/cup do you usualy drink when consuming a coke or soda? (ex. 12oz 16oz 32oz.....)");
var cansPerDay = prompt("How many cans/bottles/cups of that size do you drink each day you deside to drink a soda or coke?");
var daysAWeek = prompt("How many days a week do you drink coke or soda?");
var year = 52;
var sugarPerOunce = 2.8;
var rawSugar = 200;
var total = ((sizeCan * sugarPerOunce)* cansPerDay)* daysAWeek * year;
var cups = total / rawSugar;
alert("On average with the current amount of sugar per ounce of soda and coke, each year you consume " + total + "g of sugar!!! There is 200g of sugar in 1 cup of plain sugar!!!!! So you consume " + cups + " cups of raw sugar!!");
console.log()
