#include <iostream>
using namespace std;
class Student {   // Base class

public:
    int roll_number;
    
    // Function to input student roll number
     setRollNumber(int roll) {
        roll_number = roll;
    }

    // Function to display student roll number
     displayRollNumber() const {
        cout << "Roll Number: " << roll_number << endl;
    }
};

// Derived class from Student
class Test : public Student {
public:
    float marks1, marks2;
    
    // Function to input marks of two subjects
     setMarks(float m1, float m2) {
        marks1 = m1;
        marks2 = m2;
    }

    // Function to display marks of two subjects
      displayMarks() const {
        cout << "Marks in Subject 1: " << marks1 << endl;
        cout << "Marks in Subject 2: " << marks2 << endl;
    }
};

// Derived class from Test
class Result : public Test {
public:
    float total_marks;

    // Function to calculate total marks
     calculateTotal() {
        total_marks = marks1 + marks2;
    }

    // Function to display result details
     displayResult() {
        displayRollNumber(); // Display roll number from Student class
        displayMarks();      // Display marks from Test class
        cout << "Total Marks: " << total_marks << endl;
    }
};

main() {
    Result studentResult;
    int roll;
    float m1, m2;

    // Input roll number and marks
    cout << "Enter roll number of student: ";
    cin >> roll;
    cout << "Enter marks obtained in Subject 1: ";
    cin >> m1;
    cout << "Enter marks obtained in Subject 2: ";
    cin >> m2;

    // Set the roll number and marks
    studentResult.setRollNumber(roll);
    studentResult.setMarks(m1, m2);

    // Calculate total marks and display the result
    studentResult.calculateTotal();
    cout << "\nStudent Result:" << endl;
    studentResult.displayResult();

    return 0;
}

