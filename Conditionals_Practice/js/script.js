//conditionals Practice

var kidHeight = 52;
var minHeight = 48;
var parentHeight = 45; //Height of kid when parent needed to ride.
//if child is old enough. print to the console "you can ride!"
if(kidHeight > minHeight){
	//code performed if condition is true.
	console.log("You can ride the coaster!");
}else if(kidHeight > parentHeight){
	//you can ride with a parent present.
	console.log("You can ride but only with a parent present.");
}else{
	//sorry kid you have some growing to do.
	console.log("Sorry kid you've got some growing to do!");
}
