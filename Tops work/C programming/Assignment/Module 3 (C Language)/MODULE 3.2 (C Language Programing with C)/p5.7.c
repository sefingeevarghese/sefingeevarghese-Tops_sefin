#include <stdio.h>
int main() 
{
    int num;

    printf("Enter the number up to which you want the tables: ");
    scanf("%d", &num);

    for (int i = 1; i <= num; i++) 
	{
        printf("Multiplication table for %d:\n", i);
        for (int j = 1; j <= 10; j++) 
		{
            printf("%d x %d = %d\n", i, j, i * j);
        }
        printf("\n"); // New line for better readability between tables
    }

    return 0;
}

