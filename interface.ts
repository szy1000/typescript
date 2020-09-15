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


// implements
interface Radio {
    switchRadio():void
}


interface Battery {
    checkBatteryStatus():void
}

// 合二为一

interface RadioWithBattery extends Radio{
    checkBatteryStatus():void
}

class Car implements Radio{
    switchRadio() {

    }
}

class CellPhone implements Radio,Battery{
    switchRadio() {

    }
    checkBatteryStatus() {

    }
}

class CellPhone2 implements RadioWithBattery{
    switchRadio() {
    }
    checkBatteryStatus() {

    }
}
