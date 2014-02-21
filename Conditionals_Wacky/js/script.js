//Eric Barrera 2/19/2014 Conditionals Assignment
//this is my wacky code. it is a storry where you make the dessisions.
var firstDesision;
var secondDesision;
var thirdDesision;
var badEnd;
var okEnd;
var goodEnd;
alert("This is a decision making story! Lets begin, to set the location you arrive at a dark and spooky house that you have to inspect. There are lots of rumors about this place. You are a reporter that’s never been scared of a challenge. You want to get the scoop on this place, it could make your carrer. Your boss gave you a deadline of tomorrow. Wanting the best time for paranormal activity you decide to go tonight! You have your head camera and headset to document all your adventures. To make matters worse, a huge storm is rolling in. You've been given a key by the owners of the property. You open the front door and step inside......");
firstDesision = prompt("You step inside a very dusty entrance. You take up your options. You can go up stairs or can leave right now before it gets bad. Make your desision. Type 1 to go upstairs, Type 2 to go out front door.");
if(firstDesision === "1"){
	secondDesision = prompt("You walk up stairs and see a shadow race to an open room, your camera picks up movement and you document what you saw by speaking into the headset. Your options are, The open door room, The room with a closed door or take evidence and leave. Type 1 for open room. Type 2 for closed room. Type 3 for Take evidence and leave.");
	if(secondDesision === "1"){//this is for the good ending
		thirdDesision = prompt("You walk in to the room with the open door following the shadow as if it were guiding you. You discover a handwriten diary on top of a night stand. You here a faint voice tell you Thank you. your camera starts acting strange and headset starts making a weird noise. You feel as if the spirit made some sort of contace with you. Your options are Go home with what you have found, or check the room with the closed door....Type 1 for room with closed door or Type 2 for go home with what you have found.");
		if(thirdDesision)
	}else if(secondDesision === "2"){//this is for the bad ending
		
	}else if(secondDesision === "3"){//this is for the moderate ending
		
	}
}

