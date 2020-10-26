/* Hackerrank Problem: You will be given an array of integers. All of the integers except one occur twice. That one is unique in the array.

Given an array of integers, find and print the unique element.

For example, , the unique element is .

Function Description

Complete the lonelyinteger function in the editor below. It should return the integer which occurs only once in the input array.

lonelyinteger has the following parameter(s):

a: an array of integers
Input Format

The first line contains a single integer, , denoting the number of integers in the array.
The second line contains  space-separated integers describing the values in .

Constraints

It is guaranteed that  is an odd number and that there is one unique element.
, where .
Output Format

Print the unique integer in the array.*/

#include <bits/stdc++.h>

using namespace std;

vector<string> split_string(string);
int lonelyinteger(vector<int> a) {
int c=0;
int uni;
for(int i=0;i<a.size();i++){
c=count(a.begin(),a.end(),a[i]);
if(c==1){uni=a[i];}
}
return uni;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    int n;
    cin >> n;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    string a_temp_temp;
    getline(cin, a_temp_temp);

    vector<string> a_temp = split_string(a_temp_temp);

    vector<int> a(n);

    for (int i = 0; i < n; i++) {
        int a_item = stoi(a_temp[i]);

        a[i] = a_item;
    }

    int result = lonelyinteger(a);

    fout << result << "\n";

    fout.close();

    return 0;
}

vector<string> split_string(string input_string) {
    string::iterator new_end = unique(input_string.begin(), input_string.end(), [] (const char &x, const char &y) {
        return x == y and x == ' ';
    });

    input_string.erase(new_end, input_string.end());

    while (input_string[input_string.length() - 1] == ' ') {
        input_string.pop_back();
    }

    vector<string> splits;
    char delimiter = ' ';

    size_t i = 0;
    size_t pos = input_string.find(delimiter);

    while (pos != string::npos) {
        splits.push_back(input_string.substr(i, pos - i));

        i = pos + 1;
        pos = input_string.find(delimiter, i);
    }

    splits.push_back(input_string.substr(i, min(pos, input_string.length()) - i + 1));

    return splits;
}

