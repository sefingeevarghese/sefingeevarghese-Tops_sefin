#include<stdio.h>
int main()
{
	char a[30],b[30],i,j;
	
	printf("Enter Name 1 : ");
	gets(a);
	printf("Enter Name 2 : ");
	gets(b);
	
	for(i=0;a[i]!='\0';i++);
	
	for(j=0;b[j]!='\0';j++)
	{
		a[i]=b[j];
		i++;
	}
	a[i]!='\0';
	
	printf("Merge string is :%s",a);
}
