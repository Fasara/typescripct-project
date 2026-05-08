"use strict";
/**
 * Generics allow us to create reusable components that can work with any data type.
 * Creating variable that don't need to be explicitly typed, but still maintain type safety.
 * In this example, the function `saySomething` takes a generic type parameter `T`, which allows it to accept any type of argument and return the same type.
 * When we call `saySomething<string>("Hello, TypeScript!")`, we specify that `T` should be of type `string`, ensuring that the function returns a string.
 */
function saySomething(message) {
    return message;
}
var result = saySomething("Hello, TypeScript!");
console.log(result);
/**
 * In this example, we declare variables with explicit types.
 * The variable `foo` is of type `string`, `isActive` is of type `boolean`, `age` is of type `number`, and `user` is an object with specific properties.
 * We also create an array of users, demonstrating how to use TypeScript's type annotations to ensure type safety while still allowing for flexibility in our code.
*/
var foo = "foo"; // TypeScript infers the type of `foo` as `string` based on the assigned value. Implicitly typed variable with type inference.
var isActive = true;
var age = 30;
var user = { id: 1, name: "John Doe" };
var users = [user];
console.log(users);
/**
 *
 * @param firstName
 * @param lastName
 * @returns
 */
var getFullName = function (firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
};
var fullName = getFullName("Jane", "Smith");
console.log(fullName);
var user1 = {
    id: 1,
    name: "Alice",
    email: "test@example.com"
};
var getName = function (user) {
    return user.name;
};
console.log(user1);
var newUser = {
    id: 2,
    name: "Bob"
};
var fooValue = "This is a string type alias.";
var employee = {
    id: 1,
    name: "Alice",
    role: "Administrator",
    permissions: ["read", "write", "execute"]
};
var employeePerson = {
    name: "Charlie",
    age: 28,
    id: 3,
    department: "Engineering"
};
var value1 = "Hello";
var value2 = 42;
// Type guards are used to narrow down the type of a variable within a specific block of code.
function isString(value) {
    return typeof value === "string";
}
if (isString(value1)) {
    console.log("Value1 is a string: ".concat(value1));
}
else {
    console.log("Value1 is a number: ".concat(value1));
}
