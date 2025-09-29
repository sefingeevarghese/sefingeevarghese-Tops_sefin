#include<stdio.h>
int fac() 
{
    int n,i,fac=1;
	printf("Enter Number :");
	scanf("%d",&n);
	for(i=1;i<=n;i++)
	{
		fac*=i;
	}

      return fac;
}

int add()
{
	int n1,n2;
	printf("\nEnter Number1 :");
	scanf("%d",&n1);
	printf("\nEnter Number2 :");
	scanf("%d",&n2);
	
	return n1+n2;
}

int main()
{
	int result = fac();
    printf("%d",result);-
    printf("%d",add());
}
    
    
    
