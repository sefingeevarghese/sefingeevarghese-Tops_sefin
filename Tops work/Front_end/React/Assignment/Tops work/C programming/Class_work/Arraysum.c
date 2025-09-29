#include<stdio.h>
main()
{
	int a[5],sum=0;
	int i;
	
	for(i=0;i<5;i++)
	{
		printf("Enter Element : ");
		scanf("%d",&a[i]);
	}
	for(i=0;i<5;i++)
	{
		printf("\nElements are : %d",a[i]);
		sum=sum+a[i];
	}
	printf("\nSum is : %d",sum);
}
