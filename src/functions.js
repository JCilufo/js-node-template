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

// Test 4: Calculate cart total with tax
const cart = {
	price: 100,
	tax: 0.07,
};
function calculateCartTotal(calculateCartTotal) {
	return 100 * 0.07 + 100;
}
console.log(calculateCartTotal(cart));

//Test 5: Format a full name
const nameInfo = {
	firstName: "John",
	lastName: "Doe",
};
function formatFullName(formatFullName) {
	return `${nameInfo.firstName} ${nameInfo.lastName}`;
}
console.log(formatFullName("John", "Doe"));

//Test 6: Create a game character description
const character = {
	name: "Hero",
	weapon: "Sword",
	level: 1,
};
function createCharacterDescription(createCharacterDescription) {
	return `Level ${character.level} ${character.name} is wielding a ${character.weapon}`;
}
console.log(createCharacterDescription(character));
