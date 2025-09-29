#include <stdio.h>
int main() 
{
    int numbers[10];
    int odd_count = 0;

    printf("Enter 10 numbers:\n");
    for (int i = 0; i < 10; i++) 
	{
        printf("Number %d: ", i + 1);
        scanf("%d", &numbers[i]);
    }

    for (int i = 0; i < 10; i++) 
	{
        if (numbers[i] % 2 != 0) 
		{
            odd_count++;
        }
    }

    printf("Number of odd numbers: %d\n", odd_count);

    return 0;
}

