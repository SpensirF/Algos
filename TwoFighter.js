function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
// while (fighter1.health > 0 && fighter2.health > 0) {
//     fighter2.health -= fighter1.damagePerAttack;
//     fighter1.health -= fighter2.damagePerAttack;
//   }
  
//   if (fighter1.health <= 0 && fighter2.health <= 0)
//     return firstAttacker;
//   else if (fighter1.health <= 0)
//     return fighter2.name;
//   else
//     return fighter1.name;

// function declareWinner(fighter1, fighter2, firstAttacker) {
//     let currentAttacker = firstAttacker  
//     let otherFighter = currentAttacker === fighter1 ? fighter2 : fighter1;
//     console.log(currentAttacker)
//     console.log(otherFighter)

//   while (fighter1.health > 0 && fighter2.health > 0) {

//       if (otherFighter.health <= 0) {
//           return currentAttacker.name;
//         }
      
//     otherFighter.health -= currentAttacker.damagePerAttack;
        
//     currentAttacker = otherFighter;
//     otherFighter = currentAttacker === fighter1 ? fighter2 : fighter1;

//   }

//   return otherFighter.name;
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
    let Attack1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    let Attack2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    if(Attack1 > Attack2){
        return fighter1.name
    }else if(Attack1 < Attack2){
        return fighter2.name
    }
    return firstAttacker
}
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"))