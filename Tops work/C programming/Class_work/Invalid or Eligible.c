#include<stdio.h>
int main()
{
	int n;
	
	printf("Enter Age : ");
	scanf("%d",&n);
	
	if(n>100)
	{
		printf("Invalide Age!!");
		
	}
	
	else if(n>=18)
	{
		printf("Eligible!!");
	}
	
	else
	{
		printf("Not Eligible!!");
	}
}


