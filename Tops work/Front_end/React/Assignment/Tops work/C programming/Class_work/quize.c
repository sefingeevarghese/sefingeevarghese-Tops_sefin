#include<stdio.h>
int main()
{
	char n;
	char n1;
	char n2;
	int choice;
	printf("\n*************Welcome to the game************");
	while(1) //infinite loop
	{
		printf("\npress 1 for quize game");
		printf("\npress 2 for exit");
		fflush(stdin);
		printf("\nEnter Choice : ");
		scanf("%d",&choice);
		if (choice==1)
	 {
		fflush(stdin);//buffer generation
		printf("Enter Name : ");
		scanf("%c",&n);
		printf("\n*************Welcome to the game************",n);	
		
		printf("\nQuestion 1 : Who is Prime minister of India?");
		printf("\nA : Narendra Modi");
		printf("\nB : Amit Shah");
		printf("\nC : Susmita Swaraj");
		printf("\nD : Baba Ram Dev");
		fflush(stdin);
		printf("\nEnter Answer : ");
		scanf("%c",&n1);
		
		if (n1=='A' || n1=='a')
		{
			printf("You are win!!");
		}
		else
		{
			printf("Wrong answer!!");
		}
		printf("\nQuestion 2 : Who is finance minister of India?");
		printf("\nA : Narendra Modi");
		printf("\nB : Nirmala sitharam");
		printf("\nC : Susmita Swaraj");
		printf("\nD : Baba Ram Dev");
		fflush(stdin);
		printf("\nEnter Answer : ");
		scanf("%c",&n2);
		
		if (n2=='B' || n2=='b')
		{
			printf("You are win!!");
		}
		else
		{
			printf("Wrong answer!!");
		}
	 }
		
		else if(choice==2)
		{
			printf("Thank you!!");
			break;
		}
		else
		{
			printf("Invalid Choice!!");
			break;
	    }
	}
}
