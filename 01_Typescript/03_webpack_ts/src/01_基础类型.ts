// 基础类型
(() => {
  // 布尔类型----> boolean
  // 基本语法
  // let 变量名:数据类型 = 值
  let flag: boolean = true
  console.log(flag);

  // 数字类型----> number
  let a1: number = 10 // 十进制
  let a2: number = 0b1010 // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1);
  console.log(a2);
  console.log(a3);
  console.log(a4);

  //字符串类型----> string
  let str1: string = '宇多田光'
  let str2: string = '广末凉子'
  let str3: string = '中森明菜'
  let str4: string = '坂井泉水'
  console.log(`${str1},${str2},${str3},${str4}`);

  // 字符串和数字之间能够一起拼接
  let str5: string = '广末凉子天下第一'
  let num: number = 1000
  console.log(str5 + num);

  //总结：ts中变量一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，是不允许用其他类型的数据赋值给当前的这个变量

  console.log('---------------------------');

  let und: undefined = undefined
  let nll: null = null
  console.log(und);
  console.log(nll);
  // undefined 和 null 都可以作为其他类型的子类型，把 undefined 和 null 赋值给其他类型的变量的，如:number 类型的变量
  // let num2:number = undefined
  let num2: number = null
  // console.log(num2);

  console.log('----------------------------');

  // 数组类型
  // 数组定义方式1
  let arr1: number[] = [1, 2, 3, 4, 5, 6]
  // 数组定义方式2：泛型写法
  let arr2: Array<number> = [1, 2, 3, 4, 5, 6]

  // 注意问题：数组定义后，里面的数据类型必须和定义数组的时候的类型是一致的，否则有错误提示信息，也不会编译通过

  // 元组类型：在定义数组的时候，类型和数据的个数一开始就已经限定了
  let arr3: [string, number, boolean] = ['广末凉子', 100, true]
  // 注意问题：元组类型在使用的时候，数据的类型的位置和数据的个数，应该在和定义元组的时候的数据类型及位置应该是一致的

  console.log('---------------------------');

  // 枚举类型
  enum Color {
    red = 1,
    green,
    blue
  }
  // 定义一个Color的枚举类型的变量来接收枚举的值
  let color: Color = Color.red
  console.log(color);
  console.log(Color.red, Color.green, Color.blue);
  console.log(Color[3]);
  // 小例子，枚举中的元素可以是中文的数据值，但是不推荐
  enum Gender {
    女,
    男
  }
  console.log(Gender.男);

})()