#include <stdio.h>
void addition();
void subtraction();
void multiplication();
void division();

int main() 
{
    int choice;

    while(1) 
	{
        printf("\nMenu:\n");  // Display the menu
        printf("1. Addition\n");
        printf("2. Subtraction\n");
        printf("3. Multiplication\n");
        printf("4. Division\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        
        switch (choice)  // Perform the selected operation 
		{
            case 1:
                addition();
                break;
            case 2:
                subtraction();
                break;
            case 3:
                multiplication();
                break;
            case 4:
                division();
                break;
            case 5:
                printf("Exiting the program.\n");
                return 0;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    }
}

void addition() 
{
    float a, b;
    printf("Enter two numbers to add: ");
    scanf("%f %f", &a, &b);
    printf("Result: %.2f\n", a + b);
}

void subtraction() 
{
    float a, b;
    printf("Enter two numbers to subtract (a - b): ");
    scanf("%f %f", &a, &b);
    printf("Result: %.2f\n", a - b);
}

void multiplication() 
{
    float a, b;
    printf("Enter two numbers to multiply: ");
    scanf("%f %f", &a, &b);
    printf("Result: %.2f\n", a * b);
}

void division() 
{
    float a, b;
    printf("Enter two numbers to divide (a / b): ");
    scanf("%f %f", &a, &b);
    if (b != 0) {
        printf("Result: %.2f\n", a / b);
    } else {
        printf("Error: Division by zero is not allowed.\n");
    }
}

