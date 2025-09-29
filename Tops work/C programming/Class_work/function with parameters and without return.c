#include<stdio.h>
int fac(int n) // parameters function definition
{
	int i,fac=1;
	
	for(i=1;i<=n;i++)
	{
		fac*=i;
	}
	printf("Factorial is : %d",fac);
	
}

int add(int n1,int n2)
{
	printf("\nAddition is : %d",n1+n2);
	
}

int main()
{
	int n3;
    printf("\nEnter Number : ");
	scanf("%d",&n3);
	fac(n3); //arguments function call //fac()
	
	int n1,n2;
    printf("\nEnter Number 1 : ");
	scanf("%d",&n1);
	printf("\nEnter Number  2: ");
	scanf("%d",&n2);
	add(n1,n2); //arguments function call //add()
	
}
