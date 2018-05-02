//题目描述
// 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
function containsRepeatingLetter(str) {
//确实有意思
    //return /([a-zA-Z])\1+/.test(str)
    s = str.split('')
    for (var i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            re = /[a-zA-Z]/i
            if (re.test(s[i])) {
                return true
            }
        }
    }
    return false
}

a = containsRepeatingLetter('rattler')
console.log(a)