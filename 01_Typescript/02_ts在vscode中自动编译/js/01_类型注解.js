// 类型注解：是一种轻量级的为函数或者变量添加的约束
(() => {
    function showMsg(str) {
        return '窗前明月光,' + str;
    }
    let msg = '疑似地上霜';
    console.log(showMsg(msg));
})();
