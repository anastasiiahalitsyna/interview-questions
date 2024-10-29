class Calculator {
    add(a, b) {
        return a + b;
    };

    multiply(a, b) {
        return a * b;
    };
}

const calculator = new Calculator();
const sum = calculator.add(3, 4);
console.log(sum);

const product = Calculator.multiply(3, 4);
console.log(product);