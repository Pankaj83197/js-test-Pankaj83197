/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

const stack = [];
 const mapping = { ")": "(", "}": "{", "]": "[" };

 for(const char of s)
 {
     if (char in mapping) {
         const topElement = stack.pop() ;
            if (mapping[char] !== topElement) {
              return false;
            } else {
              stack.push(char);
            }
            return stack.length === 0;
 }
}
    

    
    
};

module.exports = { isValid };


