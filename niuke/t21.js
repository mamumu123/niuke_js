//题目描述
// 将数组 arr 中的元素作为调用函数 fn 的参数
function argsAsArray(fn, arr) {
    //return fn.apply(null,arr);
    return fn(...arr)
}
let a= argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']);
console.log(a)
