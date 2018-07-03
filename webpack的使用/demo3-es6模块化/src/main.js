// commonJS  引入方式
// var aModule = require('./a.js');


// es6   引入方式
// import XXX from 'path'


//1.默认输出，执行引入
// import aModule from './a.js'
// console.log(aModule);


// 2.指定输出名字输出。执行引入：

/*
import {obj, Person} from './b.js'

console.log(obj);
console.log(Person);
let lisi = new Person('李四', 0);
lisi.say();
*/



//3.既默认输出，又指定输出名字输出。
// import {str} from './c'
// import {obj} from './c'

// import {str, obj, test} from './c'
// import cModule from './c'

//引入所有
import * as cModule from './c'

console.log(cModule);






// as关键字
import {str as str1} from './c'

console.log(str);
console.log(str1);

