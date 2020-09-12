let isDone: boolean = false

let age: number = 20
console.log(isDone,age)

// 联合类型
let numberOrString: number | string = '2'

numberOrString.charAt(0)


let arrOfNumbers: number[] = [1,2,3,4]

arrOfNumbers.push(5)

function test() {
    console.log(arguments)
    // 类数组
    // let arr: any[] = arguments
}

// tuple
let userArr: [string, number] = ['shen', 20]
// userArr = ['shen', 20, 2]





