#include <stdio.h>
main() 
{
    float principal, rate, time, interest;

    // Input the principal amount, rate of interest, and time period
    printf("Enter the principal amount: ");
    scanf("%f", &principal);

    printf("Enter the rate of interest: ");
    scanf("%f", &rate);

    printf("Enter the time period (in years): ");
    scanf("%f", &time);

    // Calculate the simple interest
    interest = (principal * rate * time) / 100;

    printf("Simple Interest = %.2f\n", interest);

    return 0;
}

