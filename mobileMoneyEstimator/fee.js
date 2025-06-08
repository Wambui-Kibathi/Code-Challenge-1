function estimateTransactionFee(amountToSend) {
    const rawFee = amountToSend * 0.015;

    let fee;

    if (rawFee < 10) {
        fee = 10;
    } else if (rawFee > 70) {
        fee = 70;
    } else {
        fee = rawFee;
    }
    
    const total = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculate Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}`);
    console.log("\nSend Money Securely!");
}

const input = prompt("Unatuma Ngapi? (KES):");
const amount = Number(input);

if (!isNaN(amount) && amount > 0) {
    estimateTransactionFee(amount);
} else{
    console.log("Enter a valid amount.");
}
