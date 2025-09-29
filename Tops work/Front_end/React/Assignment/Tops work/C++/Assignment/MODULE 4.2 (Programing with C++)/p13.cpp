#include <iostream>
using namespace std;
class Max{
public:
    int a, b;

    // Constructor to initialize the numbers
    Max(int x, int y) : a(x), b(y) {}

    // Friend function declaration
    friend findMax(Max& m);

    // Function to display the numbers
       display() const {
        cout << "a: " << a << ", b: " << b << endl;
    }
};

   // Friend function definition to find the maximum number
      findMax(Max& m) {
    // Using conditional statements instead of comparison operators
    if (m.a != m.b) {
        if (m.a > m.b) {
            return m.a;
        } else {
            return m.b;
        }
    } else {
        return m.a;  // Both numbers are equal, return either
    }
}

main() {
    int x, y;
    cout << "Enter two numbers: ";
    cin >> x >> y;

    // Create an instance of Compare with the input numbers
    Max m(x, y);

    // Display the numbers
    m.display();

    // Find and display the maximum number using the friend function
    cout << "The maximum number is: " << findMax(m) << endl;

    return 0;
}

