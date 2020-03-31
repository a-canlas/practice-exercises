function formatPhoneNumber(numbers) {
  let area = numbers.slice(0, 3).join('');
  let pre = numbers.slice(3, 6).join('');
  let last = numbers.slice(6).join('');
  return `(${area}) ${pre}-${last}`;
}
