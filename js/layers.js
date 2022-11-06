addLayer("n", {
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "numbers", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if(hasUpgrade('n',35))mult=mult.times(upgradeEffect('n',35))
        if(hasUpgrade('n',13))mult=mult.times(upgradeEffect('n',13))
        if(hasUpgrade('n',15))mult=mult.times(upgradeEffect('n',15))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: Reset for numbers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades:{
        11:{
            title:"-∞+∞i",
        cost(){return new Decimal(!hasUpgrade('n',51)?1/0:1e7)},
        description:"Unlock Addition.",
        effect(){return player.n.points.add(10).log(10).pow(1.5)},
        effectDisplay(){return format(upgradeEffect('n',13))+"x"},
        style(){
            if(hasUpgrade('n',51))return;
            return{"background-color":"#0f0f0f"}
        },
    },
        12:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        13:{
            title:"∞i",
            cost(){return new Decimal(!hasUpgrade('n',35)?1/0:100)},
            description:"Number boost Number gain.",
            effect(){return player.n.points.add(10).log(10).pow(1.5)},
            effectDisplay(){return format(upgradeEffect('n',13))+"x"},
            style(){
                if(hasUpgrade('n',35))return;
                return{"background-color":"#0f0f0f"}
            },
        },
        14:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        15:{
            title:"∞+∞i",
            cost(){return new Decimal(!hasUpgrade('n',13)?1/0:2500)},
            description:"Number gain is boosted by upgrades amount.",
            effect(){return D(2).pow(Decimal.pow(player.n.upgrades.length,0.5))},
            effectDisplay(){return format(upgradeEffect('n',15))+"x"},
            style(){
                if(hasUpgrade('n',13))return;
                return{"background-color":"#0f0f0f"}
            },
        },
        21:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        22:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        23:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        24:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        25:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        31:{
            title:"-∞",
            cost(){return new Decimal(!hasUpgrade('n',33)?1/0:5)},
            description:"Number boost Point gain.",
            effect(){return player.n.points.add(10).log(10).pow(3)},
            effectDisplay(){return format(upgradeEffect('n',31))+"x"},
            style(){
                if(hasUpgrade('n',33))return;
                return{"background-color":"#0f0f0f"}
            },
        },
        32:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        33:{
            title:"0",
            cost:new Decimal(1),
            description:"Point gain x4.",
            
        },
        34:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        35:{
            title:"∞",
            cost(){return new Decimal(!hasUpgrade('n',33)?1/0:5)},
            description:"Point boost Number gain.",
            effect(){return player.points.add(10).log(10)},
            effectDisplay(){return format(upgradeEffect('n',35))+"x"},
            style(){
                if(hasUpgrade('n',33))return;
                return{"background-color":"#0f0f0f"}
            },
        },
        41:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        42:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        43:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        44:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        45:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        51:{
            title:"-∞+(-∞i)",
            cost(){return new Decimal(!hasUpgrade('n',53)?1/0:2500)},
            description:"Point gain is boosted by upgrades amount.",
            effect(){return D(2).pow(Decimal.pow(player.n.upgrades.length,1))},
            effectDisplay(){return format(upgradeEffect('n',51))+"x"},
            style(){
                if(hasUpgrade('n',53))return;
                return{"background-color":"#0f0f0f"}
            },
        },
        52:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        53:{
            title:"-∞i",
            cost(){return new Decimal(!hasUpgrade('n',31)?1/0:100)},
            description:"Point boost Point gain.",
            effect(){return player.points.add(10).log(10).pow(1.5)},
            effectDisplay(){return format(upgradeEffect('n',53))+"x"},
            style(){
                if(hasUpgrade('n',31))return;
                return{"background-color":"#0f0f0f"}
            },
        },
        54:{style(){return{"background-color":"#0f0f0f"}},cost:new Decimal(1/0),},
        55:{
            title:"∞+(-∞i)",
        cost(){return new Decimal(!hasUpgrade('n',15)?1/0:1e7)},
        description:"Unlock Subtraction.",
        style(){
            if(hasUpgrade('n',15))return;
            return{"background-color":"#0f0f0f"}
        },
        },
    }
})

function D(x){return new Decimal(x)}     