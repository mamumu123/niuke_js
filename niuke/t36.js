//题目描述
// 将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
function alterContext(fn, obj) {
    return fn.apply(obj)
}