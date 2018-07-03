export let str = 'qwert';

export let obj = {
    name: 'zhangsan'
}

export let test = function(){
    alert(1);
} 

export default class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(`name: ${this.name}, age": ${this.age}`);
    }
};