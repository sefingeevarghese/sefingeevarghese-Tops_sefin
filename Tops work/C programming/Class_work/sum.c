#include<stdio.h>
int main()
{
	int n,i=1,ev=0,od=0,evsum=0,odsum=0;
	
	
	while(i<=5)
  {
     printf("\nEnter a number :");
	 scanf("%d",&n);
	 i++;
	 if(n%2==0)
     {
   	    printf("\n%d is Even",n);
   	    ev++;
   	    evsum=evsum+n;
     }
   
     else
     {
   	 printf("\n%d is Odd",n);
   	 od++;
   	 odsum=odsum+n;
     }
  } 
   printf("\nCount of Even Numbers : %d",ev);
   printf("\nCount of Odd Numbers : %d",od);
   printf("\nSum of Even Numbers : %d",evsum);
   printf("\nSum of Odd Numbers : %d",odsum);
}
