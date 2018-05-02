//题目描述
// 请修复给定的 js 代码中，函数定义存在的问题
// function functions(flag) {
//     if (flag) {
//         function getValue() { return 'a'; }
//     } else {
//         function getValue() { return 'b'; }
//     }
//
//     return getValue();
// }
// console.log(functions(0))
function functions(flag) {
    if (flag) {
        getValue=function () { return 'a'; }
    } else {
        getValue =function() { return 'b'; }
    }

    return getValue();
}