#include <iostream>
using namespace std;
class Matrix {
public:
    int size;      // Size of the 1D matrix
    int* elements; // Pointer to dynamically allocate array for elements
    
    // Constructor to initialize matrix with a given size
    Matrix(int s) : size(s) {
        elements = new int[size];
        for (int i = 0; i < size; i++) {
            elements[i] = 0;  // Initialize all elements to 0
        }
    }

    // Copy Constructor
    Matrix(const Matrix& other) : size(other.size) {
        elements = new int[size];
        for (int i = 0; i < size; i++) {
            elements[i] = other.elements[i];  // Copy elements
        }
    }

    // Destructor to deallocate dynamic memory
    ~Matrix() {
        delete[] elements;
    }

    // Function to input matrix elements
     inputElements() {
        cout << "Enter " << size << " elements for the matrix:" << endl;
        for (int i = 0; i < size; i++) {
            cin >> elements[i];
        }
    }

    // Overload + operator to add two matrices
    Matrix operator+(const Matrix& other) {
        if (size != other.size) {
            cout << "Error: Matrices must be of the same size to add!" << endl;
            return Matrix(0);  // Return an empty matrix in case of size mismatch
        }

        Matrix result(size);  // Create a new matrix for the result
        for (int i = 0; i < size; i++) {
            result.elements[i] = elements[i] + other.elements[i];
        }
        return result;  // Return the result matrix
    }

    // Function to display matrix elements
     display() const {
        for (int i = 0; i < size; i++) {
            cout << elements[i] << " ";
        }
        cout << endl;
    }
};

main() {
    int size;
    cout << "Enter the size of the matrices: ";
    cin >> size;

    // Create two matrices of given size
    Matrix matrix1(size);
    Matrix matrix2(size);

    // Input elements for the first matrix
    cout << "Matrix 1:" << endl;
    matrix1.inputElements();

    // Input elements for the second matrix
    cout << "Matrix 2:" << endl;
    matrix2.inputElements();

    // Add the two matrices using overloaded + operator
    Matrix result = matrix1 + matrix2;

    // Display the result
    cout << "Resultant Matrix after Addition:" << endl;
    result.display();

    return 0;
}

