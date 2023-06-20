// 声明一个变量名a，指定类型为number
let a:number;
let str:string = 'hello world';
let b:boolean = true;
// 在定义变量声明时并同时赋值，可以不用加类型，编译器会根据变量自动判断
let bb = true;

// 错误
// bb = 123;

a = 12;
a = 13.2;

// 此处错误a为number类型，不能赋值为字符串类型
// a = "hello";

// 形参加上类型声明
// 函数后面:nubmer表示返回值类型
function sum(x:number, y:number):number {
    return x + y;
}