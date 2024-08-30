#include<stdio.h>
main()
{
	int n,i;
	printf("Enter Number : ");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++)
	{
        printf("%d\n",i);
        if (i==n/2)
		{
			break;
		}
    }
	
}
