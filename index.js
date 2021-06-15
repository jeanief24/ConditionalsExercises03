let engineIndicatorLight = 'red blinking';
let fuelLevel = 21000;
let engineTemperature = 1200;
let commandOverride = true


/* 5) Implement the following checks using if/else if/else statements:

a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."

b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."

c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."

d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."

e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 

f) Otherwise, print "Fuel and engine status pending..." */

// Code 5a - 5f here:

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
  console.log ("ENGINE FAILURE IMMINENT!")
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
  console.log ("Check fuel level. Engines running hot.")
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
  console.log ("Full tank. Engines good.")
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
  console.log ("Fuel level above 50%.  Engines good.")
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
  console.log ("Fuel level above 25%. Engines good.")
} else {
  console.log ("Fuel and engine status pending...")
}

// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.

if (fuelLevel > 20000 && engineTemperature <= 2500) {
  console.log ("Full tank. Engines good.")
  commandOverride = false
} else {
  console.log ("Override launch")
  commandOverride = true
  }
  console.log ("Scrumb Mission")


//let launchReady = false;
//let crewReady = false;
//let fuelLevel = 17000;
//let crewStatus = true;
//let computerStatus = 'green';

//if (fuelLevel >= 20000) {
//   console.log('Fuel level cleared.');
//   launchReady = true;
//} else {
//   console.log('WARNING: Insufficient fuel!');
//   launchReady = false;
//}
//console.log("launchReady = ", launchReady);

//if (crewStatus && computerStatus === 'green'){
//   console.log('Crew & computer cleared.');
//   crewReady = true;
//} else {
//   console.log('WARNING: Crew or computer not ready!');
//   crewReady = false;
//}
//console.log("crewReady = ", crewReady);

/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */

