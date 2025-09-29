#include <iostream>
#include <ctime> // For displaying date and time
#include <conio.h> // For getch()

using namespace std;

// ATM class for handling operations
class ATM {
private:
    int atmPin;              // ATM PIN
    double initialBalance;    // Initial balance
    double currentBalance;    // Current balance
    string accountHolder;     // Account holder name
    string address;           // Account holder address
    string branchLocation;    // Branch location
    string accountNumber;     // Account number

public:
    // Constructor for initializing account details
    ATM() : atmPin(12345), initialBalance(60000), currentBalance(20000),
            accountHolder("Rakesh Kharva"), address("Mumbai"), branchLocation("Andheri"), accountNumber("5678") {}

    // Display the welcome screen with date and time
    void welcomeScreen() {
        cout << "=========================== WELCOME TO THE ATM ===========================" << endl;
        // Displaying current date and time
        time_t now = time(0);
        char* dt = ctime(&now);
        cout << "Current Date and Time: " << dt;
        cout << "==============================\n";
        cout << "1. Enter ATM PIN\n2. Help\n3. Exit\n";
        cout << "==============================\n";
    }

    // Display help screen
    void helpScreen() {
        cout << "======================                  ==================== " << endl;
        cout << "======================ATM ACCOUNT STATUS==================== " << endl;
        cout << "======================                  ==================== " << endl;
        cout << "You must have the correct pin number to access this account.\n";
        cout << "See your bank representative for assistance during bank opening hours.\n";
        cout << "Thanks for your choice today!!\n";
        cout << "============================================================\n";
        cout << "Press any key to continue...\n";
        getch(); // Wait for user input
    }

    // PIN verification with one attempt
    bool enterPin() {
        int pinEntered;
        cout << "Please Enter your PIN: ";
        cin >> pinEntered;

        if (pinEntered == atmPin) {
            cout << "Correct PIN! Access Granted.\n";
            return true;
        } else {
            cout << "Incorrect PIN! You had made your attempt which failed!!! No More attempts allowed!! Sorry!!\n";
            cout << "=================THANK YOU======================\n";
            cout << "================================================\n";
            cout << "Press any key to continue...\n";
            getch(); // Wait for user input
            return false;
        }
    }

    // Main menu after PIN verification
    void mainMenu() {
        int choice;
        do {
            cout << "=======================                 ==================== " << endl;
            cout << "======================ATM Main MenuScreen==================== " << endl;
            cout << "======================                    ==================== " << endl;
            cout << "1. Deposit Cash\n2. Withdraw Cash\n3. Balance Inquiry\n4. Exit\n";
            cout << "PLEASE ENTER A SELECTION AND PRESS RETURN KEY: ";
            cin >> choice;

            switch (choice) {
                case 1:
                    deposit();
                    break;
                case 2:
                    withdraw();
                    break;
                case 3:
                    checkBalance();
                    break;
                case 4:
                    cout << "Thank you for using the ATM! Exiting...\n";
                    break;
                default:
                    cout << "Invalid option! Please try again.\n";
            }
        } while (choice != 4);
    }

    // Deposit money
    void deposit() {
        double depositAmount;
        cout << "======================ATM ACCOUNT DEPOSIT SYSTEM==================== " << endl;
        cout << "The Names of the Account Holders are: " << accountHolder << endl;
        cout << "The Account Holders' address is: " << address << endl;
        cout << "The Branch location is: " << branchLocation << endl;
        cout << "Account number: " << accountNumber << endl;
        cout << "Present available balance: Rs. " << currentBalance << endl;
        cout << "Enter the Amount to be deposited Rs. : ";
        cin >> depositAmount;

        currentBalance += depositAmount;
        cout << "Your new available Balance Amount is Rs. " << currentBalance << endl;
        cout << "Thank You!\n";
        cout << "Press any key to return to the Main Menu\n";
        getch(); // Wait for user input
    }

    // Withdraw money
    void withdraw() {
        double withdrawAmount;
        cout << "======================ATM ACCOUNT WITHDRAWAL==================== " << endl;
        cout << "The Names of the Account Holders are: " << accountHolder << endl;
        cout << "The Account Holders' address is: " << address << endl;
        cout << "The Branch location is: " << branchLocation << endl;
        cout << "Account number: " << accountNumber << endl;
        cout << "Present available balance: Rs. " << currentBalance << endl;
        cout << "Enter the Amount to withdraw Rs. : ";
        cin >> withdrawAmount;

        if (withdrawAmount > currentBalance) {
            cout << "Insufficient Available Balance in your account.\n";
            cout << "Sorry!!\n";
        } else {
            currentBalance -= withdrawAmount;
            cout << "Your new available Balance Amount is Rs. " << currentBalance << endl;
        }
        cout << "Press any key to return to the Main Menu\n";
        getch(); // Wait for user input
    }

    // Check current balance
    void checkBalance() {
        cout << "======================ATM ACCOUNT BALANCE==================== " << endl;
        cout << "The Names of the Account Holders are: " << accountHolder << endl;
        cout << "The Account Holders' address is: " << address << endl;
        cout << "The Branch location is: " << branchLocation << endl;
        cout << "Account number: " << accountNumber << endl;
        cout << "Your current balance is: Rs. " << currentBalance << endl;
        cout << "Press any key to return to the Main Menu\n";
        getch(); // Wait for user input
    }
};

// Main function to drive the program
int main() {
    ATM atm;
    int choice;

    atm.welcomeScreen();

    cout << "Select your option: ";
    cin >> choice;

    switch (choice) {
        case 1:
            // PIN validation
            if (atm.enterPin()) {
                atm.mainMenu();
            }
            break;
        case 2:
            atm.helpScreen();
            break;
        case 3:
            cout << "Thank you for using the ATM! Exiting...\n";
            break;
        default:
            cout << "Invalid option! Exiting...\n";
    }

    return 0;
}

