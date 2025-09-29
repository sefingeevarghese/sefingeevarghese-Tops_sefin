#include<stdio.h>
int main() 
{
    int i, j,count=1;
    for (i=1; i<=5; i++) // rows
	{
        for (j=1;j<=i;j++) 	// columns
		{
            printf("%d", count);
            count++;
        }
        printf(" \n");
    }
}
