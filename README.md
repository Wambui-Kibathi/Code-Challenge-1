# Code-Challenge-1
1. Chai Bora Ingredient Calculator, 
2. Boda Fare Calculator
3. Mobile Money Estimator 

# Chai Bora Ingredient Calculator

## Description

A simple JavaScript project that calculates the ingredients needed to make a specific number of cups of Kenyan Chai, based on a standard recipe.  It uses basic JavaScript concepts like functions, user input, and console output to guide users through determining how much water, milk, tea leaves, and sugar they’ll need.

## Project Setup
### Files Needed

- `index.html` - Loads the script in a browser.
- `chai.js` - Contains the JavaScript logic. 

## How to Use

**Fork and Clone the repository:**
-Fork the original repository by clicking the **Fork** button(top right) to create your copy of the repo.
-Then clone it to your machine:
In terminal:
git clone https://github.com/Wambui-Kibathi/Code-Challenge-1.git

**Navigate to the chaiCalculator Folder**
In Terminal:
(cd Code-Challenge-1/chaiCalculator)
-Open it on vs code

## What Happens within the Code:
1. Prompts the user to enter the number of chai cups they want to make (e.g., using prompt()). Remember to convert the input to a number.
2. Takes the numberOfCups (as a number) as an argument.
3. Calculates the required amount for each ingredient (water, milk, tea leaves, sugar) based on the numberOfCups.
4. Prints the results to the console in a clear, readable format.

**Example Interaction (for an input of 3 cups):**
-Open the browser **Console**(Right-click > Inspect > Console) to view the output.

User is prompted: Karibu! How many cups of Chai Bora would you like to make?
User enters: 3
Console Output:
To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!

# Boda Fare Calculator

## Description

A simple JavaScript project that calculates how much users will pay for a motorbike ride (commonly known as a **boda boda** in East Africa). This calculator determines the fare based on distance traveled and rate per kilometer.

## Project Setup
### Files Needed

- `index.html` - Loads the script in a browser.
- `fare.js` - Contains the JavaScript logic. 

## How to Use

**Fork and Clone the repository:**
(Skip this step if you have already done this from the previous lab)
-Fork the original repository by clicking the **Fork** button(top right) to create your copy of the repo.
-Then clone it to your machine:
In terminal:
git clone https://github.com/Wambui-Kibathi/Code-Challenge-1.git

**Navigate to the chaiCalculator Folder**
In Terminal:
(cd Code-Challenge-1/chaiCalculator)
-Open it on vs code

## What Happens within the Code:
1. Prompts the user to enter the distance of their trip in kilometers. Convert this input to a number.
2. Takes the distanceInKm (as a number) as an argument.
3. Calculates the total estimated fare using the formula: totalFare = baseFare + (distanceInKm * chargePerKm)
4. Prints the result to the console in a user-friendly format

**Example Interaction (for an input of 3 cups):**
-Open the browser **Console**(Right-click > Inspect > Console) to view the output.

User is prompted: Unafika wapi Mkubwa? Kilometer ngapi?:
User enters: 5
Console Output:
Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!

# Mobile Money Estimator

## Description

The Mobile Money Fee Estimator is a JavaScript project that calculates the transaction fee for sending money via mobile platforms like M-Pesa. It allows users to input the amount they wish to send and returns the estimated service fee. This project demonstrates conditional logic, user input handling, and real-world problem solving with JavaScript.

## Project Setup
### Files Needed

- `index.html` - Loads the script in a browser.
- `fee.js` - Contains the JavaScript logic. 

## How to Use

**Fork and Clone the repository:**
(Skip this step if you have already done this from the previous lab)
-Fork the original repository by clicking the **Fork** button(top right) to create your copy of the repo.
-Then clone it to your machine:
In terminal:
git clone https://github.com/Wambui-Kibathi/Code-Challenge-1.git

**Navigate to the chaiCalculator Folder**
In Terminal:
(cd Code-Challenge-1/chaiCalculator)
-Open it on vs code

## What Happens within the Code:
1. Prompts the user to enter the amount of money they wish to send. Convert this input to a number.
2. Takes the amountToSend (as a number) as an argument.
3. Calculates the transaction fee based on the 1.5% rule, ensuring it adheres to the minimum (KES 10) and maximum (KES 70) fee limits.
Hint: You'll likely need conditional logic (if-else if-else) or Math.min() and Math.max().
4. Calculates the total amount that will be debited (amount to send + transaction fee).
5. Prints the results to the console

**Example Interaction (for an input of 3 cups):**
-Open the browser **Console**(Right-click > Inspect > Console) to view the output.

User is prompted: Unatuma Ngapi? (KES):
User enters 500

(1.5% of 500 = 7.5. Fee becomes KES 10 due to minimum.)
Console Output:
Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510

Send Money Securely!
(Try it out yourself with different amounts such as 1000, 2000 and 10,000)


## Author & License
Author: Wambui Kibathi
License: MIT License


