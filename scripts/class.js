function A(name, age) {
    this.name = name
    this.age = age
}
A.prototype.sayHi = function () {
    console.log(`Hello! I'm ${this.name} and ${this.age} years old.`)
}
//es5构建原型方法：构建函数，添加方法
/*
*  extends one class from another one class
*  @param  {function} contructor
*  @param  {object} methods set
*  @return {object} instance
*/
//es6写法，class创建原型；在类A原型上创建类B
class B extends A {
    constructor(name, age) {
        super(name, age);
    }
    sing() {
        console.log(`${this.name} is singing`)
    }
    dance() {
        console.log(`${this.name} is dancing`)
    }
}
const instanceB = new B('Mondo', 21);

instanceB.sayHi()	//  Hello! I'm Mondo and 21 years old.
instanceB.sing()	//  Mondo is singing
instanceB.dance()	//  Mondo is dancing
