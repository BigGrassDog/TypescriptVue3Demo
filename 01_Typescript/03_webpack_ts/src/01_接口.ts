// 接口是对象的状态（属性）和行为（方法）的抽象（秒睡）
// 接口：是一种类型，一种规范，一种规则，一个能力，一种约束
(() => {
  //   需求: 创建人的对象, 需要对人的属性进行一定的约束

  // id是number类型, 必须有, 只读的
  // name是string类型, 必须有
  // age是number类型, 必须有
  // sex是string类型, 可以没有

  // 定义一个接口，该接口作为person对象的类型使用，限定或者是约束该对象中的属性数据
  interface IPerson {
    readonly id:number,
    name:string,
    age:number,
    sex?:string
  }

  // 定义一个对象，该对象类型就是我定义的接口IPerson
  const person:IPerson = {
    id:1,
    name:'中森明菜',
    age:18
  }
  console.log(person);
  
})()