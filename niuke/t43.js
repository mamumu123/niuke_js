//题目描述
// 给定字符串 str，检查其是否符合如下格式
// 1、XXX-XXX-XXXX
// 2、其中 X 为 Number 类型
function matchesPattern(str) {
    re=/^\d{3}-\d{3}-\d{4}$/
    return re.test(str)
}
a=matchesPattern('800-555-1212')
console.log(a)