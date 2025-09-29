#include <stdio.h>
#define MAX 100

void inputMatrix(int matrix[MAX][MAX], int row, int col, char name) 
{
    printf("Enter elements of matrix %c (%d x %d):\n", name, row, col);
    for (int i = 0; i < row; i++) 
	{
        for (int j = 0; j < col; j++) 
		{
            printf("%c[%d][%d] = ", name, i, j);
            scanf("%d", &matrix[i][j]);
        }
    }
}

void printMatrix(int matrix[MAX][MAX], int row, int col, char name) 
{
    printf("Matrix %c (%d x %d):\n", name, row, col);
    for (int i = 0; i < row; i++) 
	{
        for (int j = 0; j < col; j++) 
		{
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}

void addMatrices(int a[MAX][MAX], int b[MAX][MAX], int result[MAX][MAX], int row, int col) 
{
    for (int i = 0; i < row; i++) 
	{
        for (int j = 0; j < col; j++) 
		{
            result[i][j] = a[i][j] + b[i][j];
        }
    }
}

void subtractMatrices(int a[MAX][MAX], int b[MAX][MAX], int result[MAX][MAX], int row, int col) {
    for (int i = 0; i < row; i++) 
	{
        for (int j = 0; j < col; j++) 
		{
            result[i][j] = a[i][j] - b[i][j];
        }
    }
}

void multiplyMatrices(int a[MAX][MAX], int b[MAX][MAX], int result[MAX][MAX], int rowA, int colA, int colB) 
{
    for (int i = 0; i < rowA; i++) 
	{
        for (int j = 0; j < colB; j++) 
		{
            result[i][j] = 0;
            for (int k = 0; k < colA; k++) 
			{
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}

int main() 
{
    int rowA, colA, rowB, colB;
    int a[MAX][MAX], b[MAX][MAX], result[MAX][MAX];

    // Input dimensions of matrices
    printf("Enter rows and columns for matrix A: ");
    scanf("%d %d", &rowA, &colA);
    printf("Enter rows and columns for matrix B: ");
    scanf("%d %d", &rowB, &colB);

    if (rowA != rowB || colA != colB) 
	{
        printf("Addition and subtraction are not possible: Dimensions of A and B must be the same.\n");
    } 
	else 
	{
        inputMatrix(a, rowA, colA, 'A');
        inputMatrix(b, rowB, colB, 'B');
        
        // Addition of matrices
        addMatrices(a, b, result, rowA, colA);
        printMatrix(result, rowA, colA, 'C');
        
        // Subtraction of matrices
        subtractMatrices(a, b, result, rowA, colA);
        printMatrix(result, rowA, colA, 'D');
    }

    if (colA != rowB) 
	{
        printf("Multiplication is not possible: Number of columns in A must be equal to number of rows in B.\n");
    } 
	else 
	{
        // Input matrices if not already input
        if (rowA != rowB || colA != colB) 
		{
            inputMatrix(a, rowA, colA, 'A');
            inputMatrix(b, rowB, colB, 'B');
        }
        
        // Multiplication of matrices
        multiplyMatrices(a, b, result, rowA, colA, colB);
        printMatrix(result, rowA, colB, 'E');
    }

    return 0;
}

