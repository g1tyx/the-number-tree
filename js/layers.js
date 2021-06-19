addLayer("N", {
    name: "Numbers", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "Numbers", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (inChallenge('F', 33)|inChallenge('F',43)) mult = mult.times(0.000001)
        if (inChallenge('F', 31)) mult = mult.times(0.000001)
        if (hasMilestone('F',1580)) mult = mult.times(buyableEffect('N',13))
        if (hasUpgrade('F',15)) mult = mult.times(buyableEffect('N',11))
        if (hasUpgrade('F',15)&& !inChallenge('F',42)) mult = mult.times(2)
        if (inChallenge('F', 23)) mult = mult.times(0.2)
        if (hasChallenge('F', 11)) mult = mult.times(3)
        if (hasChallenge('F', 22)) mult = mult.times(2)
        if (hasUpgrade('F',12)) mult = mult.times(upgradeEffect('F', 12))
        if (inChallenge('F', 11)) mult = mult.times(0.2)
        if (inChallenge('F', 13)) mult = mult.times(0.2)
        if (hasChallenge('F', 12)) mult = mult.times(3)
        if (hasUpgrade('F',12)) mult = mult.times(upgradeEffect('F', 11))
       if (hasUpgrade('N',14)) mult = mult.times(upgradeEffect('N', 14))
       if (hasUpgrade('F',11)) mult = mult.times(upgradeEffect('F', 11))
        if (hasMilestone('F', 1)) mult = mult.times(player.F.points.add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let mult=new Decimal(1)
        if (hasMilestone('UF',11)) mult = mult.times(buyableEffect('N',21))
        if (hasMilestone('I',1)) mult = mult.times(1.05)

        return mult

    },


    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: Reset for Numbers", onPress(){if (canReset(this.layer)) doReset(this.layer)},
        onPress() { if (player.N.unlocked) doReset("N") },
    },
    ],
    

    doReset(resettingLayer) {
        let keep = [];
        if (hasChallenge("F", 21) && resettingLayer=="F") keep.push("upgrades")
        if (hasMilestone("UF", 1) && resettingLayer=="UF") keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer, keep)
    },
    upgrades: {
        rows: 3,
        cols: 5,
        11: {
            title: "1",
            description: "Points gain x3.",
            cost: new Decimal(2),
        },
        12: {
            title: "2",
            description:"Numbers boost point gain.",
            cost: new Decimal(5),
            effect() {
                if (inChallenge("F",33)) return 1
                if (inChallenge("F",32)) return 1
                if (inChallenge("F",23)) return 1
                if (inChallenge("F",21)) return 1000
                if (inChallenge("F",12)) return 1
                if (inChallenge("F",13)) return 1
                if (inChallenge("F",41)|inChallenge('F',43)) return 10
                if (player.N.points >=1e56&& !inChallenge('F',42)&& !inChallenge('F',43)) return 1e35
                if(hasUpgrade("F",23)&& !inChallenge('F',42)&& !inChallenge('F',43)) return player.N.points.pow(0.625).add(1)
                if (player.N.points >=1e24) return 1e15
                if(hasUpgrade("N",24)) return player.N.points.pow(0.625).add(1)
                if (player.N.points >=52281977629) return 5000000
                if(hasUpgrade("N",22)) return player.N.points.pow(0.625).add(1)
                if (player.N.points >=4641588) return 100000
                if(hasUpgrade("N",21)) return player.N.points.pow(0.75).add(1)
                if(hasUpgrade("N",15)) return 1000
                else return player.N.points.pow(0.5).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade("N", 11)
            },
        },
        13: {
            title: "3",
            description: "Points boost points gain.",
            cost: new Decimal(25),
            effect() {
                if (inChallenge("F",33)) return 1
                if (inChallenge("F",32)) return 1
                if (inChallenge("F",23)) return 30
                if (inChallenge("F",21)) return 30
                if (inChallenge("F",41)|inChallenge('F',43)) return 10
                if (player.points >= 2.91e111&&!inChallenge('F',42)&& !inChallenge('F',43)) return 1e35
            
                if(hasUpgrade("N",35)) return player.points.pow(0.314).add(1)
                if (player.points >= 7.0328889e+31&&!inChallenge('F',42)&& !inChallenge('F',43)) return 09
                if(hasUpgrade("F",14) && !inChallenge('F',42)) return player.points.pow(0.314).add(1)
                
        if (player.points >= 4.60e15) return 50000
        if(hasUpgrade("N",23)) return player.points.pow(0.3).add(1)
        if(hasUpgrade("N",15)) return 30
        else return player.points.pow(0.25).add(1)

            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade("N", 12)
            },
        },
        14: {
            title: "4",
            description: "Points boost Numbers gain.",
            cost: new Decimal(125),
            effect() {
                if (inChallenge("F",33)) return 1
                if (inChallenge("F",32)) return 1
                if (inChallenge("F",21)) return 20
                if (inChallenge("F",23)) return 20
                if (inChallenge("F",41)|inChallenge('F',43)) return 10
                if (player.points >= 2.15e83) return 1e25
                if(hasUpgrade("N",34)) return player.points.pow(0.3).add(1)
                if (player.points >= 4.64e26) return 1e8
                if(hasUpgrade("N",25)) return player.points.pow(0.3).add(1)
                if (player.points >= 471556031) return 400
                if(hasUpgrade("N",21)) return player.points.pow(0.3).add(1)
                if(hasUpgrade("N",15)) return 20
                else return player.points.add(1).pow(0.2)
              

            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade("N", 13)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            title: "5",
            description: "Boost '2', '3' and '4'.",
            cost: new Decimal(314),
    
            unlocked(){
                return hasUpgrade("N", 14)
            },
            
        },
        21: {
            title: "6",
            description: "Remove the first hardcap of '2' and '4'.",
            cost: new Decimal(111111),
    
            unlocked(){
                return hasMilestone('F', 1) && hasUpgrade("N", 15)
            },
            
        },
        22: {
            title: "7",
            description: "Remove the second hardcap of '2' but nerf it.",
            cost: new Decimal(420420420),
    
            unlocked(){
                return hasMilestone('F', 4) && hasUpgrade("N", 21)
            },
            
        },
        23: {
            title: "8",
            description: "Remove the first hardcap of '3'.",
            cost: new Decimal(1e15),
    
            unlocked(){
                return hasChallenge('F', 13) && hasUpgrade("N", 22)
            },
            
        },
        24: {
            title: "9",
            description: "Remove the third hardcap of '2'.You can buy this upgrade while you are in Factor Challenge 4.",
            cost(){ 
                if(player.F.activeChallenge!=21)return new Decimal(Infinity);
                return new Decimal(3.14e12);
            },
            unlocked(){
                return hasUpgrade('F', 13) && hasUpgrade("N", 23)
            
            },
            
        },
        25: {
            title: "10",
            description: "Remove the second hardcap of '4'.You can buy this upgrade while you are in Factor Challenge 5.",
            cost(){ 
                if(player.F.activeChallenge!=22)return new Decimal(Infinity);
                return new Decimal(3.14e13);
            },
            unlocked(){
                return hasUpgrade('F', 13) && hasUpgrade("N", 24)
            },
            
        },
        31: {
            title: "11",
            description: "'+' base x2. You can buy this upgrade while you are in Factor Challenge 6.",
            cost(){ 
                if(player.F.activeChallenge!=23)return new Decimal(Infinity);
                return new Decimal(3.14e9);
            },
            unlocked(){
                return player.UF.best.gte(2) && hasUpgrade("N", 25)
            },
            
        },
        32: {
            title: "12",
            description: "'+' base x2. You can buy this upgrade while you are in Factor Challenge 3.",
            cost(){ 
                if(player.F.activeChallenge!=13)return new Decimal(Infinity);
                return new Decimal(3.14e16);
            },
            unlocked(){
                {return hasMilestone('F',90)}
            },
            
        },
        33: {
            title: "13",
            description: "'+' work in 'Buyable Upgrader' but nerf it in 'Buyable Upgrader'",
            cost(){ 
                return new Decimal(1e100);
            },
            unlocked(){
                {return player.UF.best.gte(4)}
            },
            
        },
        34: {
            title: "14",
            description: "Remove the third hardcap of '4'. You can buy this upgrade while you are in Factor Challenge 9.",
            cost(){ 
                if(player.F.activeChallenge!=33)return new Decimal(Infinity);
                return new Decimal(1e30);
            },
            unlocked(){
                {return player.UF.best.gte(8)}
            },
            
        },
        35: {
            title: "15",
            description: "Remove the third hardcap of '3'. You can buy this upgrade while you are in Factor Challenge 11.",
            cost(){ 
                if(player.F.activeChallenge!=42)return new Decimal(Infinity);
                return new Decimal(1e50);
            },
            unlocked(){
                {return hasMilestone('F',1333)}
            },
            
        },
    },
    buyables: {
        rows: 2,
        cols: 3,
        11: {
            title: "+",
            display() {

                return "Boosts Number gain by " + format(tmp.N.buyables[11].effect) + "x<br>Cost : " + format(new Decimal("1e4").pow(getBuyableAmount("N", 11).add(1))) + " Numbers"
            },
            unlocked() { return hasUpgrade("F", 15) },
            canAfford() { 
                return player.N.points.gte(new Decimal("1e4").pow(getBuyableAmount("N", 11).add(1))) 
            },
            buy() { 
                {
                    player.N.points = player.N.points.minus(new Decimal("1e4").pow(getBuyableAmount("N", 11).add(1)))
                }
                setBuyableAmount("N", 11, getBuyableAmount("N", 11).add(1))
            },
            effect() { 

                if (hasUpgrade('N',31)) eff = new Decimal("6").pow(getBuyableAmount("N", 11))
                else   eff = new Decimal("3").pow(getBuyableAmount("N", 11))
                if (hasUpgrade('N',32)) eff = new Decimal("12").pow(getBuyableAmount("N", 11))
                
                if ( player.UF.challenges[11]>=1) eff = new Decimal("24").pow(getBuyableAmount("N", 11))
                if ( player.UF.challenges[11]>=2) eff = new Decimal("36").pow(getBuyableAmount("N", 11))
                if ( player.UF.challenges[11]>=3) eff = new Decimal("50").pow(getBuyableAmount("N", 11))
                if (inChallenge('UF',11)) eff = new Decimal("1")
                if (inChallenge('UF',11) && hasUpgrade('N',33)) eff =  new Decimal("3").pow(getBuyableAmount("N", 11))
                if (eff>=1e50 &&(!hasMilestone('F',6000))) return eff = new Decimal("1e50")
             else if (eff>=1e64&&(hasMilestone('F',6000))&&(!hasMilestone('F',12500))) return eff = new Decimal("1e64")
                else if (eff>=1e75&&(hasMilestone('F',12500))) return eff = new Decimal("1e75")
                else return eff = eff
                
               
                
            }
        },
        12: {
            title: "-",
            display() {
                if (hasChallenge('F',42)) return "Boosts point gain by " + format(tmp.N.buyables[12].effect) + "x<br>Cost : " + format(new Decimal("1e6").pow(getBuyableAmount("N", 12).add(1))) + " Numbers"

                else return "Boosts point gain by " + format(tmp.N.buyables[12].effect) + "x<br>Cost : " + format(new Decimal("1e10").pow(getBuyableAmount("N", 12).add(1))) + " Numbers"
            },
            unlocked() { return hasChallenge("F", 31) },
            canAfford() { 
                if (hasChallenge('F',42)) return player.N.points.gte(new Decimal("1e6").pow(getBuyableAmount("N", 12).add(1))) 
                else return player.N.points.gte(new Decimal("1e10").pow(getBuyableAmount("N", 12).add(1))) 
            },
            buy() { 
                {
                    if (hasChallenge('F',42)) player.N.points = player.N.points.minus(new Decimal("1e6").pow(getBuyableAmount("N", 12).add(1)))
                   else  player.N.points = player.N.points.minus(new Decimal("1e10").pow(getBuyableAmount("N", 12).add(1)))
                }
                setBuyableAmount("N", 12, getBuyableAmount("N", 12).add(1))
            },
            effect() { 
                if (hasChallenge('F',32)) eff = new Decimal("4").pow(getBuyableAmount("N", 12))
                else eff = new Decimal("2").pow(getBuyableAmount("N", 12))
                if (hasChallenge('F',33)) eff = new Decimal("8").pow(getBuyableAmount("N", 12))
                if (inChallenge('UF',11)) eff = new Decimal("1")
                if (eff>=1e20&& ( player.UF.challenges[11]<=3)) return eff = new Decimal("1e20")
                else if (eff>=1e30&& ( player.UF.challenges[11]>=4)) return eff = new Decimal("1e30")
                else return eff = eff
    
               
              
                
            }
        },
        13: {
            title: "x",
            display() {
                if (hasMilestone('F',1580)) return "Boosts Number gain by " + format(tmp.N.buyables[13].effect) + "x<br>Cost : " + format(new Decimal("1e20").pow(getBuyableAmount("N", 13).add(1))) + " Numbers"

                else return "Boosts number gain by " + format(tmp.N.buyables[13].effect) + "x<br>Cost : " + format(new Decimal("1e20").pow(getBuyableAmount("N", 13).add(1))) + " Numbers"
            },
            unlocked() { return hasMilestone("F", 1580) },
            canAfford() { 
               return player.N.points.gte(new Decimal("1e20").pow(getBuyableAmount("N", 13).add(1))) 
            },
            buy() { 
                {
                 player.N.points = player.N.points.minus(new Decimal("1e20").pow(getBuyableAmount("N", 13).add(1)))
                }
                setBuyableAmount("N", 13, getBuyableAmount("N", 13).add(1))
            },
            effect() { 
 return eff  = new Decimal(player.N.points.add(1).log(10).pow(0.5).add(1)).pow(getBuyableAmount("N", 13))


                  
            }
        },
        21: {
            title: "/",
            display() {
                if (hasMilestone('F',1580)) return "Number gain ^ " + format(tmp.N.buyables[21].effect) + "<br>Cost : " + format(new Decimal("1e35").pow(getBuyableAmount("N", 21).add(1))) + " Numbers"

                else return "Boosts number gain by " + format(tmp.N.buyables[21].effect) + "x<br>Cost : " + format(new Decimal("1e35").pow(getBuyableAmount("N", 21).add(1))) + " Numbers"
            },
            unlocked() { return hasMilestone("UF", 11) },
            canAfford() { 
               return player.N.points.gte(new Decimal("1e35").pow(getBuyableAmount("N", 21).add(1))) 
            },
            buy() { 
                {
                 player.N.points = player.N.points.minus(new Decimal("1e35").pow(getBuyableAmount("N", 21).add(1)))
                }
                setBuyableAmount("N", 21, getBuyableAmount("N", 21).add(1))
            },
            effect() { 
                return  eff = new Decimal("1").add(0.04).pow(getBuyableAmount("N", 21))        
                  
            }
        },
    
    
       
    },
    tabFormat: {
      
      "Upgrades":{
        unlocked(){return hasMilestone('F',5)},
        content:[
          "main-display",
          "blank",
        ["prestige-button",function(){return ""}],
        "blank",
        "resource-display",
          "blank",
          "blank",
          "upgrades",
        ]
      },

      "Buyables":{
        unlocked(){return hasUpgrade('F',15)},
        content:[
          "main-display",
          "blank",
        ["prestige-button",function(){return ""}],
          "blank",
          "blank",
          "buyables",
        ]
      },
      },
passiveGeneration(){return hasMilestone('F',6) && (!inChallenge('F',22)) && (!inChallenge('F',23)) && (!inChallenge('F',42)&& (!inChallenge('F',43)))? 1 : 0},
    layerShown(){return true}
})
addLayer("UF", {
    name: "Upgrade Factors", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "UF", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal(1e30), // Can be a function that takes requirement increases into account
    resource: "Upgrade Factor", // Name of prestige currency
    baseResource: "Numbers", // Name of resource prestige is based on
    baseAmount() {return player.N.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    base:1e10,
    exponent: 1.25,
    branches:["N"],
     // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "u", description: "U: Reset for Upgrade Factor", onPress(){if (canReset(this.layer)) doReset(this.layer)},
        onPress() { if (player.UF.unlocked) doReset("UF") },
        unlocked() {return hasChallenge('N', 22)} // Determines if you can use the hotkey, optional
    },
    ],
    milestones: {
        1: {
            requirementDescription: "1 Upgrade Factor",
            effectDescription: "First four Upgrade Factor Unlock 1 upgrade and keep upgrade on reset.",
            done() { return player.UF.points.gte(1) }
        },
        6: {
            requirementDescription: "6 Upgrade Factor",
            effectDescription: "Unlock 1 upgrade.",
            done() { return player.UF.points.gte(6) }
        },
        8: {
            requirementDescription: "8 Upgrade Factor",
            effectDescription: "Unlock 1 upgrade.",
            done() { return player.UF.points.gte(8) }
        },
        10: {
            requirementDescription: "10 Upgrade Factor",
            effectDescription: "Unlock 1 challenge (not upgrade) and point x10000.",
            done() { return player.UF.points.gte(10) }
        },
        11: {
            requirementDescription: "11 Upgrade Factor",
            effectDescription: "Unlock 1 buyable (not upgrade).",
            done() { return player.UF.points.gte(11) }
        },
        

    },
    challenges: {
        11: {
           
            completionLimit(){
                let limit=4;
                return limit;
            },
            name: "Buyable upgrader",
            challengeDescription: "'+' and '-' is no effect (You can do 4 times)",
            goal: function(){
                return [new Decimal("1e30"),new Decimal("1e45"),new Decimal("5e52"),new Decimal("1e65"),new Decimal(Infinity)][player.UF.challenges[11]];
        },
            rewardDescription(){return "'+' is better' (1-3) and Remove 1 hardcap of '-'  (4)."},
          unlocked(){return hasUpgrade('F', 22)},

    },
},
})
addLayer("F", {
    name: "Factors", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFCD00",
    requires: new Decimal(1e5), // Can be a function that takes requirement increases into account
    resource: "Factors", // Name of prestige currency
    baseResource: "Numbers", // Name of resource prestige is based on
    baseAmount() {return player.N.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    base: 50,
    exponent(){
        if(hasChallenge('F',43))return 0.538
        if(hasChallenge('F',41))return 0.625
        if(hasChallenge('F',23))return 0.69
        else return 0.75

    },
    branches:["N"],
     // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Reset for Factors", onPress(){if (canReset(this.layer)) doReset(this.layer)},
        onPress() { if (player.F.unlocked) doReset("F") },
        unlocked() {return hasUpgrade('N', 15)} // Determines if you can use the hotkey, optional
    },
    ],
    canBuyMax(){
        return hasChallenge('F',21) 
    },autoPrestige(){
        return hasMilestone('F',6000);
    },resetsNothing(){
        return hasMilestone('F',6000);
    },
 
    milestones: {
        1: {
            requirementDescription: "1 factor",
            effectDescription: "Unlock 1 more Number upgrade and factor boost number and point gain.",
            done() { return player.F.points.gte(1) }
        },
        2: {
            requirementDescription: "2 factors",
            effectDescription: "Unlock 1 challenge.",
            done() { return player.F.points.gte(2)}
        },
        4: {
            requirementDescription: "4 factors",
            effectDescription: "Unlock 1 more Number upgrade.",
            done() { return player.F.points.gte(4)}
        },
        5: {
            requirementDescription: "5 factors",
            effectDescription: "Unlock factor upgrade",
            done() { return player.F.points.gte(5)}
        },
        6: {
            requirementDescription: "6 factors",
            effectDescription: "Gain 100% of Number on prestige per second.",
            done() { return player.F.points.gte(6)}
        },
        8: {
            requirementDescription: "8 factors",
            effectDescription: "Unlock 1 more challenge",
            done() { return player.F.points.gte(8)}
        },
        12: {
            requirementDescription: "12 factors",
            effectDescription: "Unlock 1 more challenge",
            done() { return player.F.points.gte(12)}
        },
        44: {
            requirementDescription: "44 factors",
            effectDescription: "Unlock 1 more challenge",
            done() { return player.F.points.gte(44)}
        },
        90: {
            requirementDescription: "90 factors",
            effectDescription: "Unlock 1 Number Upgrade",
            done() { return player.F.points.gte(90)}
        },
        108: {
            requirementDescription: "108 factors",
            effectDescription: "Unlock 1 challenge",
            done() { return player.F.points.gte(108)}
        },
        120: {
            requirementDescription: "120 factors",
            effectDescription: "'Factor Alpha' is better",
            done() { return player.F.points.gte(120)}
        },
        888: {
            requirementDescription: "888 factors",
            effectDescription: "'Factor Alpha' is much more better.",
            done() { return player.F.points.gte(888)}
        },
    1024: {
            requirementDescription: "1024 factors",
            effectDescription: "'Factor Beta' is better.",
            done() { return player.F.points.gte(1024)}
        },
        1333: {
            requirementDescription: "1333 factors",
            effectDescription: "Unlock 1 number upgrade",
            done() { return player.F.points.gte(1333)}
        },     
        1580: {
            requirementDescription: "1580 factors",
            effectDescription: "Unlock 1 number buyable",
            done() { return player.F.points.gte(1580)}
        },  
        6000: {
            requirementDescription: "6000 factors",
            effectDescription: "Remove the first hardcap of '+', auto buy factor and factor reset nothing",
            done() { return player.F.points.gte(6000)}
        },  
        12500: {
            requirementDescription: "12500 factors",
            effectDescription: "Remove the second hardcap of '+'.",
            done() { return player.F.points.gte(12500)}
        },  
    },
    upgrades: {
        rows: 2,
        cols: 5,
        11: {
            title: "Factor Alpha",
            description: "Boost points and numbers base on factor.",
            effect() {
                
                if (inChallenge('F',42)|inChallenge('F',43)) return 1 
                if (inChallenge('F',23)) return 1
                if (inChallenge('F',22)) return 1 
                if (player.F.points>=1108) return 4500
                if (hasMilestone('F',888)) return player.F.points.pow(1.2).add(1)
                if (hasMilestone('F',120)) return player.F.points.pow(0.65).add(1)
                return player.F.points.pow(0.4).add(1)
        
                    },
                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },

            cost: new Decimal(5),
            unlocked() {
                return hasMilestone("F",5)
            },
        },
        12: {
            title: "Factor Beta",
            description: "Number boost itself gain.",
            effect() {
                if (inChallenge('F',42)|inChallenge('F',43)) return 1 
                if (inChallenge('F',22)) return 1 
                if (player.N.points>=1.078752e+144) return 1e35
                
                if (hasMilestone('F',1024)) return player.N.points.pow(0.243).add(1)
                if (hasUpgrade('F',24)) return player.N.points.pow(0.2).add(1)
             
                return player.N.points.pow(0.15).add(1)
        
                    },
                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(9),
            unlocked(){
                return hasUpgrade("F", 11)
            },
    },
    13: {
        title: "Factor Gamma",
        description: "Unlock 2 Number upgrade and 2 challenge.",
        cost: new Decimal(15),
        unlocked(){
            return hasUpgrade("F", 12)
        },
},
14: {
    title: "Factor Delta",
    description: "Remove the second hardcap of '3'",
    cost: new Decimal(36),
    unlocked(){
        return hasMilestone("UF", 1)
    },
},
15: {
    title: "Factor Epsilon",
    description: "Unlock number buyable and Number x2",
    cost: new Decimal(60),
    unlocked(){
        return hasChallenge("F", 23)
    },
},
21: {
    title: "Factor Zeta",
    description: "Unlock a challenge",
    cost: new Decimal(125),
    unlocked(){
        return player.UF.best.gte(3)
    },
},
22: {
    title: "Factor Eta",
    description: "Unlock 1 upgrade factor challenge.",
    cost: new Decimal(144),
    unlocked(){
        return hasUpgrade('F',21)
    },
},
23: {
    title: "Factor Theta",
    description: "Remove the fourth hardcap of '2'.",
    cost: new Decimal(169),
    unlocked(){
        return hasUpgrade('F',22)
    },
},
24: {
    title: "Factor Iota",
    description: "Boost 'Factor Beta' and unlock 1 more factor upgrade." ,
    cost: new Decimal(380),
    unlocked(){
        return hasMilestone('UF',6)
    },
},
25: {
    title: "Factor Kappa",
    description: "Unlock 2 factor challenge." ,
    cost: new Decimal(470),
    unlocked(){
        return hasUpgrade('F',24)
    },
},



},
    challenges: {
        11: {
            name: "/ factor",
            challengeDescription: "Number and point gain /5",
            goal: new Decimal(1000000),
            rewardDescription(){return "Number and Point x3"},
          unlocked(){return hasMilestone('F', 2)},
        },
        12: {
            name: "No upgrade factor",
            challengeDescription: "'2' is no effect",
            canComplete(){return player.N.points.gte("100000000")},
            goalDescription: "100,000,000 Numbers",
            rewardDescription(){return "Number and Point x3"},
          unlocked(){return hasMilestone('F', 8)},
          
        },
        13: {
            name: "2 in 1",
            challengeDescription: "You trap in / and No upgrade factor.",
            canComplete(){return player.N.points.gte("3.14e9")},
            goalDescription: "3.14e9 Numbers",
            rewardDescription(){return "Unlock one number upgrade."},
          unlocked(){return hasMilestone('F', 12)},
          
        },
        21: {
            name: "No cap factor",
            challengeDescription: "'6', '7' and '8' is no effect.",
            canComplete(){return player.N.points.gte("3.14e12")},
            goalDescription: "3.14e12 Numbers",
            rewardDescription(){return "Factor will not reset upgrade, you can buy max factor."},
          unlocked(){return hasUpgrade('F', 13)},
          
        },
        22: {
            name: "No factor factor",
            challengeDescription: "Factor milestone 5 and upgrades is no effect.",
            canComplete(){return player.N.points.gte("1e20")},
            goalDescription: "1e20 Numbers",
            rewardDescription(){return "Point and Number x2"},
          unlocked(){return hasUpgrade('F', 13)},
          
        },
        23: {
            name: "3 in 1",
            challengeDescription: "You trap in 2 in 1, No cap and no factor factor.",
            canComplete(){return player.N.points.gte("69420420")},
            goalDescription: "69,420,420 Numbers",
            rewardDescription(){return "Factor is cheaper and unlock 1 factor upgrade."},
          unlocked(){return hasMilestone('F', 44)},
          
        },
        31: {
            name: "Super / factor",
            challengeDescription: "Point and Number / 1e6",
            canComplete(){return player.N.points.gte("10000")},
            goalDescription: "10,000 Numbers",
            rewardDescription(){return "unlock 1 Number buyable."},
          unlocked(){return hasMilestone('F', 108)},
          
        },
        32: {
            name: "Super No upgrade factor",
            challengeDescription: "'2','3' and '4' is no effect",
            canComplete(){return player.N.points.gte("3.14e16")},
            goalDescription: "3.14e16 Numbers",
            rewardDescription(){return "'-' base x2 and unlock 1 challenge"},
          unlocked(){return hasUpgrade('F', 21)},
          
        },
        33: {
            name: "Super 2 in 1",
            challengeDescription: "You trap in super / and super No upgrade factor.",
            canComplete(){return player.N.points.gte("1234")},
            goalDescription: "1,234 Numbers",
            rewardDescription(){return "'-' base x2 and unlock 1 factor upgrade"},
          unlocked(){return hasUpgrade('F', 21) && hasChallenge('F',32)},
          
        },
        41: {
            name: "Super no cap factor",
            challengeDescription: "'2', '3' and '4' effect is cap at 10",
            canComplete(){return player.N.points.gte("3.14e39")},
            goalDescription: "3.14e39 Numbers",
            rewardDescription(){return "Factor is cheaper."},
          unlocked(){return hasUpgrade('F', 25)},
          
        },
        42: {
            name: "Super no factor factor",
            challengeDescription: "Factor milestone 5, 11, 12 and upgrades is no effect.",
            canComplete(){return player.N.points.gte("3.14e45")},
            goalDescription: "3.14e45 Numbers",
            rewardDescription(){return "'-' cost base /1e4."},
          unlocked(){return hasUpgrade('F', 25)},
          
        },
        43: {
            name: "Super 3 in 1",
            challengeDescription: "You trap in Super 2 in 1, Super no cap factor and no factor factor.",
            canComplete(){return player.N.points.gte("5000")},
            goalDescription: "5,000 Numbers",
            rewardDescription(){return "Factor is cheaper."},
          unlocked(){return hasUpgrade('F', 25)},
        },
          
        },
    tabFormat: {
        "Milestones":{
          content:[
        "main-display",
          "blank",
        ["prestige-button",function(){return ""}],
        "blank",
        "resource-display",
        "blank",
        "blank",
        "milestones",
          ]},
      
      "Upgrades":{
        unlocked(){return hasMilestone('F',5)},
        content:[
          "main-display",
          "blank",
        ["prestige-button",function(){return ""}],
          "blank",
          "blank",
          "upgrades",
        ]
      },
      "Challenges":{
        unlocked(){return hasMilestone('F',2)},
        content:[
          "main-display",
          "blank",
        ["prestige-button",function(){return ""}],
          "blank",
          "blank",
          "challenges",
        ]
      },
      },


    layerShown(){return true}
})
addLayer("I", {
    name: "Infinity", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#262626",
    requires: new Decimal(1.79e308), // Can be a function that takes requirement increases into account
    resource: "Infinity", // Name of prestige currency
    baseResource: "Numbers", // Name of resource prestige is based on
    baseAmount() {return player.N.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.00000001,
    branches:["F","UF"],
     // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "i", description: "I: Reset for Infinity Factor", onPress(){if (canReset(this.layer)) doReset(this.layer)},
        onPress() { if (player.UF.unlocked) doReset("I") },
        unlocked() {return hasChallenge('N', 22)} // Determines if you can use the hotkey, optional
    },
    ],
    milestones: {
        1: {
            requirementDescription: "1 Infinity",
            effectDescription: "Number gain ^1.05 and point gain x100",
            done() { return player.I.points.gte(1) }
        },
    },
    layerShown(){return true}
})
addLayer("Hardcap", {
	startData() { return {unlocked: true}},
	color: "#ff8888",
	symbol: "H",
	row: "side",
	position: -1,
	layerShown() { return true },
	tooltip: "Hardcap",
    tabFormat: [
		"blank", "blank", "blank",
        ["raw-html", "<h1><a href=https://docs.google.com/document/d/1oT5siVj4lT8nnmHjPmAiSQL1NVSmNXQT8bpgUUqjBkM/edit target=_blank>Hardcap table</a></h1>"],
	],
})