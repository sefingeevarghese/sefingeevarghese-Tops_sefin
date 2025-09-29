#include <stdio.h>
main() 
{
    int num;

    // Input the number
    printf("Enter a number: ");
    scanf("%d", &num);

    // Determine if the number is even or odd using the ternary operator
    (num % 2 == 0) ? printf("%d is even.\n", num) : printf("%d is odd.\n", num);

    return 0;
}

