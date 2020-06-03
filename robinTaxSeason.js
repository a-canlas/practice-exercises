// Input dollar amount and tax percentage
// Output: tax in cents

function calculateTax(dollarAmount, taxPercent){
  let taxInCents = (dollarAmount * (taxPercent / 100) + dollarAmount) * 100;
  let result = taxInCents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${result} cents`;
}
