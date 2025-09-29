#include<stdio.h>

int main()
{
	FILE *fptr;
	
	fptr=fopen("test1.txt","w");
	fprintf(fptr,"This is append Method");
	fclose(fptr);
}
