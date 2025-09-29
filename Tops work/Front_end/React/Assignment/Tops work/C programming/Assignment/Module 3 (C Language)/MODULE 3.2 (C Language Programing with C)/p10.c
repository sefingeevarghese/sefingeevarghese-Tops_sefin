#include <stdio.h>

int main() {
    int num, sum = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    // If the number is negative, make it positive for digit extraction
    int temp = (num < 0) ? -num : num;

    while (temp != 0) {
        int digit = temp % 10; // Extract the last digit
        sum += digit; // Add the digit to the sum
        temp /= 10; // Remove the last digit from temp
    }

    // If the original number was negative, make the sum negative
    if (num < 0) {
        sum = -sum;
    }

    printf("Summation of digits is: %d\n", sum);

    return 0;
}


