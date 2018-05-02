//题目描述
// 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
function containsNumber(str) {
    //patt=
    var index=str.search(/\d/)
    return index==-1?false:true
}
a=containsNumber('abc123')
console.log(a)