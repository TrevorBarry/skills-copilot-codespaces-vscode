const calculator = (num1, num2, operator) => {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Error: Division by zero';
        }
        break;
      default:
        result = 'Error: Invalid operator';
    }
  
    return result;
  };
  
  // Example usage
  const num1 = 10;
  const num2 = 5;
  const operator = '+';
  
console.log(`${num1} ${operator} ${num2} = ${calculator(num1, num2, operator)}`);
  