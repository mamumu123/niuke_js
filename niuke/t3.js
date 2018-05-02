//题目描述
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
function remove(arr, item) {
    let a =[]
    for (i of arr) {
        if (i != item) {
            a.push(i)
        }
    }
    return a
    // a=arr.filter(function(i){
    //    return i!=item
    // })

}

let s = remove([1, 2, 3, 4], 2)
console.log(s)