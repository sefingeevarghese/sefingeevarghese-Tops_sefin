#include <iostream>
using namespace std;

// Template function to swap two values of any type
template <typename T>
void swapValues(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

main() {
    int x = 10, y = 20;
    double m = 1.5, n = 3.7;
    char c1 = 'A', c2 = 'B';

    std::cout << "Before swapping:" << std::endl;
    std::cout << "x = " << x << ", y = " << y << std::endl;
    std::cout << "m = " << m << ", n = " << n << std::endl;
    std::cout << "c1 = " << c1 << ", c2 = " << c2 << std::endl;

    // Swap the integer values
    swapValues(x, y);
    // Swap the double values
    swapValues(m, n);
    // Swap the char values
    swapValues(c1, c2);

    std::cout << "\nAfter swapping:" << std::endl;
    std::cout << "x = " << x << ", y = " << y << std::endl;
    std::cout << "m = " << m << ", n = " << n << std::endl;
    std::cout << "c1 = " << c1 << ", c2 = " << c2 << std::endl;

    return 0;
}

