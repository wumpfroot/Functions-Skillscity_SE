//basic function tha logs Bye! to the console
function sayBye() {
	console.log("Bye!");
}

sayBye();

//function that adds to numbers passed as parameters (a, b)
function add(a, b) {
	return a + b;
}
add(2, 5);

//shorter way of declaring a function, using an arrow function
let addShort = (a, b) => a + b;

let result = addShort(5, 15);
console.log(result);

//arrow function that asks two numbers, then multiplies them
let multiply = () => {
	num1 = parseInt(prompt("Input a number"));
	num2 = parseInt(prompt("Input a second number"));

	console.log(`Two numbers: ${num1} multiplied by ${num2} equals ${num1 * num2}`);
};

multiply();
