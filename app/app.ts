
/**
 * Generics allow us to create reusable components that can work with any data type.
 * Creating variable that don't need to be explicitly typed, but still maintain type safety.
 * In this example, the function `saySomething` takes a generic type parameter `T`, which allows it to accept any type of argument and return the same type.
 * When we call `saySomething<string>("Hello, TypeScript!")`, we specify that `T` should be of type `string`, ensuring that the function returns a string.
 */

function saySomething<T>(message: T): T {
    return message;
}

const result = saySomething<string>("Hello, TypeScript!");
console.log(result);

/**
 * In this example, we declare variables with explicit types. 
 * The variable `foo` is of type `string`, `isActive` is of type `boolean`, `age` is of type `number`, and `user` is an object with specific properties. 
 * We also create an array of users, demonstrating how to use TypeScript's type annotations to ensure type safety while still allowing for flexibility in our code.
*/
const foo = "foo"; // TypeScript infers the type of `foo` as `string` based on the assigned value. Implicitly typed variable with type inference.
const isActive: boolean = true;
const age: number = 30;
const user: { id: number, name: string } = { id: 1, name: "John Doe" };
const users: { id: number, name: string }[] = [user];
console.log(users);

/**
 * 
 * @param firstName 
 * @param lastName 
 * @returns 
 */

const getFullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
};

const fullName = getFullName("Jane", "Smith");
console.log(fullName);

// What is an interface in TypeScript and how is it used?

/**
 * An interface in TypeScript is a way to define the shape of an object. It specifies the properties and their types that an object must have. 
 * Interfaces are used to enforce type safety and to ensure that objects adhere to a specific structure. 
 * They can be implemented by classes or used to type-check objects directly.
 */

interface User {
    id: number;
    name: string;
    email: string;
}

const user1: User = {
    id: 1,
    name: "Alice",
    email: "test@example.com"
};

const getName = (user: User): string => {
    return user.name;
}

console.log(user1);

// What is a type alias in TypeScript and how does it differ from an interface?

/**
 * A type alias in TypeScript is a way to create a new name for a type. It can be used to define primitive types, union types, intersection types, tuples, and more. 
 * The main difference between a type alias and an interface is that interfaces can only describe the shape of an object, while type aliases can describe any type. 
 * Additionally, interfaces can be extended and implemented by classes, while type aliases cannot.
 */

type UserType = {
    id: number;
    name: string;
};

const newUser: UserType = {
    id: 2,
    name: "Bob"
};

type Foo = string;
const fooValue: Foo = "This is a string type alias.";

interface Employee {
    id: number;
    name: string;
}

interface Admin extends Employee {
    role: string;
    permissions: string[];
}
const employee: Admin = {
    id: 1,
    name: "Alice",
    role: "Administrator",
    permissions: ["read", "write", "execute"]
};

// Intersection types allow us to combine multiple types into one.

type Person = {
    name: string;
    age: number;
};

type EmployeeType = {
    id: number;
    department: string;
};

type EmployeePerson = Person & EmployeeType;

const employeePerson: EmployeePerson = {
    name: "Charlie",
    age: 28,
    id: 3,
    department: "Engineering"
};

/**
 * What is a union type in TypeScript and how is it used?
 * A union type in TypeScript is a type that can be one of several types. It is defined using the pipe (`|`) symbol. 
 * Union types allow us to specify that a variable can hold values of different types, providing flexibility while still maintaining type safety.
 */
type StringOrNumber = string | number;

const value1: StringOrNumber = "Hello";
const value2: StringOrNumber = 42;

// Type guards are used to narrow down the type of a variable within a specific block of code.

function isString(value: StringOrNumber): value is string {
    return typeof value === "string";
}

if (isString(value1)) {
    console.log(`Value1 is a string: ${value1}`);
} else {
    console.log(`Value1 is a number: ${value1}`);
}
