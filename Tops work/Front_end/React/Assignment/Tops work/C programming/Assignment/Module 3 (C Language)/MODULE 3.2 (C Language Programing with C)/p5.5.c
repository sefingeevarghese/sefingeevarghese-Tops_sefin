#include <stdio.h>
int main() 
{
    int numbers[10];
    int sum_even = 0;

    printf("Enter 10 numbers:\n");
    for (int i = 0; i < 10; i++) 
	{
        printf("Number %d: ", i + 1);
        scanf("%d", &numbers[i]);
    }

    for (int i = 0; i < 10; i++) 
	{
        if (numbers[i] % 2 == 0) 
		{
            sum_even += numbers[i];
        }
    }

    printf("Sum of even numbers: %d\n", sum_even);

    return 0;
}

