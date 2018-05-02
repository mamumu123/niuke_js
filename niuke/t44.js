//function isUSD(str) {
// var re = /^\$([1-9]\d{0,2}(,\d{3})*|0)(\.\d{2})?$/;
//     return re.test(str);
// }
function isUSD(str) {
    var re = /^\$([1-9]\d{0,2}(,\d{3})*|0)(\.\d{2})?$/;
    return re.test(str);
}

a=isUSD()
console.log(a)