/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

const stack =[];
 const value = { ")": "(", "}": "{", "]": "[" };

 for(const char of s)
 {
     if (char in mapping) {
         const topElement = stack.pop() ;
            if (mapping[char] !== topElement) {
                return false;
            }
            else
            {
                
            }
 }
}
    

    
    
};

module.exports = { isValid };


