//题目描述
// 找出数组 arr 中重复出现过的元素
function duplicates(arr) {
    //es6
    // var a=arr.sort()
    // var sum=[]
    //
    // for (var i=1;i<arr.length;i++)
    // {
    //    if(a[i]==a[i-1]){
    //        sum.push(a[i])
    //    }
    //
    // }
    //
    // return [...(new Set(sum))]

    // var a = arr.sort()
    // var sum = []
    //
    // for (var i = 1; i < arr.length; i++) {
    //     if (a[i] == a[i - 1]) {
    //         if (i != 1) {
    //             if (a[i] != a[i - 2]) {
    //                 sum.push(a[i])
    //             }
    //         }
    //         else{
    //             sum.push(a[i])
    //         }
    //
    //     }
    //
    // }
    var a = arr.sort()
    var sum =[]

    for (var i = 1; i < arr.length; i++) {
        if (a[i] == a[i - 1]) {
            sum.push(a[i])
        }
    }
    for (var j = 1; j < arr.length; j++) {
        if (a[j] == a[j - 1]) {
            sum.splice(a[j],1)
        }
    }
    return sum
}

a = duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])
console.log(a)