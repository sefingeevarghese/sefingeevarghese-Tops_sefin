#include <iostream>
#include <cstring> // For strlen() and strcpy()
using namespace std;
class Sefin {
public:
    char* str;  // Pointer to hold the dynamically allocated string
    int length; // Length of the string

    // Constructor to initialize a string
    Sefin(const char* s = "") {
        length = strlen(s);              // Calculate length of input string
        str = new char[length + 1];      // Allocate memory for the string
        strcpy(str, s);                  // Copy the input string to the str
    }

    // Copy Constructor for deep copy
    Sefin(const Sefin& other) {
        length = other.length;
        str = new char[length + 1];      // Allocate memory for the copy
        strcpy(str, other.str);          // Copy the string from the other object
    }

    // Destructor to deallocate memory
    ~Sefin() {
        delete[] str;
    }

    // Overload + operator to concatenate two strings
    Sefin operator+(const Sefin& other) {
        int newLength = length + other.length; // New length after concatenation
        char* newStr = new char[newLength + 1]; // Allocate memory for the new concatenated string
        
        strcpy(newStr, str);                   // Copy the first string
        strcat(newStr, other.str);             // Append the second string
        
        Sefin result(newStr);                 // Create a new String object with concatenated string
        delete[] newStr;                       // Free temporary memory
        return result;                         // Return the result
    }

    // Function to display the string
     display() const {
        cout << str << endl;
    }
};

main() {
    // Create two String objects
    Sefin str1("Hello, ");
    Sefin str2("World!");

    // Concatenate the two strings using overloaded + operator
    Sefin result = str1 + str2;

    // Display the result
    cout << "Concatenated String: ";
    result.display();

    return 0;
}

