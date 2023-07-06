// function which takes in speed of car
function speedDetector(speed) {
  //Define the speed limit and number of km per demerit point.
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    //if speed within limit , display ok.
    if (speed <= speedLimit) {
      console.log("Ok");
      return; 
    }
  //calculate number points based on speed 
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  // display lincense suspended if speed > 12 else display number of demerit point
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }

  // call diferent function with defferent speed to test the program.
speedDetector(80); 
speedDetector(44); 
speedDetector(150); 

//OUTPUT
//Points: 2
//Ok
//License suspended