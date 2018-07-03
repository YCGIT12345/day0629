


//普通写法
var obj = {
    name: 'zhangsan',
    age: 0,
    say: function(){
        alert(this.name, this.age);
    }
}

//es6写法对象的简写
var obj = {
    name: 'zhangsan',
    age: 0,
    say(){
        alert(this.name+this.age);
    }
}




var name = 'zhangsan';
var age = 0;

var obj = {
    name,
    age,
    say(){
        alert(this.name+this.age);
    }
}

console.log(obj);



// 对象的解构，按key值解构
var obj = {
    name: 'zhangsan',
    age: 0,
    say: function(){
        alert(this.name, this.age);
    }
}

var {name,age,say} = obj;
//上下的写法是等价的
var name = obj.name;
var age = obj.age;
var say = obj.say;

//按key值解构,s顺序没有关系
var {name,say} = obj;

console.log(name,age,say);





var obj = {
    say(){
        alert(1);
    },
    name: 'lisi'
};
var obj1 = {
    name: '张三'
}
var obj2 = {
    age: 0
};
var obj3 = {
    height: 100,
    name: 'wagnwu'
}
//将多个对象的值拷贝给一个目标对象，这个目标对象作为返回值
//参数1：目标对象
//剩余参数：源对象
var result = Object.assign(obj, obj3, obj1, obj2);

console.log(obj==result);
console.log(obj);




//对象的扩展运算符
var obj = {
    name: 'zhangsan',
    age: 0,
    say: function(){
        alert(this.name, this.age);
    }
};

var obj1 = {...obj, height: 200};

console.log(obj1);






//对对象进行深拷贝
var obj = {
    name: 'zhangsan',
    age: 0,
    say: function(){
        alert(this.name, this.age);
    }
};
var obj1 = {...obj};
var obj1 = Object.assign({}, obj);

