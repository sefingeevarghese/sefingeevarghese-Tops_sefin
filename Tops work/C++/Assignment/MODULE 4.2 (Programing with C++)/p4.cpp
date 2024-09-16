#include <iostream>
using namespace std;
class Calculator {
public:
    int num1, num2;  // Two numbers for calculation

    // Constructor to initialize the numbers
    Calculator(int a, int b) {
        num1 = a;
        num2 = b;
    }

    // Function to perform addition
    add() {
        return num1 + num2;
    }

    // Function to perform subtraction
    subtract() {
        return num1 - num2;
    }

    // Function to perform multiplication
    multiply() {
        return num1 * num2;
    }

    // Function to perform division
    divide() {
        if (num2 != 0) {
            return num1 / num2;
        } else {
            cout << "Error: Division by zero!" << endl;
            return 0;
        }
    }
};

main() {
    int  a, b;
    
    // Input two numbers from the user
    cout << "Enter two numbers: ";
    cin >> a >> b;

    // Create an object of Calculator and initialize it with the input numbers
    Calculator calc(a, b);

    // Perform operations and display results
    cout << "Addition: " << calc.add() << endl;
    cout << "Subtraction: " << calc.subtract() << endl;
    cout << "Multiplication: " << calc.multiply() << endl;
    cout << "Division: " << calc.divide() << endl;

    return 0;
}

