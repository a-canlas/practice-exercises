function calculate(num1, num2, operator){
  let result;
  switch(operator){
      case '+':
      case 'plus':
        result = num1 + num2;
        break;
      case '-':
      case 'minus':
        result = num1 - num2;
        break;
      case '*':
      case 'x':
      case 'times':
        result = num1 * num2;
        break;
      case '/':
      case 'divide':
        result = num2 === 0 ? 'Cannot divide by 0': num1 / num2;
        break;
      default:
        result = 'Incorrect operator';
        break;
  }
  return result;
}
