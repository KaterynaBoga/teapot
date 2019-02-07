abstract class TeaMaterial {
    protected volume: number = 1000;

    public get(volume: number): number {
        if (this.has(volume) === true) {
            this.volume = this.volume - volume;
            return volume;
        }

        throw new Error('Material is done!');
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

class Sugar extends TeaMaterial {
   public get(volume: number): number {
       try {
           return super.get(volume);
       } catch (e) {
           throw new Error('Sugar is done!');
       }
   }
}

class Tea extends TeaMaterial {
    public get(volume: number): number {
        try {
            return super.get(volume);
        } catch (e) {
            throw new Error('Tea is done!');
        }
    }
}

class Water extends TeaMaterial {
    public get(volume: number): number {
        try {
            return super.get(volume);
        } catch (e) {
            throw new Error('Water is done!');
        }
    }
}

interface TeaInterface {
    name: string;
    description: string
}

class TeaMachine {
    constructor(
        private sugar: Sugar,
        private tea: Tea,
        private water: Water
    ) {}

    public getTea(): TeaInterface {
        const sugarToCreate: number = 20;
        const teaToCreate: number = 50;
        const waterToCreate: number = 100;

        if (this.has(waterToCreate, teaToCreate, sugarToCreate) !== true) {
            throw new Error('We are dont make Tea!')
        }

        const tea: TeaInterface = this.createTea(
            'Tea',
            waterToCreate,
            teaToCreate,
            sugarToCreate
        );

        return tea;
    }



    //############

    private createTea(
        name: string,
        sugar: number,
        tea: number,
        water: number
    ): TeaInterface {
        const makeWater = this.water.get(water);
        const makeCoffe = this.tea.get(tea);
        const makeSugar = this.sugar.get(sugar);

        return {
            name: name,
            description: 'Created!'
        }

    }

    private has(water: number, tea: number, sugar: number): boolean {
        if (this.water.isExist(water) !== true) {
            return false;
        }

        if (this.tea.isExist(water) !== true) {
            return;
        }

        if (this.sugar.isExist(water) !== true) {
            return false;
        }

        return true;
    }
}

const teaMachine: TeaMachine = new TeaMachine(
    new Sugar(),
    new Tea(),
    new Water()
);

window['_'] = teaMachine;

