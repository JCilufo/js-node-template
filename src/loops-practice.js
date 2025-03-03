// Exercise 1:

// Array of numbers from 1 to 10.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// The for loop is used to iterate through the array of numbers and print them out in the console.
for (let i = 0; i < nums.length; i++) {
	const number = nums[i];
	console.log(number);
}

let count = 1;

// The while loop is used to iterate through the numbers from 1 to 10 and print them out in the console.
while (count < 11) {
	console.log(`${count}`);
	count++;
}

// Exercise 2:

// Array of strings containing favorite games.
const favGames = [
	"Call of Duty: Black Ops 2",
	"Grand Theft Auto 5",
	"Baldur's Gate 3",
	"DOOM",
	"Borderlands 2",
];

// For loop to iterate through the array of favorite games and print them out in the console.
for (let i = 0; i < favGames.length; i++) {
	console.log(`Item ${i + 1}: ${favGames[i]}`);
}

// Exercise 3:

// Array of objects containing player names, kills, and deaths.
const players = [
	{ name: "Michael", kills: 17, deaths: 10 },
	{ name: "Caleb", kills: 20, deaths: 8 },
	{ name: "Greg", kills: 9, deaths: 13 },
];

// Let bestPlayer to empty and bestKDRatio to 0 so these values can be changed later.
let bestPlayer = null;
let bestKDRatio = 0;

// For loop to iterate through the array of players and calculate the kill/death ratio for each player. Used Math.max to prevent division by zero. Used toFixed to round the ratio to two decimal places.
for (let i = 0; i < players.length; i++) {
	const currentPlayer = players[i];
	const killDeathRatio = (
		currentPlayer.kills / Math.max(1, currentPlayer.deaths)
	).toFixed(2);

	// If statement to compare the current player's ratio to the best ratio and update the best player and ratio if the current player has a higher ratio.
	if (killDeathRatio > bestKDRatio) {
		bestKDRatio = killDeathRatio;
		bestPlayer = currentPlayer;
	}

	// Console.log to print out the player's name, kills, deaths, and ratio.
	console.log(
		`${currentPlayer.name}: ${currentPlayer.kills} kills, ${currentPlayer.deaths} deaths, K/D ratio: ${killDeathRatio}`,
	);
}

// Console.log to print out the best player and their ratio.
if (bestPlayer) {
	console.log(`Best Player: ${bestPlayer.name}, K/D ratio: ${bestKDRatio}`);
}

// Bonus Challenge:
let playerHealth = 100;
let roundCount = 0;
let totalDamageTaken = 0;
let totalHealed = 0;
let totalDodged = 0;

// While loop that runs as long as the player's health is greater than 0. Used Math.random to generate random numbers for damage, healing, and dodging.
while (playerHealth > 0) {
	const damage = Math.floor(Math.random() * 21) + 5;
	const healChance = Math.random();
	const dodgeChance = Math.random();

	// If statement to check if the player dodged the attack else decrement PlayerHealth and increment totalDamageTaken. Console.log to print out the roundCount, damage taken, and playerHealth.
	if (dodgeChance < 0.2) {
		console.log(`Round ${roundCount + 1}: Player dodged the attack!`);
		totalDodged++;
	} else {
		playerHealth -= damage;
		totalDamageTaken += damage;
		console.log(
			`Round ${roundCount + 1}: Player took ${damage} damage. Health remaining: ${Math.max(0, playerHealth)}`,
		);
	}

	// If statement to check if the player healed else increment playerHealth and totalHealed. Console.log to print out the roundCount, healAmount, and playerHealth.
	if (healChance < 0.1 && playerHealth > 0) {
		const healAmount = Math.floor(Math.random() * 16) + 5;
		playerHealth += healAmount;
		totalHealed += healAmount;
		console.log(
			`Round ${roundCount + 1}: Player healed for ${healAmount}. Health remaining: ${playerHealth}`,
		);
	}

	roundCount++;
}

// Console.log to print out the player stats after the game is over.
console.log(`Game over! Player survived ${roundCount} rounds.`);
console.log(`Total damage taken: ${totalDamageTaken}`);
console.log(`Health recovered: ${totalHealed}`);
console.log(`Total attacks dodged: ${totalDodged}`);
