// function with parameters with return type
#include<stdio.h>
fac(int n) // parameters function definition
{
	int i,fac=1;
	for(i=1;i<=n;i++)
	{
		fac*=i;
	}
	return fac;
	
}

add(int n1,int n2)
{
	
	return n1+n2;
}

int main()
{
	int n;
    printf("\nEnter  Number : ");
	scanf("%d",&n);
	printf("%d",fac (n)); //arguments function call //fac()
	
	int n1,n2;
    printf("\nEnter Number 1 : ");
	scanf("%d",&n1);
	printf("\nEnter Number  2: ");
	scanf("%d",&n2);
	printf("%d",add(n1,n2)); //arguments function call //add()
	
}
