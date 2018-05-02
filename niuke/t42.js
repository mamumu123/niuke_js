//题目描述
// 给定字符串 str，检查其是否包含 连续3个数字
// 1、如果包含，返回最新出现的 3 个数字的字符串
// 2、如果不包含，返回 false
function captureThreeNumbers(str) {
    //声明一个数组保存匹配的字符串结果
    var arr = str.match(/\d{3}/);
    //如果arr存在目标结果，则返回第一个元素，即最早出现的目标结果
    if (arr)
        return arr[0];
    else
        return false
}

a = captureThreeNumbers('9876543')
console.log(a)