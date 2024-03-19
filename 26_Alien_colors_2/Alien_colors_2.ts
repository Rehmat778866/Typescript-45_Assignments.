import { Console } from "console";


// Alien colors #2: choose a color for an alien as you did in Exercise 25
let alienColors: string = "green";

// write an if_else Chaain.
// If the alien's color is green 
// print a statement that the player just earned 5 points for shooting the alien.
if(alienColors === "green"){
    console.log("Playerjust earned 5 points for shooting the alien.");
}else{
    console.log("player just earned 10 points.")
}
// If the alien's color isn't green, print a statement that the player just earned 10 points.
alienColors ="Yellow"

if(alienColors === "green"){
    console.log("Playerjust earned 5 points for shooting the alien.");
}else{
    console.log("player just earned 10 points.")
}

// Write one version if this program that runs the if block and another that runs the else block.