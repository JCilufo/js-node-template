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
