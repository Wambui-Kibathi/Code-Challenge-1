function estimateTransactionFee(amountToSend) {
    const rawFee = amountToSend * 0.015;
    const fee = Math.max(10, Math.min(rawFee, 70));
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
