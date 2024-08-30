#include<stdio.h>
int main()
{
	int n,n1=0,n2=1,i;
	printf("Enter a terms :");
	scanf("%d",&n);
	printf("%d",n1);
	printf("\n%d",n2);
	
	for(i=3;i<=n;i++)
	{
	  int n3=n1+n2;
	  printf("\n%d",n3);
	 
	  n1 = n2;
	  n2 = n1;
    }
}
