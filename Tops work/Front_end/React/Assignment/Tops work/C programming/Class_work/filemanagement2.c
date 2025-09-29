#include<stdio.h>

int main()
{
	FILE *fptr;
	
	fptr=fopen("test2.txt","w");
	fprintf(fptr,"This is Write Method");
	fclose(fptr);
}
