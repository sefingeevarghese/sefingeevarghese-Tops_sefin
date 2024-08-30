#include<stdio.h>
union Myunion{
	int a;
	int b;
}s1,s2;

int main()
{
	printf("Enter Number 1 : ");
	scanf("%d",&s1.a);
	
	printf("Enter Number 2 : ");
	scanf("%d",&s2.b);
	
  printf("Number 1 : %d",s1.a);
  printf("\nNumber 2 : %d",s2.b);
}
