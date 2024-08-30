#include <stdio.h>
struct Employee  // Define a structure 
{
    int empno;
    char empname[100];
    char address[200];
    int age;
};

union Data // Define a union
{
    int empno;
    char empname[100];
    char address[200];
    int age;
};

int main() 
{
    struct Employee emp;       // Declare a structure variable
    union Data data;               // Declare a union variable
    printf("Structure:\n");     // Input and display for structure
    printf("Enter employee number: ");
    scanf("%d", &emp.empno);
    getchar();    // Consume newline character left by scanf
    
	printf("Enter employee name: ");
    fgets(emp.empname, sizeof(emp.empname), stdin);
    size_t length = strlen(emp.empname);
    if (length > 0 && emp.empname[length - 1] == '\n') 
	{
        emp.empname[length - 1] = '\0';
    }

    printf("Enter address: ");
    fgets(emp.address, sizeof(emp.address), stdin);
    length = strlen(emp.address);
    if (length > 0 && emp.address[length - 1] == '\n') 
	{
        emp.address[length - 1] = '\0';
    }
    
	printf("Enter age: ");
    scanf("%d", &emp.age);
    printf("\nStructure Employee Details:\n");
    printf("Employee Number: %d\n", emp.empno);
    printf("Employee Name: %s\n", emp.empname);
    printf("Address: %s\n", emp.address);
    printf("Age: %d\n", emp.age);
    printf("\nUnion:\n");      // Input and display for union
    
	printf("Enter employee number: ");
    scanf("%d", &data.empno);
    getchar();   // Consume newline character left by scanf
    
	printf("Enter employee name: ");
    fgets(data.empname, sizeof(data.empname), stdin);
    length = strlen(data.empname);
    if (length > 0 && data.empname[length - 1] == '\n') 
	{
        data.empname[length - 1] = '\0';
    }
    
	printf("Enter address: ");
    fgets(data.address, sizeof(data.address), stdin);
    length = strlen(data.address);
    if (length > 0 && data.address[length - 1] == '\n') 
	{
        data.address[length - 1] = '\0';
    }
    
	printf("Enter age: ");
    scanf("%d", &data.age);
    printf("\nUnion Data Details:\n");
    printf("Employee Number: %d\n", data.empno);
    printf("Employee Name: %s\n", data.empname);
    printf("Address: %s\n", data.address);
    printf("Age: %d\n", data.age);

    return 0;
}

