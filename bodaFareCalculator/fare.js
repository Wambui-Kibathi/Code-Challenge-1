const prompt = require('prompt-sync')();

function calculateBodaFare(distanceInKm) {
    const baseFare = 50; 
    const chargePerKm = 15; 
  
    const travelFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + travelFare;
  
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${travelFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log(`Panda Pikipiki!`);

} 
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = Number(userInput);
  
if (!isNaN(distance) && distance >= 0) {
    calculateBodaFare(distance);
} else {
    console.log("Please enter a valid kilometer number.");
}
  