#include <iostream>
using namespace std;

// Template function to sort an array using the Bubble Sort algorithm
template <typename T>
 sortArray(T arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap if the current element is greater than the next element
                T temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Template function to print an array
template <typename T>
 printArray(T arr[], int size) {
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

main() {
    int intArr[] = {5, 3, 8, 6, 2, 7, 4, 1};
    double doubleArr[] = {3.5, 2.1, 4.6, 1.9, 5.8};
    char charArr[] = {'d', 'a', 'e', 'c', 'b'};

    int intSize = sizeof(intArr) / sizeof(intArr[0]);
    int doubleSize = sizeof(doubleArr) / sizeof(doubleArr[0]);
    int charSize = sizeof(charArr) / sizeof(charArr[0]);

    std::cout << "Original integer array: ";
    printArray(intArr, intSize);

    std::cout << "Original double array: ";
    printArray(doubleArr, doubleSize);

    std::cout << "Original char array: ";
    printArray(charArr, charSize);

    // Sort the arrays using the template function
    sortArray(intArr, intSize);
    sortArray(doubleArr, doubleSize);
    sortArray(charArr, charSize);

    std::cout << "\nSorted integer array: ";
    printArray(intArr, intSize);

    std::cout << "Sorted double array: ";
    printArray(doubleArr, doubleSize);

    std::cout << "Sorted char array: ";
    printArray(charArr, charSize);

    return 0;
}

