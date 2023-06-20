// 1.字面量进行类型声明，值不可以再修改
let a:10;
// 值不可修改
// a = 20;

// 指定值的选择内容,用 | 链接多个类型(联合类型)
let b: "male" | "female" | true;
b = "male"
b = "female"
b = true
// 错误
// b = "b"

// 链接多个类型(联合类型)
let c: number |boolean;


// 2. any：任意类型，用any定义后相当于关闭了TS的类型检测
let d:any;
// d的类型为any，他可以赋值给任意变量,赋值后的变量也会被传染成any
b = d
// 如果只定义不赋值的话，也是为any类型
let e;
e = "hello";

// 3. unknown 表示未知类型值，就是一个安全类型的any，不能直接赋值给其他变量
let f:unknown;
f = "hello"
f = 123
// 错误 f为unknown c为number | boolean,不可以赋值
// c = f;

// 方式1. 直接赋值失败，可以添加判断后再赋值
if(typeof f === "number") {
    c = f;
}
// 方式2. 类型断言赋值，下面两个时等同的方式
c = f as number;
c = <number> f;

// 4. void 一般用来设置函数的返回值，如果不写返回值类型代表的是any
function fun():void {}
function fun2():number | string { return 1 }

// 5. never 表示永远不会返回结果
function fun3():never {
    throw new Error(`报错了！`)
}

// 6. object
let j:object;
j = {};
j = function () {};

let k:{name:string};

k = {name:' 张三'}
// 错误,k定义时只有name
// k = {name:' 张三', age:12}

// 加上问号，表示可有可无
let l:{name:string, age?:number};
l = {name:' 张三'}
l = {name:' 张三', age:12}
// 错误
// l = {name:' 张三', age:12, a:1, b:2}

// [propName:string]: any 表示属性名为字符串，值为任意
let m:{name:string, age?:number, [propName:string]: any};
m = {name:' 张三', age:12, a:1, b:2}

// n表示为一个函数，函数两个参数都为number类型，返回值为number
let n:(a:number,b:number) => number;

n = function (a,b):number { return 1}

// 7. array
let o:number[]; // 第一种表达方式
o = [1,2,3]
// 错误
//o = ['a','b']

let p:Array<number>; // 第二种表达方式

// 8.tuple 元组，固定长度的数组
let q:[string,number];
q = ["a",12]

// 8.enum 枚举
enum Gender {
    Male,
    Female
}
enum Gender2 {
    Male = 2,
    Female
}
let r:{name:string, gender: Gender}
r = {
    name: '张三',
    gender: Gender.Male
}

let s:{name:string} & {age: number}
s = {name:'张三', age: 12}

type myType = 1 | 2 | 3
let t: myType
t = 2
// 错误
// t = 4
