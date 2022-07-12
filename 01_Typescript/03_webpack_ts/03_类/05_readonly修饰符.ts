// readonly 修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员，就不能在外部被随意的修改了。
// 构造函数中，可以对只读的属性成员的数据进行修改
// 如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly进行修饰了，那么外部也是不能对这个属性值进行更改的
// 构造函数中的参数可以使用 readonly 进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问，但是不能修改
// 构造函数中的参数可以使用 public 及 private 和 protected 进行修饰，无论是哪个进行修饰，该类中都会自动的添加这么一个属性成员

(() => {
  // 定义一个类
  class Person {
    readonly name: string
    constructor(name: string) {
      this.name = name
    }
    sayHi(){
      console.log('你好,我是',this.name);
      
    }
  }

  const per = new Person('广末凉子')
  per.sayHi()
  console.log(per.name);
  
})()