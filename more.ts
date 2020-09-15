// type aliases

function sum(x: number, y:number):number {
    return x + y
}

// const sum2:(x: number, y:number):number {
//     return x + y
// }

// const sum2: (x: number, y:number) => number = sum
// type PlusType = (x: number, y:number) => number
// const sum2: PlusType = sum

// 类型别名
type NameResolver = () => string

type NameOrResolver = string | NameResolver

function getName(n: NameOrResolver): string {
    if(typeof n === 'string') {
        return n
    }else {
        return n()
    }
}


// type assertion  类型断言
// 访问一个不确定元素的类型

function getLen(input: string| number) {
    // const str = input as String
    // if(str.length) {
    //     return str.length
    // }else {
    //     const number = input as Number
    //     return number.toString().length
    // }
    if((<string>input).length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
}
