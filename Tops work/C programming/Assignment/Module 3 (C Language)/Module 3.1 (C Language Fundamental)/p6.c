#include <stdio.h>
main() 
{
    int choice;
    float years, days;

    // Display menu options
    printf("Choose an option:\n");
    printf("1. Convert years to days\n");
    printf("2. Convert days to years\n");
    printf("Enter your choice (1 or 2): ");
    scanf("%d", &choice);

    // Perform the chosen conversion
    switch (choice) 
	{
        case 1:
            // Convert years to days
            printf("Enter the number of years: ");
            scanf("%f", &years);
            days = years * 365.25; // Considering leap years, 1 year is approximately 365.25 days
            printf("%.2f years is approximately %.2f days.\n", years, days);
            break;
        case 2:
            // Convert days to years
            printf("Enter the number of days: ");
            scanf("%f", &days);
            years = days / 365.25;
            printf("%.2f days is approximately %.2f years.\n", days, years);
            break;
        default:
            printf("Invalid choice!\n");
            break;
    }

    return 0;
}

