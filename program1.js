/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

const stack =[];
 const stack = { ")": "(", "}": "{", "]": "[" };

 for(const char of s)
 {
     if (let in mapping) {
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


