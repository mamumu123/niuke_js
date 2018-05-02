//题目描述
// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
function remove(arr, item) {
    for (let i =arr.length-1; i >=0; i--) {
       if(arr[i]==item){
           arr.splice(i,1)
       }
    }
    return  arr


}

let s = remove([1, 2, 2, 3, 4, 2, 2], 2)
console.log(s)