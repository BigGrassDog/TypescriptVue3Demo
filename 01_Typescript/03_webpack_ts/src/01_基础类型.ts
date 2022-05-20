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
  let str5:string = '广末凉子天下第一'
  let num:number = 1000
  console.log(str5 + num);
  
  //总结：ts中变量一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，是不允许用其他类型的数据赋值给当前的这个变量

  console.log('---------------------------');
  
  let und:undefined = undefined
  let nll:null = null
  console.log(und);
  console.log(nll);
  // undefined 和 null 都可以作为其他类型的子类型，把 undefined 和 null 赋值给其他类型的变量的，如:number 类型的变量
  // let num2:number = undefined
  let num2:number = null
  console.log(num2);
  

})()