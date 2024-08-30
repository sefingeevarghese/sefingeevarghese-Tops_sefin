#include <stdio.h>
main() 
{
    char ch;

    // Input the character
    printf("Enter an alphabet: ");
    scanf(" %c", &ch); // The space before %c is to consume any trailing newline character

    // Check if the character is a vowel or consonant using switch case
    switch(ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            printf("%c is a vowel.\n", ch);
            break;
        default:
            printf("%c is a consonant.\n", ch);
    }

    return 0;
}

