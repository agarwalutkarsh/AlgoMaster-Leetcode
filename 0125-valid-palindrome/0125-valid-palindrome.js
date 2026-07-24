/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i= 0
    let j = s.length -1
    while(i<=j){
        const lower_start = s[i].toLowerCase()
        const lower_end = s[j].toLowerCase()
        if(((lower_start >= 'a' && lower_start<='z') || (lower_start >= '0' && lower_start<='9')) && ((lower_end>='a' && lower_end<='z') || (lower_end<='9' && lower_end>='0'))) {
            if (lower_start !== lower_end) {
                return false
            }
            i++;
            j--;
        }
        if (!((lower_start >= 'a' && lower_start<='z') || (lower_start >= '0' && lower_start<='9'))) {
            i++
        }
        if (!((lower_end>='a' && lower_end<='z') || (lower_end<='9' && lower_end>='0'))) {
            j--
        }
    }
    return true
};