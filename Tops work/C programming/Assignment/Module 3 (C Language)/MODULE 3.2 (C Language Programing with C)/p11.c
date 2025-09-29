#include <stdio.h>
int main() 
{
    int num, first_digit, last_digit, temp;

    printf("Enter a number: ");
    scanf("%d", &num);

    // Handle negative numbers
    temp = (num < 0) ? -num : num;

    // Extract the last digit
    last_digit = temp % 10;

    // Find the first digit
    while (temp >= 10) 
	{
        temp /= 10;
    }
    first_digit = temp;

    // Calculate the sum of the first and last digits
    int sum = first_digit + last_digit;

    // If the original number was negative, make the sum negative
    if (num < 0) 
	{
        sum = -sum;
    }

    printf("Summation of first and last digit is: %d\n", sum);

    return 0;
}

