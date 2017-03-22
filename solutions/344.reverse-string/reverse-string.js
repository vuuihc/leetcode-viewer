/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var a = s.split("");
    a = a.reverse();
    return a.join("");
};