#include <iostream>
using namespace std;
inline multiply(int a, int b) {  // Inline function to multiply two numbers
    return a * b;
}
inline cubic(int x) {  // Inline function to find the cubic value of a number
    return x * x * x;
}

main() {
    int num1, num2, num3;

    // Input for multiplication
    cout << "Enter two numbers to multiply: ";
    cin >> num1 >> num2;

    // Calculating multiplication using inline function
    int multiplicationResult = multiply(num1, num2);
    cout << "Multiplication of " << num1 << " and " << num2 << " is: " << multiplicationResult << endl;

    // Input for cubic calculation
    cout << "Enter a number to find its cubic value: ";
    cin >> num3;

    // Calculating cubic value using inline function
    int cubicResult = cubic(num3);
    cout << "Cubic value of " << num3 << " is: " << cubicResult << endl;

    return 0;
}

