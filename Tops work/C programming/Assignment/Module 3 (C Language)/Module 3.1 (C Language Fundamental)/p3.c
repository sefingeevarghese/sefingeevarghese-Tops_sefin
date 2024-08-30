#include <stdio.h>
#include <math.h>
main() 
{
    int choice;
    float radius, length, breadth, base, height, area;

    // Display menu options
    printf("Choose the shape to find the area:\n");
    printf("1. Circle\n");
    printf("2. Rectangle\n");
    printf("3. Triangle\n");
    printf("Enter your choice (1, 2, or 3): ");
    scanf("%d", &choice);

    switch (choice) 
	{
        case 1:
            // Area of a circle
            printf("Enter the radius of the circle: ");
            scanf("%f", &radius);
            area = M_PI * radius * radius; // M_PI is the value of pi from math.h
            printf("Area of the circle is: %.2f\n", area);
            break;
        case 2:
            // Area of a rectangle
            printf("Enter the length of the rectangle: ");
            scanf("%f", &length);
            printf("Enter the breadth of the rectangle: ");
            scanf("%f", &breadth);
            area = length * breadth;
            printf("Area of the rectangle is: %.2f\n", area);
            break;
        case 3:
            // Area of a triangle
            printf("Enter the base of the triangle: ");
            scanf("%f", &base);
            printf("Enter the height of the triangle: ");
            scanf("%f", &height);
            area = 0.5 * base * height;
            printf("Area of the triangle is: %.2f\n", area);
            break;
        default:
            printf("Invalid choice!\n");
            break;
    }

    return 0;
}

