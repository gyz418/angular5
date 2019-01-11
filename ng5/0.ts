/*
* typeScript   type+ es6
* 应用于大型团队 5人以上团队
* angular官方推荐
* */
let foo: string = 'bar'
// foo=[]  // 写代码时，类型出错会提示

let bool: boolean = true
let num: number = 10
let arr: number[] = [1, 2, 3]    // 纯数字数组
let arr2: string[] = ['a', 'b']  // 组字符串数组
let x: [string, number] = ['abc', 12]  // 还是很复杂

let user: {
  name: string,   // 对象属性指定类型
  age: number
} = {
  name: 'kang',
  age: 12
}
console.log(user.name);

// 接口类型限制
interface Person {
  name: string,
  age: number
}

let stu: Person = {
  name: 'kang',
  age: 12
}
let teacher: Person = {
  name: 'mr',
  age: 30
}

let num2: any = 10   // 任意类型 少用
num2 = '20'

function add(x: number, y: number): number {
  return x + y
}

let res: number = add(10, 20)

function fn(): void {
  console.log('函数无返回值用void');
}

// 数组解构
let arr3: number[] = [1, 2]
let [a, b] = arr3

// 对象解构
let obj = {
  name: 'kang',
  age: 33
}
let {name: realName, age} = obj  // 一、ts需要重名，纯es6不需要    name重名 为 realName

// 剩余参数
function sum(...param: number[]): number {
  let ret = 0;
  param.forEach((item) => {
    ret += item
  })
  return ret
}

sum(1, 2, 3, 5)

let obj11 = {
  name: 'kang'
}
let obj12 = {
  ...obj11,
  age: 20
}

// 构造函数
function Person(name: string, age: number) {
  this.name = name
  this.age = age
}

Person.prototype.sayHello = function (): void {
  console.log(this.name);
}
let p1 = new Person("kang", 12)
p1.sayHello()

class Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    // ts 要求类的成员要先定义
    this.name = name
    this.age = age
  }

  sayHello2(): void {
    console.log(this.age);
  }
}

class Person3 {
  // 私有成员，类内部用，无法用new 实例获取
  public name: string;
  age: number; // 默认public   二、ts才有public private    es6没
  private type: string = '人类'  // 私有成员，无法被继承
  private readonly type2: string = '人类2'  // 只读 无法修改
  protected hobby: string = 'play' // 私有成员，可继承
  static birth:string='2019'    // 静态变量
  getType() {
    return this.type
  }
}

console.log(Person3.birth);

class Person4 {
  constructor(public name: string, public age: string) {
    this.name = name;
    this.age = age;
  }
}

/*
*  get()    set()
*
* */
class Person5{
  private _age:number;
  get age(){
    return this._age
  }
  set age(val){
    if(val<0){
      throw new Error('年龄不能为负数')
    }
    this._age=val;
  }
}
let p5 = new Person5()
p5.age=-10;


/*
* 在线ts  https://www.tslang.cn/play/index.html
* 本地ts环境
* npm i -g typescript
* tsc -v   3.2.2
*
* tsc 0.ts  ->  生成 0.js
* */
