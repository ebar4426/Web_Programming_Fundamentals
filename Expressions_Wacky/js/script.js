//This is my Wacky page

//In this expression I though it would be fun to calculate the amount of sugar consumed by drinking coke or a soft drink in one year.

var sizeCan = prompt("What size of can/bottle/cup do you usualy drink when consuming a coke or soda? (ex. 12oz 16oz 32oz.....)");//this is to get the fl oz amount of soda 
var cansPerDay = prompt("How many cans/bottles/cups of that size do you drink each day you deside to drink a soda or coke?");//This is to find out how many of the size cup or can is drank the at one sitting or the entire day.
var daysAWeek = prompt("How many days a week do you drink coke or soda?");//used to find out how many days a week soda or coke is consumed
var year = 52;//number of weeks in a year
var sugarPerOunce = 2.8;//amount of suger per oz of soda or coke
var rawSugar = 200;//how much grams of sugar are in one cup of sugar
var total = ((sizeCan * sugarPerOunce)* cansPerDay)* daysAWeek * year;//fomula to calculate total grams of sugar consumed
var cups = total / rawSugar;//used to calculate the number of cups per year
alert("On average with the current amount of sugar per ounce of soda and coke, each year you consume " + total + "g of sugar!!! There is 200g of sugar in 1 cup of plain sugar!!!!! So you consume " + cups + " cups of raw sugar!!"); //displays the amount of sugar to user
console.log("On average with the current amount of sugar per ounce of soda and coke, each year you consume " + total + "g of sugar!!! There is 200g of sugar in 1 cup of plain sugar!!!!! So you consume " + cups + " cups of raw sugar!!");//displays the amount of sugar in the console
