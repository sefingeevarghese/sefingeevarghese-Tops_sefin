#include<stdio.h>
struct Mystructure
{
	int a[4];
	int i;
}s1;

int main()
{
	for(s1.i=0;s1.i<4;s1.i++)
	{
		printf("Enter Element : ");
		scanf("%d",&s1.a[s1.i]);
    }
	
	for(s1.i=0;s1.i<4;s1.i++)
	{
		printf("\nElements are : %d",s1.a[s1.i]);
    }
	  
}
