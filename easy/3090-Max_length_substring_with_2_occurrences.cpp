/*
    3090. Maximum Length Substring With Two Occurrences

    Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.    

    Example 1:
    Input: s = "bcbbbcba"
    Output: 4

    Explanation:
    The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".
*/

#include<unordered_map>
#include<string>

using namespace std;

// Complexidade de tempo: O(n)
// Complexidade de espaço: O(1)
class Solution {
public:
    int maximumLengthSubstring(string s) {
        unordered_map<char, int> myHash;
        int left =0, right = 0;
        int maxLength = 0;
        
        while(right < s.length()) {
            myHash[s[right]]++;
            
            while(myHash[s[right]] > 2){
                myHash[s[left]]--;
                if(myHash[s[left]]==0) myHash.erase(s[left]);
                ++left;
            }
            maxLength = maxLength > right - left + 1 ? maxLength : right - left + 1;
            right++;
        }
        return maxLength;
    }
};
