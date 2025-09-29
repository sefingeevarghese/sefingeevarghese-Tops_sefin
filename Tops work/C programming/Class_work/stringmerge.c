#include<stdio.h>
int main()
{
	char a[5],b[5];
	
	printf("Enter Name 1 : ");
	gets(a);
	printf("Enter Name 2 : ");
	gets(b);
	
	printf("Final String is : %s",strcat(a,b));
}
