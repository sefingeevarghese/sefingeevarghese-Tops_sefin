#include<iostream>
using namespace std;
class Bank{
	public:
		int acno,balance=5000,de,we;
		string name;
		create()
		{
			fflush(stdin);
			cout<<"Enter Name : ";
			cin>>name;
			
			cout<<"Enter Account number : ";
			cin>>acno;
			
			cout<<"Your Payment is : "<<balance<<endl;
			
			this->balance = balance; //using this pointer to initialise balance
			
		}
		
		// Function to deposit an amount
		deposit()
		{
			fflush(stdin);
			cout<<"Enter Amount for Deposit : ";
			cin>>de;
			
			
			this->de = de;
			
			this->balance = this->balance+this->de;
		}
		
		// Function to withdraw an amount after checking balance
		withdraw()
		{
		  fflush(stdin);
		  cout<<"Enter Amount for Withdraw : ";
		  cin>>we;
		  this->we = we;
		  	
		  if (we>this->balance)
		  {
		  	cout<<"Insufficient balance"<<endl;
		  }
		  else
		  {
		  	this->balance = this->balance-this->we;
		  }	
		
		}
		
		 // Function to display balance
		bal()
		{
			fflush(stdin);
			cout<<"Your balance is : "<<this->balance;
		}
};

main()
{
	Bank obj;
	
	cout<<"press 1 for Account Openning"<<endl;
	cout<<"press 2 for Exit"<<endl;
	
	int ch;
	cout<<"Enter Choice : "<<endl;
	cin>>ch;
	
	if(ch==1)
	{
		obj.create();
		while (1)
		{
			cout<<"press 1 for Deposit"<<endl;
			cout<<"press 2 for Withdraw"<<endl;
			cout<<"press 3 for Balance"<<endl;
			cout<<"press 4 for Exit"<<endl;
			
			int ch1;
			cout<<"Enter Choice : "<<endl;
			cin>>ch1;
			
			if(ch1==1)
			{
				obj.deposit();
			}
			else if(ch1==2)
			{
				obj.withdraw();
			}
			else if(ch1==3)
			{
				obj.bal();
			}
			else if(ch1==4)
			{
				cout<<"Thanks!!";
				break;
			}
			else
			{
				cout<<"Invalid choice";
				break;
			}
		}
	}
	else
	{
		cout<<"Thank you!!";
	}
}
