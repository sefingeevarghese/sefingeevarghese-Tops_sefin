#include <iostream>
using namespace std;
class Swap {
public:
    int a, b;
    
    // Constructor to initialize the numbers
    Swap(int x, int y) : a(x), b(y) {}

    // Friend function declaration
    friend swapnumbers(Swap& sh);

    // Function to display the numbers
     display() const {
        cout << "a: " << a << ", b: " << b << endl;
    }
};

// Friend function definition to swap the numbers using addition and subtraction
  swapnumbers(Swap& sh) {
    sh.a = sh.a + sh.b;  // Step 1: a becomes a + b
    sh.b = sh.a - sh.b;  // Step 2: b becomes (a + b) - b = a
    sh.a = sh.a - sh.b;  // Step 3: a becomes (a + b) - a = b
}

main() {
    int x, y;
    cout << "Enter two numbers: ";
    cin >> x >> y;

    // Create an instance of SwapHelper with the input numbers
    Swap sh(x, y);

    // Display the numbers before swapping
    cout << "Before swapping: ";
    sh.display();

    // Swap the numbers using the friend function
    swapnumbers(sh);

    // Display the numbers after swapping
    cout << "After swapping: ";
    sh.display();

    return 0;
}

