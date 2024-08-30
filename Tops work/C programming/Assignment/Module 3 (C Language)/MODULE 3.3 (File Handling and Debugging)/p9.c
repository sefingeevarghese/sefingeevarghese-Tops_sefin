#include <stdio.h>
struct Employee  // Define the structure for an employee
{
    int empno;
    char empname[100];
    char address[200];
    int age;
};


void printEmployee(struct Employee emp)   // Function to print employee details
{
    printf("Employee Number: %d\n", emp.empno);
    printf("Employee Name: %s\n", emp.empname);
    printf("Address: %s\n", emp.address);
    printf("Age: %d\n", emp.age);
}

int main() 
{
    struct Employee emp;   // Input employee details
	printf("Enter employee number: ");
    scanf("%d", &emp.empno);
    getchar();   // Consume newline character left by scanf

    printf("Enter employee name: ");
    fgets(emp.empname, sizeof(emp.empname), stdin);
    size_t length = strlen(emp.empname);  // Remove newline character if fgets reads it
    if (length > 0 && emp.empname[length - 1] == '\n') 
	{
        emp.empname[length - 1] = '\0';
    }

    printf("Enter address: ");
    fgets(emp.address, sizeof(emp.address), stdin);
    length = strlen(emp.address);     // Remove newline character if fgets reads it
    if (length > 0 && emp.address[length - 1] == '\n') 
	{
        emp.address[length - 1] = '\0';
    }

    printf("Enter age: ");
    scanf("%d", &emp.age);
    printf("\nEmployee Details:\n");  // Display employee details
    printEmployee(emp);

    return 0;
}

