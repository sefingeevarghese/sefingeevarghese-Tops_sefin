#include<stdio.h>
int copy(char a[]){
	char b[5];
	int i;
	for(i=0;a[i]!='\0';i++)
	{
		b[i]=a[i];
	}
	b[i]='\0';
	printf("copy of string is : %s",b);
}


int merge(char a[],char b[]){
	char i,j;
	for(i=0;a[i]!='\0';i++);
	for(j=0;b[j]!='\0';j++)
	{
		a[i]=b[j];
		i++;
	}
	a[i]='\0';
	printf("merge: %s",a);
}

int Length(char a[]){
	int i ,len=0;
	for(i=0;a[i]!='\0';i++){
		len++;
	}
	printf("Length of string is : %d",len);
}


int main()
{
		while(1)  //while use in infinate loop
	{
		printf("\npress 1 copy ");
		printf("\npress 2 marge ");
		printf("\npress 3 lenth ");	
		printf("\npress 4 exit");
		
		int ch;
		printf("\nenter the choise :");
		scanf("%d",&ch);
		
		if(ch==1)
		{
			char a[5];
			printf("enter the name :");
//			gets(a);
		 scanf("%s", a);
			copy(a);
		}
		else if(ch==2)
		{
			char x[5],y[5];
			printf("\nenter the name 1:");
			scanf("%s", x);
			printf("\nenter the name 2 :");
			scanf("%s", y);
			merge(x,y);
		}
		else if(ch==3)
		{
			char p[5];
			printf("enter the name :");
			scanf("%s", p);
			Length(p);
		}
		
		else if(ch==4)
		{
			printf("thank you!!");
			break;
		}
		else 
		{
			printf("invalid choise...");
			break;
		}
	}
}
	

