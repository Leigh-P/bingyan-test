
    function createPerson(name, age, job) {
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function () {
            alert(this.name);
        };
        return o;
    }

    //构造函数模式
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        /*this.sayName = function () {
            alert(this.name);
        };*/
        this.sayName = sayName;
    }

    function sayName(){
        alert(this.name);
    }

    var Person = new Person('name','age','job');//

    Person ('name','age','job');//window

    var o = new Object();
    Person.call(o,'name','age','job')
    
    //prototype 原型模式
    function Person(){

    }
    Person.prototype = {
        name:'...',
        age:'...',
        job:'...'
    }
    var keys = Object.keys(Person.prototype);//Object.getOwnPropertyNames()获取所有实例属性
    // 两种方法可代替for in 循环
    var p1 = new Person();
    p1.name = '...';
    p1.age = '...';
    var p1keys = Object.keys(p1);

    //combine 构造函数模式 & 原型模式
    function Person(naem,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
        this.friends = ['..','...'];
    }
    Person.prototype = {
        constructor:Person,
        sayName:function(){
            alert(this.name);
        }

    }

    //稳妥构造函数（不引用this，没有公共属性）
    function Person(name,age,job){
        var o = new Object();
        o.sayName = function(){
            alert(name);
        };
        return o;
    }

    //原型链
    //存在引用类型共享问题 ？ 引用类型
    function SuperType(){
        this.property =true;
    }
    SuperType.prototype.getSuperValue = function (){
        return this.property;
    }
    function SubType (){
        this.subproperty = false;
    }
    SubType.prototype = new SuperType();
    SubType.prototype.getSubValue = function (){
        return this.subproperty;
    }
    var instance = new SubType();
    alert(instance.getSuperValue());

    // 构造函数
    function SuperType(){
        this.colors = ['red','blue','green'];
    }
    function SubType(){
        //调用supertype构造函数
        SuperType.call(this);
    }

    //combine 原型链 & 构造函数
    //构造函数
    function SuperType(name){
        this.name = name,
        this.colors = ['red','blue','green'];
    }
    SuperType.prototype.sayName = function (){
        alert(this.name);
    };
    function SubType(name,age){
        SuperType.call(this,name);
        this.age = age;
    }
    //原型链
    SubType.prototype = new SuperType();
    SubType.prototype.constructor = SubType;
    SubType.prototype.sayAge = function (){
        alert(this.age);
    }
    
    function object(o){
        function F(){};
        F.prototype = o;
        return new F;
    }
    //寄生组合式继承
    function inheritPrototype(SubType,SuperType){
        var prototype =  object(SuperType.prototype);
        prototype.constructor = SubType;
        SubType.prototype = prototype;
    }

