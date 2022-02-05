addLayer("Z", {
    name: "Zero", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Z", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        integer:[],
        eff:[],
    }},
    color: "#534202",
    requires(){
      return new Decimal(4e4)} ,
    resource(){return "Zero"}, 
    baseResource: "Infinity", // Name of resource prestige is based on
    baseAmount() {return player.I.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){
        return 1.5
    },
    branches:["I"],
     // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let mult=new Decimal(1) 
        return mult
    },
    hotkeys: [
        {key: "Z", description: "Shift + Z: Reset for Zero", onPress(){if (canReset(this.layer)) doReset(this.layer)},
        onPress() { if (player.Z.unlocked) doReset("Z") },
        unlocked() {return hasMilestone('I', 40000)} // Determines if you can use the hotkey, optional
    },
    ],
    row: 3, // Row the layer is in on the tree (0 is the first row)
    milestones: {
        1: {
            requirementDescription: "1 Zeros",
            effectDescription: "Number gain ^1.05, prime factor point gain x10 and keep factor shift and upgrade factor milestone on reset.",
            done() { return player.Z.points.gte(1) }        
        },
        2: {
            requirementDescription: "2 Zeros",
            effectDescription: "Point gain ^1.05, keep infinity milestone on reset.",
            done() { return player.Z.points.gte(2) }        
        },
        3: {
            requirementDescription: "3 Zeros",
            effectDescription: "Keep Negative number upgrade on reset.",
            done() { return player.Z.points.gte(3) }        
        },
        4: {
            requirementDescription: "4 Zeros",
            effectDescription: "Keep Factor milestone on reset.",
            done() { return player.Z.points.gte(4) }        
        },
        5: {
            requirementDescription: "5 Zeros",
            effectDescription: "Auto buy 2, 3 and Infinity. Infinity resets nothing",
            done() { return player.Z.points.gte(5) }        
        },
        6: {
            requirementDescription: "6 Zeros",
            effectDescription: "Auto buy 5 and 7. Unlock integer.",
            done() { return player.Z.points.gte(6) }        
        },
        },

    layerShown(){return (hasMilestone("I",40000)&&player.X.points.gte(1))||player.Z.points.gte(1)},
    clickables:{       
        11:{
            display() {
                if(player.Z.integer[0]==undefined) return ""
                return (player.Z.integer[0]+"<br>"+player.Z.eff[0])},
        },
        12:{
            display() {
                if(player.Z.integer[1]==undefined) return ""
                return (player.Z.integer[1]+"<br>"+player.Z.eff[1])},
        },
        31:{
            display() {
                if(player.Z.integer[2]==undefined) return ""
                return (player.Z.integer[2]+"<br>"+player.Z.eff[2])},
        },
        32:{
            display() {
                if(player.Z.integer[3]==undefined) return ""
                return (player.Z.integer[3]+"<br>"+player.Z.eff[3])},
        },
        101:{
            display() {return "Delete the oldest integer."},
            onClick(){
                player.Z.integer=player.Z.integer.splice(1, 1)
                setBuyableAmount("Z", 21, getBuyableAmount("Z", 21).sub(1))
            },
            canClick(){return getBuyableAmount("Z", 21).gte(1)}
        },
    },
    buyables: {
        rows: 2,
        cols: 3,
        21: {
            title: "Random Integer",
            display() {
               return "Add 1 random integer <br>Cost : " + formatWhole(tmp.Z.buyables[21].cost) + " Zeros"
            },
            unlocked() { return hasMilestone("Z",6) },
            canAfford() { 
              return player.Z.points.gte(tmp.Z.buyables[21].cost) 
            },
            cost(){
            return  new Decimal("2").pow(getBuyableAmount((this.layer), (this.id)).pow(0.95)).ceil()
            },
            buy() { 
                {
player.Z.integer.push(new Decimal(Math.random()).times(5).ceil().max(1))
                   player.Z.points = player.Z.points.minus(tmp.Z.buyables[21].cost)
                }
                setBuyableAmount("Z", 21, getBuyableAmount("Z", 21).add(1))
            },
            effect() { 
              return getBuyableAmount("Z", 21)       
            },
            purchaseLimit(){return 4}
        },
    },
    update(diff){
        for (let i = 0; i <=3 ; i++) {
        switch(parseInt(player.Z.integer[i])){
            case 1: player.Z.eff[i]="Point ^1.1";break
            case 2: player.Z.eff[i]="Number ^1.05";break
            case 3: player.Z.eff[i]="Factor x1.03";break
            case 4: player.Z.eff[i]="Prime factor point ^1.02";break
            case 5: player.Z.eff[i]="Point exp ^1.01";break
            default: player.Z.eff[i]="";
          }
        }
    }
})  
setInterval(function () {for (let i = 0; i <=3 ; i++) {
    switch(parseInt(player.Z.integer[i])){
        case 1: player.Z.eff[i]="Point ^1.1";break
        case 2: player.Z.eff[i]="Number ^1.05";break
        case 3: player.Z.eff[i]="Factor x1.03";break
        case 4: player.Z.eff[i]="Prime factor point ^1.02";break
        case 5: player.Z.eff[i]="Point exp ^1.01";break
        default: player.Z.eff[i]="";
}}}, 50);