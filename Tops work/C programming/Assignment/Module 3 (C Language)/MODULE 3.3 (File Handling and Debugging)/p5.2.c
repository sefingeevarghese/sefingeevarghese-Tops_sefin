#include<stdio.h>
int main()
{
	int a[4];
	int i,j,temp;
	
	for(i=0;i<4;i++)
	{
       printf("Enter Element :");
       scanf("%d",&a[i]);
	}
	
	for(i=0;i<4;i++)
	{
		printf("\nElements are : %d", a[i]);
	}
		
	for(i=0;i<4;i++) // 0 index
	{
	   for(j=0;j<4;j++) // 1 index
	   {
	   	 if (a[i]>a[j])
	   	 {
	   	    temp=a[i];
			a[i]=a[j];
			a[j]=temp;   	
		 }
	   }
	}
	
	for(i=0;i<4;i++)
	{
		printf("\nDsc order : %d",a[i]);
	}
}

