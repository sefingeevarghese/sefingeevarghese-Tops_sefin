#include<stdio.h>
int main() {
	int n,row,col;
	scanf("%d",&n);
	for(row=1;row<=n;row++){
		for(col=1;col<=row;col++){
			printf("*");
		}
		printf("\n");
	}
	int NewRow=n-1;
	for(row=NewRow;row>=1;row--){
		for(col=1;col<=row;col++){
			printf("*");
		}
		printf("\n");
	}
	return 0;
}

