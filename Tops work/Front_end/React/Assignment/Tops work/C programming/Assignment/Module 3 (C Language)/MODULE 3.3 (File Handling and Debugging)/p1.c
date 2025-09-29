#include <stdio.h>
int findMax(int arr[], int size) // Function to find the maximum number in an array
{
  int max = arr[0];
  for (int i=1;i<size;i++) 
  {
    if (arr[i] > max) 
	{
      max = arr[i];
    }
  }
    return max;
}

int main() 
{
    int size;
    printf("Enter the number of elements in the array: ");   // Input: size of the array
    scanf("%d",&size);
     
	int arr[size];
    printf("Enter %d elements:\n", size);   // Input: elements of the array
    for (int i = 0; i < size; i++) 
	{
        scanf("%d",&arr[i]);
    }
    
    int maxNumber=findMax(arr, size);    // Find the maximum number


    printf("The maximum number in the array is: %d\n", maxNumber);   // Output: maximum number

    return 0;
}

