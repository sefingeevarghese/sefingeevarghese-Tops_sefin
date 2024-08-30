#include<stdio.h>
#include<string.h>
int main()
{
	char str[]="ABCDE";
	int i,j,len;
	len=strlen(str);
	for(i=0;i<len;i++)  //raws
	{
		for(j=0;j<=i;j++) // columns
		{
			printf("%c",str[j]);
			
		}
		printf("\n");
	}
}
