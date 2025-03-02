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
