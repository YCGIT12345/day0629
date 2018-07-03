//promise 

/*
var p = new Promise((resolve, reject)=>{

    //异步操作

    // 操作完成，成功
    // reject();

    var str = '1234';
    str.map(item=>{
        console.log(item);
    })



})


p.then(
    ()=>{
        console.log('执行了1');
    },
    (error)=>{
        console.log('执行了2');
        console.log(error);
    }
)
.catch(
    ()=>{
        console.log('执行了3');
    }
)

*/


/*
//
let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('p1执行了');
        reject();
    }, 2000);
    
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('p2执行了');
        resolve();
    }, 1000);
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('p3执行了');
        resolve();
    }, 4000);  
})
//所有的promise都执行完成才执行then
// 所有的promise有一个出错就执行catch
Promise.all([p1, p2, p3])
.then(
    ()=>{
        console.log('请求都完成了');
    }
)
.catch(
    ()=>{
        console.log('请求失败了');
    }
)
*/




let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('p1执行了');
        resolve(['item1']);
        // reject();
    }, 2000);
    
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('p2执行了');
        // resolve(['item2']);
        reject();
    }, 6000);
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('p3执行了');
        // resolve(['item3']);
        reject();
    }, 4000);  
})

//谁走的快结果就是谁
Promise.race([p1, p2, p3])
.then(
    (data)=>{
        console.log('请求都完成了');
        console.log(data);
    }
)
.catch(
    ()=>{
        console.log('请求失败了');
    }
)




