// roll a dice we do 4 times
function roll() {
  return Math.floor((Math.random() * 6) + 1);
}   
      
/* 	
	At the beginning of the game, the player rolls a pair of dice 
	and computes the total. 
	1. calculate dice1
	2. calculate dice2
	3. calculate total
	4. display in console "Rolling dice: dice1 dice2 total
*/ 
var dice1 = roll();
var dice2 = roll();
var total = dice1 + dice2; 
console.log("Rolling dice: " +
	  dice1 + " + " + dice2 + " = " + total);
//  If the total is 2, 3, or 12 (called "craps"), the player loses. 
// 	If the total is 7 or 11 (called a "natural"), the player wins. 
if (total == 7 || total == 11){
  console.log("That's a natural. You win!");
} else if (total == 3 || total == 2 || total == 12) {
  console.log("That's craps. You Lose.");
} else {
//	If the total is any other number, that number becomes the "point". 
  var point = total;
  console.log("Your point is " + point);
/*
	From here, the player keeps rolling the dice until 
	(a) the point comes up again, in which case the player wins, or 
	(b) a 7 appears, in which case the player loses. 
	The numbers 2,3,11, and 12 no longer have special 
	significance after the first rolls.
*/	  
  while (true) {
  /*
	1. calculate dice1
	2. calculate dice2
	3. calculate total
	4. display in console "Rolling dice: dice1 dice2 total
	*/
	dice1 = roll();
	dice2 = roll();
	total = dice1 + dice2; 
	console.log("Rolling dice: " +
	  dice1 + " + " + dice2 + " = " + total);
// if total == point, announce winner and break out of loop	  
	if (total == point) {
	  console.log("You made your point. You win.");
	  break;
// else if total is 7, announce loser and break out of loop
	} else if (total == 7) {
	  console.log("That's a 7. You lose.");
	  break;
	}
// otherwise, keep keep rolling
  }    
}  
