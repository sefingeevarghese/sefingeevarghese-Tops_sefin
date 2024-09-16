#include <iostream>
using namespace std;
class Area 
{  public:
    float area(float area, float breadth) {  // Overloaded function to calculate the area of a rectangle
        return area * breadth; // Formula used: Area = A * breadth
    }
    float area(float area, float breadth, bool isTriangle) {   // Overloaded function to calculate the area of a triangle
        return 0.5 * area * breadth;    // Formula used: Area = ½ * A * breadth
    }
    float area(float area) {
        const float PI = 3.14159; // Overloaded function to calculate the area of a circle
        return PI * area * area;  // Formula used: Area = Pi * A * A
    }
};

main() {
    Area shape;
    // Calculate the area of a rectangle
	float rectangleArea, rectangleBreadth; 
    cout << "Enter the area and breadth of the rectangle: ";
    cin >> rectangleArea >> rectangleBreadth;
    cout << "Area of the Rectangle: " << shape.area(rectangleArea, rectangleBreadth) << endl;

    // Calculate the area of a triangle
    float triangleArea, triangleBreadth;
    cout << "Enter the area and breadth of the triangle: ";
    cin >> triangleArea >> triangleBreadth;
    cout << "Area of the Triangle: " << shape.area(triangleArea, triangleBreadth, true) << endl;

    // Calculate the area of a circle
    float circleArea;
    cout << "Enter the area for the circle: ";
    cin >> circleArea;
    cout << "Area of the Circle: " << shape.area(circleArea) << endl;

    return 0;
}

