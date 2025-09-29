#include <stdio.h>
int main() 
{
    int num, reversed_num = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    while (num != 0) 
	{
        int digit = num % 10; // Extract the last digit
        reversed_num = reversed_num * 10 + digit; // Append digit to reversed_num
        num /= 10; // Remove the last digit from num
    }

    printf("Reversed number = %d\n", reversed_num);

    return 0;
}


