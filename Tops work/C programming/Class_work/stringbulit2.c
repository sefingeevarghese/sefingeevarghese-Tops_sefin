#include<stdio.h>
main()
{
	char a[5],b[5];
	
	printf("Enter String : ");
	gets(a);
	strcpy(b,a);
	
	
	printf("String b is : %s",b);
}
