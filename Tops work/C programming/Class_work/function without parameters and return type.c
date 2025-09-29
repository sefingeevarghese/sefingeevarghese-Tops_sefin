#include<stdio.h>
int fac() // function defination
{
	int n,i,fac=1;
	printf("Enter Number :");
	scanf("%d",&n);
	for(i=1;i<=n;i++)
	{
		fac*=i;
	}
	printf("Factorial is : %d",fac);
}



int add()
{
	int n,n1;
    printf("Enter Number1 :");
	scanf("%d",&n);
	 printf("Enter Number2 :");
	scanf("%d",&n1);	
	
	printf("\nAddition : %d",n+n1);	
}

int prime()
{
	int n,i,prime=0;
	printf("Enter Number : ");
	scanf("%d",&n);
	for(i=1;i<=n;i++)
	{
		//7%1 = True, 7%2 = false
		if(n%i==0)
		{
			prime++;
		}
	}
	
	if (prime==2)
       {
       	   printf("%d is prime",n);
	   }
	else
	  {
	  	   printf("%d is not prime",n);
	  }   
}

int fibonacci()
{
	int n,i,n1=0,n2=1;
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
int main()
{
	while (1)
  {
	printf("\npress 1 for Factorial Number");
	printf("\npress 2 for Additional Number");
	printf("\npress 3 for Prime Number");
	printf("\npress 4 for Fibonacci series Number");
	printf("\npress 5 for Exit");
	
	int ch;
	printf("\nEnter Choice : ");
	scanf("%d",&ch);
	
	if (ch==1)
	{
		fac();
	}
	else if (ch==2)
	{
		add();
	}
	else if (ch==3)
	{
		prime();
	}
	else if (ch==4)
	{
		fibonacci();
	}
	else if(ch==5)
	{
		printf("Thank You!!");
		break;
	}
	else
	{
		printf("Invalid Choice!!");
		break;
	}
	
  }

}
