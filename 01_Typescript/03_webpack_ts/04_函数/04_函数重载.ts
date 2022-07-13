// 函数重载：函数名字相同，函数的参数及个数不同
(() => {
  // 定义一个函数
  // 需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加

  // 函数重载声明
  function add(x: string, y: string): string
  function add(x: number, y: number): number

  function add(x: string | number, y: string | number): string | number {
    if (typeof x === 'string' && typeof y === 'string') {
      return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
  }

  console.log(add('中森', '明菜'));

  console.log(add(1, 2));

  console.log(add(1, '凉子'));
  console.log(add('中森', 2));



})()