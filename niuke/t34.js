//题目描述
// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
function convertToBinary(num) {
    var n = num.toString(2).split('')
    while (n.length < 8) {
        n.unshift('0')
    }
    return n.join('')
}