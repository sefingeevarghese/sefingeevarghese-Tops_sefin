#include<stdio.h>
int main()
{
	int a[5],b[5];
    int i;
	
	for(i=0;i<5;i++)
	{
		printf("Enter Elements : ");
		scanf("%d",&a[i]);
	}
	
	for(i=0;i<5;i++)
	{
	    printf("\nElememts are :%d",a[i]);	
	}
	
	printf("\n*******************************\n");
	
	for(i=0;i<5;i++)
	{ 
	  printf("Enter Elements : ");
	  scanf("%d",&b[i]);
	}
	
	for(i=0;i<5;i++);
	{
		printf("\nElements are :%d",b[i]);
	}
		
	printf("\n*********************************\n");
	
	for(i=0;i<5;i++);
	{
	   printf("\nAddition :%d",a[i]+b[i]);	
	}	
}
