function add(x: number, y: number, z?:number) {
    if(z) {
        return x + y + z
    }
    return x + y
}

let result = add(2,3)



// function plus(a: number, b: number):number {
//     return a + b
// }
// const a = plus
// console.log(a)


// interface IPlus {
//     (a: number, b:number) : number
// }
// function plus(a: number, b: number):number {
//     return a + b
// }
// const aa: IPlus = plus
// console.log(aa)



// interface IPlus<T> {
//     (a: T, b: T) : T
// }
// function plus(a: number, b: number):number {
//     return a + b
// }
//
// function connect(a: string,b: string): string {
//     return  a + b
// }
// const aaa: IPlus<number> = plus
// const bbb: IPlus<string> = connect
