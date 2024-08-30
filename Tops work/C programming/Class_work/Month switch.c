#include<stdio.h>
int main()
{
	int n;
	
	printf("Enter Number : ");
	scanf("%d",&n);
	
	switch(n)
	{
		case 1:
			printf("%d is January",n);
			break;
			
		case 2:
			printf("%d is Febuary",n);
			break;
			
		case 3:
			printf("%d is March",n);
			break;
			
		case 4:
			printf("%d is April",n);
			break;
			
		case 5:
			printf("%d is May",n);
			break;
			
		case 6:
			printf("%d is June",n);
			break;
			
		case 7:
			printf("%d is July",n);
			break;
			
		case 8:
			printf("%d is August",n);
			break;
			
		case 9:
			printf("%d is September",n);
			break;
			
		case 10:
			printf("%d is October",n);
			break;
			
		case 11:
			printf("%d is November",n);
			break;
			
		case 12:
			printf("%d is December",n);
			break;	
			
		default: 
		{
		    printf("Invalid Choice",n);
		    break;
	    }
			
    }
}
