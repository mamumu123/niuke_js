//题目描述
// 计算给定数组 arr 中所有元素的总和
// 输入描述:
//
// 数组中的元素均为 Number 类型
function sum(arr) {
    // num=0
    // for (i of arr){
    //     num+=i
    // }
    // return num

    //return arr.reduce((total, num)=>{return total + num;})
    return arr.reduce(function(total, num){return total + num;})
}

var s=sum([ 1, 2, 3, 4 ])
console.log(s)