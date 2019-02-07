var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TeaMaterial = /** @class */ (function () {
    function TeaMaterial() {
        this.volume = 1000;
    }
    TeaMaterial.prototype.get = function (volume) {
        if (this.has(volume) === true) {
            this.volume = this.volume - volume;
            return volume;
        }
        throw new Error('Material is done!');
    };
    TeaMaterial.prototype.isExist = function (volume) {
        return this.has(volume);
    };
    TeaMaterial.prototype.has = function (volume) {
        if (this.volume >= volume) {
            return true;
        }
        return false;
    };
    return TeaMaterial;
}());
var Sugar = /** @class */ (function (_super) {
    __extends(Sugar, _super);
    function Sugar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sugar.prototype.get = function (volume) {
        try {
            return _super.prototype.get.call(this, volume);
        }
        catch (e) {
            throw new Error('Sugar is done!');
        }
    };
    return Sugar;
}(TeaMaterial));
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tea.prototype.get = function (volume) {
        try {
            return _super.prototype.get.call(this, volume);
        }
        catch (e) {
            throw new Error('Tea is done!');
        }
    };
    return Tea;
}(TeaMaterial));
var Water = /** @class */ (function (_super) {
    __extends(Water, _super);
    function Water() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Water.prototype.get = function (volume) {
        try {
            return _super.prototype.get.call(this, volume);
        }
        catch (e) {
            throw new Error('Water is done!');
        }
    };
    return Water;
}(TeaMaterial));
var TeaMachine = /** @class */ (function () {
    function TeaMachine(sugar, tea, water) {
        this.sugar = sugar;
        this.tea = tea;
        this.water = water;
    }
    TeaMachine.prototype.getTea = function () {
        var sugarToCreate = 20;
        var teaToCreate = 50;
        var waterToCreate = 100;
        if (this.has(waterToCreate, teaToCreate, sugarToCreate) !== true) {
            throw new Error('We are dont make Tea!');
        }
        var tea = this.createTea('Tea', waterToCreate, teaToCreate, sugarToCreate);
        return tea;
    };
    //############
    TeaMachine.prototype.createTea = function (name, sugar, tea, water) {
        var makeWater = this.water.get(water);
        var makeCoffe = this.tea.get(tea);
        var makeSugar = this.sugar.get(sugar);
        return {
            name: name,
            description: 'Created!'
        };
    };
    TeaMachine.prototype.has = function (water, tea, sugar) {
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
    };
    return TeaMachine;
}());
var teaMachine = new TeaMachine(new Sugar(), new Tea(), new Water());
window['_'] = teaMachine;
