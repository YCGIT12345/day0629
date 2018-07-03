// 箭头函数
// 箭头左边为参数列表
// 箭头右边为返回值

// 箭头函数中，this的指向上下文
var func = function(a, b){
    return a+b;
}

var func = (a, b)=>a+b;

var func = a=>a+1;

var func = ()=>1;


var func = (a)=>{

    if(a%2){
        return '奇数';
    }else{
        alert('偶数');
    }
    
}






// 剩余参数
function test(a, b, ...rest){
    console.log('test执行了');
    console.log(...rest);

    return a+b;
}


test(1,2,3,4,5,6);










