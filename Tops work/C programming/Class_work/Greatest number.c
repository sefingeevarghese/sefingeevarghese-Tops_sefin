#include<stdio.h>
int main()
{
	int n1,n2,n3;
	
	printf("Enter a number 1  :");
	scanf("%d",&n1);
	
	printf("Enter a number 2  :");
	scanf("%d",&n2);
	
	printf("Enter a number 3  :");
	scanf("%d",&n3);
	
	if(n1>n2)
	{
		if(n1>n3)
		{
			printf("%d is Greatest" ,n1);
		}
		
		else
		{
			printf("%d is Greatest" ,n3);
		}
    }
	else
	{
		if(n2>n3)
		{
			printf("%d is Greatest" ,n2);
		}
		
		else
		{
			printf("%d is Greatest" ,n3);
		}
	    	
	}	
}
