#include<stdio.h>
int main()
{
	int a[2][3],b[2][3];
	int i,j;
	
	for(i=0;i<2;i++)   // rows
	{
		for(j=0;j<3;j++)  // coloum
		{
			printf("Enter Element : ");
			scanf("%d",&a[i][j]);
		}
	}
	for(i=0;i<2;i++) // row
	{
		for(j=0;j<3;j++)  // coloum
		{
			printf("%d\t",a[i][j]);
		}
		printf("\n");
	}
	
	printf("\n**********************************\n");
	
	for(i=0;i<2;i++)
	{
		for(j=0;j<3;j++)
		{
			printf("Enter Elements : ");
			scanf("%d",&b[i][j]);
		}
	}
	
	for(i=0;i<2;i++) // row
	{
		for(j=0;j<3;j++)  // coloum
		{
			printf("%d\t",b[i][j]);
		}
		printf("\n");
	}
	printf("\n*****************Addition*****************\n");
    
	for(i=0;i<2;i++) // row
	{
		for(j=0;j<3;j++)  // coloum
		{
			printf("%d\t",a[i][j]+b[i][j]);
		}
		printf("\n");
	}    
}
