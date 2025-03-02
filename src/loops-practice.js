// Exercise 1:
// The for loop contains initialization(sets counter variable to 0 because arrays use zero-based indexing), condition(the loop should stop at the end of the list), and iteration(adds one to the counter as long as there are more items to list).
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < nums.length; i++) {
	const number = nums[i];
	console.log(number);
}

// Outside of the while loop is the initialization(sets counter variable to start at 1). Inside the while loop is the condition(checks if the counter is less than 11, when this becomes false the loop stops), iteration(adds one to the counter as long as the condition is true)
let count = 1;

while (count < 11) {
	console.log(`${count}`);
	count++;
}

// Exercise 2:
const favGames = [
	"Call of Duty: Black Ops 2",
	"Grand Theft Auto 5",
	"Baldur's Gate 3",
	"DOOM",
	"Borderlands 2",
];

for (let i = 0; i < favGames.length; i++) {
	console.log(`Item ${i + 1}: ${favGames[i]}`);
}
// I listed some of my favorite games (in no particular order) and used a for loop to list them out in the console. I used the i + 1 interpolation to make the list start at one and I used .length property to end at the last item on the list.
