#include<stdio.h>
main()
{
	int a[5],b[5];
	int i;
	
	for(i=0;i<5;i++)
	{
		printf("Enter Element : ");
		scanf("%d",&a[i]);
	}
		for(i=0;i<5;i++)
	{
		printf("\nElements are : %d",a[i]);
	}
	printf("\n***********************************");
	for(i=0;i<5;i++)
	{
		printf("\nEnter Element : ");
		scanf("%d",&b[i]);
	}
	for(i=0;i<5;i++)
	{
		printf("\nElements are : %d",b[i]);
	}
    printf("\n***********************************");
	for(i=0;i<5;i++)
	{
		printf("\nAddition : %d",a[i]+b[i]);
	}
}
