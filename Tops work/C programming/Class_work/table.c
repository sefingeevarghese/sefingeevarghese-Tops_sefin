#include<stdio.h>
int main()
{
	int n,i=1,fac=1; //start //data member
	
	printf("Enter Number :");
	scanf("%d",&n);
	
	while(i<=10)
	{
		printf("%d * %d= %d\n",n,i,n*i);
		i++;
	} 
	
}
