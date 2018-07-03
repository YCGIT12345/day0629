//commonJS 向外输出
// module.exports = {

// };


//es6默认输出方式

var str1 = 'wert';
var obj1 = {
    name: 'lisi'
};
var func1 = function(){
    alert('func1');
}

// es6 向外输出
// export default {
//     str: 'abcde',
//     obj: {
//         name: 'zhangsan'
//     },
//     func() {
//         alert(this.str);
//     },
//     str1: func1,
//     obj1,
//     func1
// };



let testObj = {
    str: 'abcde',
    obj: {
        name: 'zhangsan'
    },
    func() {
        alert(this.str);
    },
    str1: str1,
    obj1,
    func1
};

export default testObj;