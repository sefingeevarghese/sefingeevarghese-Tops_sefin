#include<stdio.h>
int main()
{
	char a[20];
	int i,len=0;
	
	printf("Enter Name :");
	gets(a);
	
	for(i=0;a[i]!='\0';i++)
    {
       len++;
	}
	
	
	printf("Length of string is : %d",len);
	
}

