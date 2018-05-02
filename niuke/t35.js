//题目描述
// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
function multiply(a, b) {
    // var stra=''+a;
    // var strb=''+b;
    // len=Math.max(stra.length-stra.indexOf('.')-1,strb.length-strb.indexOf('.')-1)
    // return parseFloat(a*b).toFixed(len)
    return Math.round(a*b*10000)/10000;
}

a = multiply(3, 0.0001)
console.log(a)