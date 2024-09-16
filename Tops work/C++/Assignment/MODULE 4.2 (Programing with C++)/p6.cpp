#include <iostream>
#include <string>
using namespace std;
class Person {  // Base class
public:
    string name;
    int age;

    // Function to initialize data
       initializePerson(const string &n, int a) {
        name = n;
        age = a;
    }

    // Function to display person data
     displayPerson() const {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

// Derived class Student
class Student : public Person {
public:
    float percentage;

    // Function to initialize student data
     initializeStudent(const string &n, int a, float p) {
        initializePerson(n, a); // Initialize base class members
        percentage = p;
    }

    // Function to display student data
     displayStudent() const {
        displayPerson(); // Display base class members
        cout << "Percentage: " << percentage << "%" << endl;
    }
};

// Derived class Teacher
class Teacher : public Person {
public:
    float salary;
    
    // Function to initialize teacher data 
	initializeTeacher(const string &n, int a, float s) {
        initializePerson(n, a); // Initialize base class members
        salary = s;
    }
  
    // Function to display teacher data
    displayTeacher() const {
        displayPerson(); // Display base class members
        cout << "Salary: Rs" << salary << endl;
    }
};

main() {
    // Creating a Student object
    Student student;
    string studentName;
    int studentAge;
    float studentPercentage;

    cout << "Enter student name: ";
    getline(cin, studentName);
    cout << "Enter student age: ";
    cin >> studentAge;
    cout << "Enter student percentage: ";
    cin >> studentPercentage;

    student.initializeStudent(studentName, studentAge, studentPercentage);
    cout << "\nStudent Details:" << endl;
    student.displayStudent();

    // Creating a Teacher object
    Teacher teacher;
    string teacherName;
    int teacherAge;
    float teacherSalary;

    cin.ignore();  // Clear input buffer
    cout << "\nEnter teacher name: ";
    getline(cin, teacherName);
    cout << "Enter teacher age: ";
    cin >> teacherAge;
    cout << "Enter teacher salary: ";
    cin >> teacherSalary;

    teacher.initializeTeacher(teacherName, teacherAge, teacherSalary);
    cout << "\nTeacher Details:" << endl;
    teacher.displayTeacher();

    return 0;
}

