let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 19;
if(registeredEarly && runnerAge > 18){
  raceNumber += 1000;
}
if(!registeredEarly && runnerAge > 18){
  console.log(` You are going to run at 11:00, your race number is: ${raceNumber}.`);
}

else if(registeredEarly && runnerAge > 18){
  console.log(` You are going to run at 9:30, your race number is: ${raceNumber}.`);
}
else if(runnerAge < 18){
  console.log(`You are going to run at 12:30, and your race number is: ${raceNumber}.`);
}
else{
  console.log('go to the front desk!');
}
