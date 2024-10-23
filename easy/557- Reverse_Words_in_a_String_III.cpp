/**
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
    Example 1:
    Input: s = "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"

 */

// Complexidade de tempo: O(n)
// Complexidade de espaço: O(1)
#include<string>

using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        int start = 0, end = 0, stop = 0;
        
        while(end<=s.length()) {
            if(s[end]==' ' || end == s.length()) {
                stop = end;
                end = stop-1;
                
                while(start < end){
                    swap(s[start], s[end]);
                    --end; ++start;
                }
                
                start = stop+1;
                end = start;
            }
                ++end;
        }
        return s;
    }
};