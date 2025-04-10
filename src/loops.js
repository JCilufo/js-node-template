// For loops
const players = [
	{ name: "Doomguy", kills: 25, deaths: 5 },
	{ name: "Slayer", kills: 18, deaths: 7 },
	{ name: "Marine", kills: 12, deaths: 12 },
];

for (let i = 0; i < players.length; i++) {
	const currentPlayer = players[i];
	const killDeathRatio = (
		currentPlayer.kills / Math.max(1, currentPlayer.deaths)
	).toFixed(2);

	console.log(
		`${currentPlayer.name}: ${currentPlayer.kills} kills, ${currentPlayer.deaths} deaths, K/D ratio: ${killDeathRatio}`,
	);
}

// While loops
let playerHealth = 100;
let roundCount = 0;

while (playerHealth > 0) {
	const damage = Math.floor(Math.random() * 21) + 5;
	playerHealth -= damage;

	roundCount++;
	console.log(
		`Round ${roundCount}: Player took ${damage} damage. Health remaining: ${Math.max(0, playerHealth)}`,
	);
}

console.log(`Game over! Player survived ${roundCount} rounds.`);
