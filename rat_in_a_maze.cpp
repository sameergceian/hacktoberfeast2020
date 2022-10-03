#include<bits/stdc++.h>
using namespace std ;

bool solve(char arr[10][10],int ans[][10],int n,int i,int j){

    
    // we will first assume ki jaha par hum hai ussse solution aa jaega 
    //so,
    if(i==n&&j==n){
        ans[n][n]=1;
        for(int i=0;i<=n;i++){
            for(int j=0;j<=n;j++){
                cout<<ans[i][j]<<" ";
            }
            cout<<endl;
        }
        cout<<endl;
        return true;
    }
    if(i>n||j>n){
        return false ;
    }
    if(ans[i][j]=='0'){
        return false;
    }
    ans[i][j]=1;
    // now we will check that can we go right or left or not 
    bool right=solve(arr,ans,n,i,j+1);
    bool down = solve(arr,ans,n,i+1,j);
    // yaha backtracking wala case hoga jismai baki sare path zero ho jaenge except hte one jisse ja sake
    ans[i][j]=0;
    if(right || down ){
        return true;
    }
    else{
        return false;
    }

}


int main(){
    char maze[10][10]={"0100","0001","1010","1100"};
    int sol[10][10]={0};
    int n=4;
    bool ans=solve(maze,sol,n-1,0,0);
    if(ans==false){
        cout<<"no"<<endl;
    }

}