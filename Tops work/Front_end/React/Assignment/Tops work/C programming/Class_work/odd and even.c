#include<stdio.h>
int main()
{
	int n;
	
	printf("Enter a number : ");
	scanf("%d",&n);
	
	if(n%2==0)
	{
		printf("%d is Even",n);
		
	}
	else if(n==0)
	{
	}
	
	else
	{
		printf("%d is Odd",n);
	}
}
