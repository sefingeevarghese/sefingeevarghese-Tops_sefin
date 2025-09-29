#include<stdio.h>
int main()
{
	int a,b,temp;
	
	printf("Enter Number 1 :");
	scanf("%d",&a);
	printf("Enter Number 2 :");
	scanf("%d",&b);
	//a=10 b=20
	
	temp = a; //temp=10,a=blank
	a = b; //a=20,b=blank
	b = temp; //b=10,temp=blank
	
	printf("Swapping A : %d" , a);
	printf("\nSwapping B : %d" , b);
	 
}
