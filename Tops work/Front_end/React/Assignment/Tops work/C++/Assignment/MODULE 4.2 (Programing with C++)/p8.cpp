#include <iostream>
using namespace std;
class Maths{
public:
    // Addition overloaded functions
      add(int a, int b) {
        return a + b;
    }

       add(float a, float b) {
        return a + b;
    }

    // Subtraction overloaded functions
      subtract(int a, int b) {
        return a - b;
    }

      subtract(float a, float b) {
        return a - b;
    }

    // Multiplication overloaded functions
      multiply(int a, int b) {
        return a * b;
    }

      multiply(float a, float b) {
        return a * b;
    }

    // Division overloaded functions
      divide(int a, int b) {
        if (b != 0)
            return static_cast<float>(a) / b;
        else {
            cout << "Error: Division by zero!" << endl;
            return 0;
        }
    }

      divide(float a, float b) {
        if (b != 0.0f)
            return a / b;
        else {
            cout << "Error: Division by zero!" << endl;
            return 0;
        }
    }
};

main() {
    Maths math;
    int intNum1 = 15, intNum2 = 3;
    float floatNum1 = 15.5, floatNum2 = 3.2;

    // Integer operations
    cout << "Addition (int): " << math.add(intNum1, intNum2) << endl;
    cout << "Subtraction (int): " << math.subtract(intNum1, intNum2) << endl;
    cout << "Multiplication (int): " << math.multiply(intNum1, intNum2) << endl;
    cout << "Division (int): " << math.divide(intNum1, intNum2) << endl;

    // Float operations
    cout << "\nAddition (float): " << math.add(floatNum1, floatNum2) << endl;
    cout << "Subtraction (float): " << math.subtract(floatNum1, floatNum2) << endl;
    cout << "Multiplication (float): " << math.multiply(floatNum1, floatNum2) << endl;
    cout << "Division (float): " << math.divide(floatNum1, floatNum2) << endl;

    return 0;
}

