// Test 1: Calculate order total
const order = {
	price: 10,
	quantity: 2,
};
function calculateTotal(order) {
	return 10 * 2;
}
console.log(calculateTotal(order));

// Test 2: Format a username
const username = {
	first: "John",
	last: "Doe",
};
function formatUsername(formatUsername) {
	return `${username.last}, ${username.first}`;
}
console.log(formatUsername("John", "Doe"));

// Test 3: Combine two strings with a space between
const strings = {
	firstString: "Hello",
	secondString: "World",
};
function combineStrings(combineStrings) {
	return `${strings.firstString} ${strings.secondString}`;
}
console.log(combineStrings("Hello", "World"));
