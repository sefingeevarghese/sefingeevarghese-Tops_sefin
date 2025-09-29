#include <stdio.h>
int main() 
{
    int num, max_digit = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    // If the number is negative, make it positive for digit comparison
    if (num < 0) 
	{
        num = -num;
    }

    while (num != 0) 
	{
        int digit = num % 10; // Extract the last digit
        if (digit > max_digit) 
		{
            max_digit = digit; // Update max_digit if the current digit is greater
            
        }
        num /= 10; // Remove the last digit from num
    }

    printf("Max digit is: %d\n", max_digit);

    return 0;
}

