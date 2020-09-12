interface IPerson {
    readonly id: number;
    name: string;
    age: number;
    sex?: number
}

let Shen: IPerson = {
    id: 1,
    name: 'shen',
    age: 20
}
//readonly
// Shen.id = 2

console.log(Shen)
