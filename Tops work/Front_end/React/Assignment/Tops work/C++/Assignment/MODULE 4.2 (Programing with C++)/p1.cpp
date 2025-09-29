#include <iostream>
using namespace std;
class Calculator {  // Class definition
public:
    add(int a, int b) {  // Method for addition
        return a + b;
    }
    
    subtract(int a, int b) {  // Method for subtraction
        return a - b;
    }
    
    multiply(int a, int b) {  // Method for multiplication
        return a * b;
    }
    
    divide(int a, int b) {   // Method for division
        if (b != 0) {
            return (double)a / b;
        } else {
            cout << "Error: Division by zero!" << endl;
            return 0;
        }
    }
};

main() {
    Calculator calc;  // Creating an object of Calculator class
    int choice, num1, num2;

    cout << "Simple Calculator" << endl;
    cout << "1. Add\n2. Subtract\n3. Multiply\n4. Divide"<<endl;
    cout << "Enter your choice (1-4): "<<endl;
    cin >> choice;

    cout << "Enter two numbers: "<<endl;
    cin >> num1 >> num2;

    switch (choice) {
        case 1:
            cout << "Result: " << calc.add(num1, num2) << endl;
            break;
        case 2:
            cout << "Result: " << calc.subtract(num1, num2) << endl;
            break;
        case 3:
            cout << "Result: " << calc.multiply(num1, num2) << endl;
            break;
        case 4:
            cout << "Result: " << calc.divide(num1, num2) << endl;
            break;
        default:
            cout << "Invalid choice!" << endl;
    }

    return 0;
}

