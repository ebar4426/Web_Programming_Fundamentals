// This is the Industry Expressions page...

//On this page we will demonstrate arrays and find out how they can help in mathmatical calculations. In this expression we will be calculating the amout of time spent developing a web site. In this example we will only be doing the hours in one week. And we will then find out how much the contractor must pay you the developer for your work.

var hoursWorked = [8, 7, 9, 6, 4, 6, 11];//Here please enter the number of hours worked this week. This is to find out how many hours have been worked in total
var payPerHour = 30;//please enter your pay an hour that your employer is paying you.
var totalPay = (hoursWorked[0] + hoursWorked[1] + hoursWorked[2] + hoursWorked[3] + hoursWorked[4] + hoursWorked[5] + hoursWorked[6])* payPerHour;//this is the formula to find out how much your employer needs to pay you 
var averagePerDay = totalPay / 7;//this is used to find out the average amount of money made each day.
