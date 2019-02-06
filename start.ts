

class Milk {
    private volume: number = 1000;

    public getMilk(volume: number): number {
        if (this.has(volume) === true) {
            this.volume = this.volume - volume;
            return volume;
        }

        throw new Error('Milk is done!');
    }

    public isExist(volume: number): boolean {
        return this.has(volume);
    }

    private has(volume: number): boolean {
        if (this.volume >= volume) {
            return true;
        }

        return false;
    }
}

class Coffe {
    private volume: number = 1000;

    public getCoffe(volume: number): number {
        if (this.has(volume) === true) {
            this.volume = this.volume - volume;
            return volume;
        }

        throw new Error('Coffe is done!');
    }

    public isExist(volume: number): boolean {
        return this.has(volume);
    }

    private has(volume: number): boolean {
        if (this.volume >= volume) {
            return true;
        }

        return false;
    }
}

class Water {
    private volume: number = 1000;

    public getVolume(): number {
        return this.volume;
    }

    public getWater(volume: number): number {
        if (this.has(volume) === true) {
            this.volume = this.volume - volume;

            return volume;
        }

        throw new Error('Water is done!');
    }

    public isExist(volume: number): boolean {
        return this.has(volume);
    }

    private has(volume: number): boolean {
        if (this.volume >= volume) {
            return true;
        }

        return false;
    }
}

interface CoffeInterface {
    name: string;
    description: string
}

class CoffeMachine {
    constructor(
        private milk: Milk,
        private coffe: Coffe,
        private water: Water
    ) {}

    public getLatte(): CoffeInterface {
        const waterToCreate: number = 100;
        const coffeToCreate: number = 100;
        const milkToCreate: number = 100;

        if (this.has(waterToCreate, coffeToCreate, milkToCreate) !== true) {
            throw new Error('We are dont make Latte!')
        }

        const latte: CoffeInterface = this.createCoffe(
            'Latte',
            waterToCreate,
            coffeToCreate,
            milkToCreate
        );

        return latte;
    }

    public getCapuchino(): CoffeInterface {
        const waterToCreate: number = 100;
        const coffeToCreate: number = 20;
        const milkToCreate: number = 50;

        if (this.has(waterToCreate, coffeToCreate, milkToCreate) !== true) {
            throw new Error('We are dont make Capuchino')
        }

        const capuchino: CoffeInterface = this.createCoffe(
            'Capuchino',
            waterToCreate,
            coffeToCreate,
            milkToCreate
        );

        return capuchino;
    }

    public getAmericano(): CoffeInterface {
        const waterToCreate: number = 100;
        const coffeToCreate: number = 20;

        if (this.has(waterToCreate, coffeToCreate) !== true) {
            throw new Error('We are dont make Americano')
        }

        const americano: CoffeInterface = this.createCoffe(
            'Americano',
            waterToCreate,
            coffeToCreate
        );

        return americano;
    }

    //############

    private createCoffe(
        name: string,
        water: number,
        coffe: number,
        milk?: number
    ): CoffeInterface {
        const makeWater = this.water.getWater(water);
        const makeCoffe = this.coffe.getCoffe(coffe);
        let makeMilk;

        if (milk !== undefined) {
            makeMilk = this.milk.getMilk(milk);
        }

        return {
            name: name,
            description: 'Created!'
        }

    }

    private has(water: number, coffe: number, milk?: number): boolean {
        if (this.water.isExist(water) !== true) {
            return false;
        }

        if (this.coffe.isExist(water) !== true) {
            return;
        }

        if (milk !== undefined && this.milk.isExist(water) !== true) {
            return false;
        }

        return true;
    }
}

const coffeMachine: CoffeMachine = new CoffeMachine(
    new Milk(),
    new Coffe(),
    new Water()
);

window['_'] = coffeMachine;

// const myLatte = coffeMachine.getLatte();

// console.log(myLatte.description);