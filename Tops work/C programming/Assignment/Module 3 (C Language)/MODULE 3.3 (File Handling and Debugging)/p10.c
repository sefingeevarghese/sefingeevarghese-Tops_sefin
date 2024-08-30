#include <stdio.h>
#include <string.h>
struct Employee     // Define the structure for an employee
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
    struct Employee employees[5];
    for (int i = 0; i < 5; i++)   // Input details for 5 employees
	{
        printf("Enter details for employee %d:\n", i + 1);
        printf("Enter employee number: ");
        scanf("%d", &employees[i].empno);
        getchar();      // Consume newline character left by scanf

        printf("Enter employee name: ");
        fgets(employees[i].empname, sizeof(employees[i].empname), stdin);
        size_t length = strlen(employees[i].empname);   // Remove newline character if fgets reads it
        if (length > 0 && employees[i].empname[length - 1] == '\n') 
		{
            employees[i].empname[length - 1] = '\0';
        }

        printf("Enter address: ");
        fgets(employees[i].address, sizeof(employees[i].address), stdin);
        length = strlen(employees[i].address);   // Remove newline character if fgets reads it
        if (length > 0 && employees[i].address[length - 1] == '\n') 
		{
            employees[i].address[length - 1] = '\0';
        }

        printf("Enter age: ");
        scanf("%d", &employees[i].age);
        getchar();      // Consume newline character left by scanf

        printf("\n");
    }

    printf("Employee Details:\n");      // Display details of 5 employees
    for (int i = 0; i < 5; i++) 
	{
        printf("\nDetails of employee %d:\n", i + 1);
        printEmployee(employees[i]);
    }

    return 0;
}

