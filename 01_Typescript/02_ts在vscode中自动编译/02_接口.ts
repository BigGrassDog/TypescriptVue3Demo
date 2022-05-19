// 接口：是一种能力，一种约束
(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string,
    lastName: string
  }

  // 输出姓名
  function showFullName(person:IPerson){
    return person.firstName + '_' + person.lastName
  }

  // 定义一个对象
  var person = {
    firstName:'布拉德',
    lastName:'皮特'
  }
  showFullName(person)
})()