function add(x: number, y: number, z?:number) {
    if(z) {
        return x + y + z
    }
    return x + y
}

let result = add(2,3)

