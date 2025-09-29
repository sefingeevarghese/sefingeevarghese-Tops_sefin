#include<stdio.h>
int main()
{
	int n;
	
	printf("Enter Temperature :");
	scanf("%d",&n);
	
	if(n<10)
	{
	
			printf("Cold Weather");
    }   
    
	else if(n<20)
	{
			printf("Normal Weather");
	}
	else if(n>30)
	{
			printf("Hot Weather");
	}
	else
	{
			printf("Freeze Weather");
	}
	    	
}
