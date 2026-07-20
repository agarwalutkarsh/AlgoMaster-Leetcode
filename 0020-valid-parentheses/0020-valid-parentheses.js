/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const stack = []
    let flag = 0
    if (s === "") {
        return true
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
            flag = 1
        }
        
        else if (s[i] === ')' && stack.length !== 0 &&  stack.at(-1) === '(') {
           stack.pop()
        }
        else if (s[i] === ']' && stack.length !== 0 &&  stack.at(-1) === '[') {
           stack.pop()
        }
        else if (s[i] === '}' && stack.length !== 0 &&  stack.at(-1) === '{') {
           stack.pop()
        }
        else if (s[i] === ')' || s[i] === '}' || s[i] === ']'){
            stack.push(s[i])
            flag = 1
        }
    }
    if (stack.length === 0 && flag === 1) {
        return true
    }
    return false
};