// 接口：是一种能力，一种约束
(() => {
    // 输出姓名
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 定义一个对象
    var person = {
        firstName: '布拉德',
        lastName: '皮特'
    };
    showFullName(person);
})();
