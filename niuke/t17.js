//题目描述
// 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
//ox12 ->0
function parse2Int(num) {
    var num = num.split('')
    var n=[]
    for (var i = 0; i < num.length; i++) {
        if (num[i] >= '0' && num[i] <= '9') {
            n.push(num[i])
            console.log(n)
        }
        else {
            break
        }

    }
    var num=n.join('')

    return parseInt(num);

}

console.log(parse2Int('0x12'))
// var num = '0x12'.split('')
//
// var n=[]
// for (var i = 0; i < num.length; i++) {
//     if (num[i] >= '0' && num[i] <= '9') {
//         n.push(num[i])
//         console.log(n)
//     }
//     else {
//         break
//     }
//
// }
//
// result=n.join('')
// console.log(result)