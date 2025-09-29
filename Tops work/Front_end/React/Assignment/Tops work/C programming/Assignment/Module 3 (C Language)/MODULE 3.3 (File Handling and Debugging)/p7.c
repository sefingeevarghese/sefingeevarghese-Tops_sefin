#include <stdio.h>
int stringLength(char str[])  // Function to find the length of a string 
{
    int length = 0;
    while (str[length] != '\0') 
	{
        length++;
    }
    return length;
}

int main() 
{
    char str[100];

    printf("Enter a string: ");  // Input: string to find the length of
    fgets(str, sizeof(str), stdin);

    int len = stringLength(str);   // Remove the newline character from the end of the string if present
    if (str[len - 1] == '\n') 
	{
        str[len - 1] = '\0';
        len--;
    }

    printf("The length of the string is: %d\n", len);  // Output: length of the string

    return 0;
}

