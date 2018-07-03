// 模板字符串

var list =['item1', 'item2', 'item3'];

var html = '<ul>\
            <li >'+list[0]+'</li>\
            <li >'+list[1]+'</li>\
            <li >'+list[2]+'</li>\
            </ul>';


var htmlstr = `
    <ul>
    <li >${list[0]}</li>
    <li >${list[1]}</li>
    <li >${list[2]}</li>
    </ul>
`;

document.querySelector('.content').innerHTML = htmlstr;


//新增方法
var str = 'qianfeng';

//判断字符串是否拥有指定的前缀
var value = str.startsWith('q');

//判断字符串是否拥有指定的后缀
var value = str.endsWith('q');

//判断字符串是否包含指定的子字符串
var value = str.includes('q');