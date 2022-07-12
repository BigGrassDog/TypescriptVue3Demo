// 类：可与理解为模板，通过模板可以实例化兑现
// 面向对象的编程思想
(() => {
  // ts中类的定义及适使用
  class Person {
    // 定义属性
    name: string
    age: number
    gender: string

    // 定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化
    constructor(name: string = '中森明菜', age: number = 20, gender: string = '女') {
      // 更新对象中的属性数据
      this.name = name
      this.age = age
      this.gender = gender
    }

    // 定义实例方法
    sayHi(str: string) {
      console.log(`大家好，我是${this.name},今年${this.age},岁了,是个${this.gender}孩子,` + str);

    }
  }

  const person1 = new Person('广末凉子', 18, '女')

  person1.sayHi('过来玩啊')
})()