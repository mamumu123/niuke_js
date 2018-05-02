//题目描述
// 将函数 fn 的执行上下文改为 obj 对象
function speak(fn, obj) {
    return fn.apply(obj, obj)
}

a = speak(function () {
    return this.greeting + ', ' + this.name + '!!!';
}, {greeting: 'Hello', name: 'Rebecca'})
console.log(a)