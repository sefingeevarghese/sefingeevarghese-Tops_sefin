#include<stdio.h>
int main() 
{
    char i, j,count=69;
    for (i=65; i<=69; i++) // rows
	{
        for (j=69;j<=i;j++) 	// columns
		{
            printf("%c", count);
            count++;
        }
        printf("\n");
    }
}

