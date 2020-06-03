// Input dollar amount and tax percentage
// Output: tax in cents

function calculateTax(dollarAmount, taxPercent){
  let taxInCents = (dollarAmount * (taxPercent / 100) + dollarAmount) * 100;
  return `${taxInCents} cents`;
}
