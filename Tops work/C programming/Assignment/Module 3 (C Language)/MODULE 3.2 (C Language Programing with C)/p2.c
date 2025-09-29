#include <stdio.h>
main() 
{
    int a, b;

    // Input the two numbers
    printf("Enter the first number (a): ");
    scanf("%d", &a);
    
    printf("Enter the second number (b): ");
    scanf("%d", &b);

    // Display the numbers before swapping
    printf("Before swapping: a = %d, b = %d\n", a, b);

    // Swap the numbers without using a third variable
    a = a + b; // Step 1: a now contains the sum of a and b
    b = a - b; // Step 2: b now contains the original value of a
    a = a - b; // Step 3: a now contains the original value of b

    // Display the numbers after swapping
    printf("After swapping: a = %d, b = %d\n", a, b);

    return 0;
}

