#include<stdio.h>
main()
{
	int i,j,k;
	
	for(i=1;i<=5;i++) //row
	{
		for(k=1;k<=5-i
		;k++) //space
		{
			printf(" ");
		}
		for(j=1;j<=i;j++) //column
		{
			printf(" *");
		}
		printf("\n");
	}
}
