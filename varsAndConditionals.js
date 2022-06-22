/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let jonSnowAttack = 25
let jamieLannisterAttack = 45

if (jonSnowAttack > jamieLannisterAttack){
    Console.log("jon Snow Has a better attack than jamie")
} else  if (jamieLannisterAttack > jonSnowAttack) {
    console.log("jamie has a better attack than jon")

    } else {
        console.log("jon and jamie have the same attack")
    }

    let jonSnowHealth = 100
    let jonSnowDefense = 0




    if (jonSnowHealth <= jamieLannisterAttack){
        console.log("Jon Snow has been slained")
    } else {
        // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
        jonSnowHealth -= jamieLannisterAttack
        console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
    }

    // jonSnowDefense = jonSnowDefense + 25
    jonSnowDefense += 25
    
    if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
        console.log("Jon Snow has been slained")
    } else {
        // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
        jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
        console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
    }

    if( (jonSnowHealth + 50) >= 100){
        jonSnowHealth = 100
    } else {
        jonSnowHealth +=50
    }
    console.log(jonSnowHealth)

 
   let coinLandsHeads = false
   
   if (coinLandsHeads == true){
    console.log("the fight continues")
   } else {
    console.log ("jon is allowed to run away")
   }

   for (let i = 0; i < 5; i++) {
    if (jonSnowHealth <=0) {
        console.log(`jon has been slain`);
    } else {
    
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`jon Snows health is ${jonSnowHealth}`);
   } 
}

while (jonSnowHealth > 0){
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
    console.log(`jons health is now ${jonSnowHealth}`)
}


