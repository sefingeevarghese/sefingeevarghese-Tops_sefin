#include<stdio.h>
int main()
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
