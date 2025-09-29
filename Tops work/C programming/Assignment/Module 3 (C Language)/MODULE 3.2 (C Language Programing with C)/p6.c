#include<stdio.h>
int main()
{
	int n,i=1,fac=1; //start //data member
	
	printf("Enter Number :");
	scanf("%d",&n);
	
	while(i<=n) //stop
	{
		fac=fac*i;
        //1=1*1 = 1
        //1*2 = 2
        //2*3 = 6
        //6*4 = 24
        //24*5 = 120
		i++; // increment
    }
		printf("Factorial is : %d",fac);
		
}
