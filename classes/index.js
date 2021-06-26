var weapons = require("../weapons");
var races = require("../races")

class weapon{
    constructor(index){
        var list = weapons;
        var obj = typeof index == "string"? list.find(e=>e.name == index):
                  typeof index == "number"? list[index]: 
                  index;
        
        if(typeof obj == "undefined") throw ""

        Object.assign(this, obj);
    }
}

class race {
    constructor(index){
        var list = races;
        var obj = typeof index == "string"? list.find(e=>e.name == index):
                  typeof index == "number"? list[index]: 
                  index;
        
        if(typeof obj == "undefined") throw ""

        this.race = {}
        Object.assign(this.race, obj);
    }
}

class entity extends race {
    constructor(obj){
        if(typeof obj != "object") throw ""

        super(obj.race? obj.race: "Human");

        this.name = obj.name;

        this.fullHp = obj.fullHp;
        this.hp = obj.hp? obj.hp: obj.fullHp;

        this.fullMp = obj.fullMp;
        this.mp = obj.mp? obj.mp: obj.fullMp;

        this.inventory = [new weapon("Hands")];
        this.equiped = this.inventory[0];

        obj.resistences = {}
        obj.status = {}

        this.status = {
            str: obj.status.str/* ,
            dex: obj.status.dex,
            int: obj.status.int,
            fai: obj.status.fai, */
        }

        this.resistences = {
            heat: obj.resistences.heat/* , 
            cold: obj.resistences.cold,
            poison: obj.resistences.poison,
            darkness: obj.resistences.darkness,
            holy: obj.resistences.holy */
        }
    }
}

module.exports = {
    weapon: weapon,
    race: race,
    entity: entity
} 