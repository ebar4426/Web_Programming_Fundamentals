// Personal Expressions File

//Tis code is used to figure out how much time you weould speend each day on homework if you did it each day.
var numClass = prompt("How many classes are you curently enrolled in?");//asked to gather number of classes
var time = prompt("How much time do you spend on homework for each class that you have?");//asked to find out how much time spent doing homework for each class
var days = prompt("How many days a week do you spend doing homework.");//asked to find out how many days a week is spent doing homework
var week = 7;//this is the constant for the number of days in a week
var total = (numClass * time * days)/week;//this is the fomrula to solve the problem and find out how many hours on average of each day 
alert("You spend an average of " + total + "hr/day doing homework per day each week that you are in shcool!");//this is the alert that the user gets to see
console.log("You spend an average of " + total + "hr/day each week that you are in shcool.");//This is the console answer

