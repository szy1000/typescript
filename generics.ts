// 泛型
const echo = (arg: number):number  => arg

const res: number = echo(3)
console.log(res)

//  为了控制输入类型和输出类型保持一致


function keepSym<T>(arg:T):T {
    return arg
}

const ipt: number = 123
const result:number = keepSym(ipt)
console.log(result)

//交换类型

function swap<T,U>(argus: [T,U]):[U, T] {
    return [argus[1], argus[0]]
}

//约束泛型
function echoWithArr<T>(arg: T[]) :T[] {
    console.log(arg.length)
    return arg
}

// 仅仅支持数组类型
// console.log(echoWithArr('str'))


interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength> (arg: T):T {
    console.log(arg.length)
    return arg
}
// 只要有length属性即可
console.log(echoWithLength('str'))
console.log(echoWithLength([]));
// console.log(echoWithLength(1));
console.log(echoWithLength({length: 1}))

// 泛类约束
class Queue<T> {
    private data = []
    push(item:T) {
        return this.data.push(item)
    }
    pop():T {
        return this.data.shift()
    }
}


const queue = new Queue<number>()
queue.push(1)
// queue.push('str')
console.log(queue)


const queue2 = new Queue<string>()
queue2.push('1')
// queue.push('str')
console.log(queue2)


interface KeyPair<T,U> {
    key: T;
    value: U
}


let kp1: KeyPair<number, string> = {
    key: 123,
    value: 'str'
}


let kp2: KeyPair<string, number> = {
    key: '123',
    value: 1234
}


let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3]
