#include<stdio.h>
int main()
{
	char n;
	
	printf("Enter Character : ");
	scanf("%c",&n);
	
	switch(n)
	{
		case 'a':
			printf("%c is vowel",n);
			break;
		
		case 'e':
			printf("%c is vowel",n);
			break;	
			
		case 'i':
			printf("%c is vowel",n);
			break;
			
		case 'o':
			printf("%c is vowel",n);
			break;
			
		case 'u':
			printf("%c is vowel",n);
			break;
		
		case 'A':
			printf("%c is vowel",n);
			break;
		
		case 'E':
			printf("%c is vowel",n);
			break;	
			
		case 'I':
			printf("%c is vowel",n);
			break;
			
		case 'O':
			printf("%c is vowel",n);
			break;
			
		case 'U':
			printf("%c is vowel",n);
			break;	
		
		default:
		{
		    printf("%c is Consonent",n);
			break;	
		}				
	}
}
