let marks = [80, 90, 70, 85, 95];

// Calculate average using reduce()
let average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

console.log(`Average Marks: ${average}`);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Filter even numbers using filter()
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);

let cart = {
  item: "Laptop",
  price: 45000,
  quantity: 2
};

// Calculate total bill
let totalBill = cart.price * cart.quantity;

console.log(`Item: ${cart.item}`);
console.log(`Price: ${cart.price}`);
console.log(`Quantity: ${cart.quantity}`);
console.log(`Total Bill: ${totalBill}`);

let movies = ["Avatar", "Inception", "Interstellar", "The Matrix"];

// Add one movie
movies.push("Oppenheimer");

// Remove last movie
movies.pop();

// Print final list using loop
console.log("Final Movie List:");
for (let i = 0; i < movies.length; i++) {
  console.log(`${i + 1}. ${movies[i]}`);
}
let user = { name: "Aman", age: 21, course: "JS" };

// Convert object to JSON
let jsonString = JSON.stringify(user);
console.log("Converted to JSON:");
console.log(jsonString);

// Convert back to object
let userObject = JSON.parse(jsonString);
console.log("\nConverted back to Object:");
console.log(userObject);

// Verify the object
console.log("\nUser Details:");
console.log(`Name: ${userObject.name}`);
console.log(`Age: ${userObject.age}`);
console.log(`Course: ${userObject.course}`);
