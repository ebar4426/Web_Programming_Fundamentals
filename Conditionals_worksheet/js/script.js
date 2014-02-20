//Conditionals Work Sheet
//Stuff your face 1
var compWeight = 265;//weight of the actual competetor
var qualWeight = 250;//qualifing weight to enter competion
if(compWeight >= qualWeight){//equasion on how to find out if competitor can qualifi
	console.log("The competitor qualifies for the heavyweight division.");//console message
}else{
	console.log("The competitor needs to gain some weight!");//message if under weight
}
//Group 1: Expressions with Conditionals
//Celsius to Fahrenheit converter

var degrees = 100;//the number you want to convert 
var unit = "c";//the unit of temprrature 
var total;//answer
if(unit === "f"){//to determin if a Celsius conversion
	total = (degrees - 32)*5/9;//formula for celsius
	console.log("The temperature is " + total + " degrees Celsius.");//console answer
}else if(unit === "c"){//to determin if a Fahrenheit conversion
	total = degrees * 9/5 + 32;//formula for fahrenheit
	console.log("The temperature is " + total + " degrees Fahrenheit.");//console answer
}
// you can enter any of the data set to find out the answers here they are 32F is 0C 100C is 212F 90F is 32.22C
// gives correct answer every time just make sure to change the unit of the temp you are trying to convert

//Group 2: Multiple Results
Check the Login

var entUserName = "ericdb";//prompt("Please enter your user name");//this is for user to enter user name. You can remove first comment so you can enter promps on browser
var entPassword = "password";//prompt("Please enter your password");//this is for user to enter password. You can remove first comment so you can enter promps on browser
var userName = "ericdb";//this is the correct user name
var password = "password";//this is the correct password
if(entUserName === userName && entPassword === password){//this is used to determin if the password and username the user entered are correct
	console.log("Welcome, " + userName + "!");//welcome message
}else if(entUserName != userName){//this is what is used to determin if user name is incorect 
	console.log("User not found. Try again.");//this is what displays if the username is incorrect 
}else if(entPassword != password){//this is used to determin if password is incorrect
	console.log("Password does not match our records.");//this is used to display that password is incorrect
}
//This code is used to verifi a user name and password you can change the userName and password then go to a browser and enter your username and password you changed to see it in action

//

