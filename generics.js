// 泛型
var echo = function (arg) { return arg; };
var res = echo(3);
console.log(res);
//  为了控制输入类型和输出类型保持一致
function keepSym(arg) {
    return arg;
}
var ipt = 123;
var result = keepSym(ipt);
console.log(result);
//交换类型
function swap(argus) {
    return [argus[1], argus[0]];
}
//约束泛型
function echoWithArr(arg) {
    console.log(arg.length);
    return arg;
}
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
// 只要有length属性即可
console.log(echoWithLength('str'));
console.log(echoWithLength([]));
// console.log(echoWithLength(1));
console.log(echoWithLength({ length: 1 }));
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.push('str');
console.log(queue);
