#include <stdio.h>
#include <string.h>
void reverseString(char *str, int start, int end)  // Function to reverse a string using recursion
{
    if (start >= end) 
	{
        return;
    }
    
    char temp = str[start];   // Swap the characters at start and end
    str[start] = str[end];
    str[end] = temp;
    
    reverseString(str, start + 1, end - 1);   // Recursive call
}

int main() 
{
    char str[100];

    printf("Enter a string: ");   // Input: string to reverse
    fgets(str, sizeof(str), stdin);

    str[strcspn(str, "\n")] = '\0';   // Remove the newline character from the end of the string

    int length = strlen(str);

    reverseString(str, 0, length - 1);   // Reverse the string

    printf("Reversed string: %s\n", str);  // Output: reversed string

    return 0;
}



