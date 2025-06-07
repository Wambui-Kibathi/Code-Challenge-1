function calculateChaiIngredients(numberOfCups) {
    const water = numberOfCups * 200;
    const milk = numberOfCups * 50;
    const teaLeaves = numberOfCups * 1;
    const sugar = numberOfCups * 2;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon${teaLeaves > 1 ? 's' : ''}`);
    console.log(`Sugar (Sukari): ${sugar} teaspoon${sugar > 1 ? 's' : ''}`);
    console.log("\nEnjoy your Chai Bora!")
}

const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);

if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.")
} else{
    calculateChaiIngredients(numberOfCups);
}