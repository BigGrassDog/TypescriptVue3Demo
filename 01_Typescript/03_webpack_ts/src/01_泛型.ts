// 泛型：在定义函数、接口、类的时候不能预先确定要使用的数据类型，而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
  // 需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应个数的数据，存放在一个数组中
  // 定义一个函数
  function getArr(data: number, count: number): number[] {
    // 根据数据和数量产生一个数组
    const arr: number[] = []
    for (let i = 0; i < count; i++) {
      arr.push(data)
    }
    return arr
  }

  const arr1 = getArr(100.123,3)
  console.log(arr1);

  // 定义一个函数，同上，只不过传入的是字符串类型
  function getArr2(data: string, count: number): string[] {
    // 根据数据和数量产生一个数组
    const arr: string[] = []
    for (let i = 0; i < count; i++) {
      arr.push(data)
    }
    return arr
  }
  const arr2 = getArr2('abc',3)
  console.log(arr2);

  // 可以传入任意类型的数据，返回来的是存储这个任意类型数据的数组 
  function getArr3(data: any, count: number): any[] {
    // 根据数据和数量产生一个数组
    const arr: any[] = []
    for (let i = 0; i < count; i++) {
      arr.push(data)
    }
    return arr
  }
  const arr3 = getArr3([1,2,3],10)
  console.log(arr3);
  
})()