#include<stdio.h>
main()
{
	char a[5],b[5];
	int sum=0,sum1=0;
	
	int i,j;
	printf("Enter String 1  : ");
	gets(a);
	printf("Enter String 2  : ");
	gets(b);
	
	for(i=0;a[i]!='\0';i++)
	{
		sum=sum+a[i];
	}
	printf("\nSum of A string : %d",sum);
	
	
	for(j=0;b[j]!='\0';j++)
	{
		sum1=sum1+b[j];
	}
	printf("\nSum of B string : %d",sum1);
	
	printf("\nValue is : %d",strcmp(a,b));
}
