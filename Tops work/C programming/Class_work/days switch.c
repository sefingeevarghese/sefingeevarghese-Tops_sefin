#include<stdio.h>
int main()
{
	int n;
	
	printf("Enter a Number : ");
	scanf("%d",&n);
	
	switch(n)
    {
    	case 1 :
    		printf("%d is Monday",n);
    		break;
    		
    	case 2:
    		printf("%d is Tuesday",n);
    		break;
			
		case 3:
    		printf("%d is Wednesday",n);
    		break;
			
		case 4:
    		printf("%d is Thursday",n);
    		break;
			
		case 5:
    		printf("%d is Friday",n);
    		break;				
    		
    	case 6:
    		printf("%d is Saturday",n);
    		break;
			
		case 7:
    		printf("%d is Sunday",n);
    		break;
			
		default:
		{
		    printf("Invalid Choice",n);	
		    break;
		}			
	}
}
