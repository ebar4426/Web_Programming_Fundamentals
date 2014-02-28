//Eric Barrera 2/26/2014 Functions assignment
//Industry function
//This calculator will help you understand how much bandwith you will need for your network and calculate how fast your computer is reciving data.
//Before you start using the calculator please find out the speed of your network or server and find out how fast your computer is reciving data using your terminal by sending packets to that particular network or server and how many useres will be using it at the same time.
function bandCalc(networkBand, localBpsToNet, numberOfUsers){//here are the arguments for the user to put in
	var bpsFirst = 1000000;//conversion from Mbps to bps
	var conver = 125000;//conversion back from Bps to Mbps
	var bpsSecond = (networkBand * bpsFirst)/ 8;//this is for finding out the Bps of the network or aplication thats hosting your computer
	var howManyCan = bpsSecond / localBpsToNet;//formula to find out how many people can use the server at one time
	var yourAppSpeed = localBpsToNet / 125000;
	if(numberOfUsers < howManyCan){
		var answer = "The amount of people that can use this application or server at " + networkBand + "Mbps are " + howManyCan + " using your computers utilazation at " + yourAppSpeed + "Mbps.";
		return answer;
	}else if(numberOfUsers > howManyCan){
		var answertwo = "Sorry your currents settings dont allow your set amount of Users.";
		return answertwo;
	}
}
var lastAnswer = bandCalc(100, 200000, 40);
console.log(lastAnswer);
