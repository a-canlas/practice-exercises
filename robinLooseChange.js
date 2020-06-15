/* Function that accepts two parameters:
    total amount due
    Array with the following order of denominations [P,N,D,Q]
   Output will be a boolean*/

   function enoughMoney(amount, denominations){
     let totalChange = 0;
     for(let i = 0; i < denominations.length; i++){
       let denomAmount;
       switch(i){
         case 0:
          denomAmount = denominations[i] * .01;
          break;
         case 1:
           denomAmount = denominations[i] * .05;
           break;
         case 2:
           denomAmount = denominations[i] * .1;
           break;
         case 3:
           denomAmount = denominations[i] * .25;
           break;
       }
       totalChange += denomAmount;
     }
     return totalChange >= amount;
   }
