// 数组解构,按下标的位置解构
var arr = [1,2,3];

// var [a,b,c] = arr;
var a = arr[0];
var b = arr[1];
var c = arr[2];

console.log(a,b,c);

var arr1 = [1,2, [3, 4]];

var [a, b, [c, d]] = arr1;
console.log(a,b,c,d);



var arr2 = [1,2,3,[4,5,[6,7],[8,[9], 10], [11, 12]]];

//取数字7
var [a,b,c,[d,e,[f,g]]] = arr2;

console.log(g);





//数组方法
var array1 = [1,2,3,4,5];
//将数组或者是类数组对象深拷贝为新数组
var array2 = Array.from(array1);
//深拷贝数组
var array2 = [...array1];
//深拷贝数组
var array2 = array1.map(item=>item);

console.log(array2 === array1);//false
console.log(array2 == array1);//false



//扩展运算符: ...

var array1 = [1,2,3,4,5];
console.log(array1);

console.log(...array1);
console.log(1,2,3,4,5);

//   ...array1  ===完全等价==  1,2,3,4,5

var array2 = [...array1,6,7,8,9];
console.log(array2);




// 数组
var array1 = [1,2,3,4,5];
//遍历
var result = array1.map(function(item, index){
    
    //遍历得到了每一项

    return 'item'+item;
})
console.log(result);



//过滤
var result = array1.filter(function(item, index){

    return item%2!=1;
    //return true 新的数组保留这个item
    //return false 新的数组保留删除item

})
console.log(result);



//查找
var result = array1.find(function(item, index){
    console.log('执行查找'+index);
    //查找条件
    if(item%2==0){
        return true;//查找到了，该item作为返回值
    }
    else{
        return false;
    }
    
})
console.log(result);


var result = array1.findIndex(function(item, index){
    console.log('执行查找'+index);
    //查找条件
    if(item%2==0){
        return true;//查找到了，该index作为返回值
    }
    else{
        return false;
    }
    
})
console.log(result);







