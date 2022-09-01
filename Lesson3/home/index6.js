function mathOperation(arg1, arg2, operation) {
  switch(operation) {
    case 'сложение':
      return amount(arg1, arg2);
    case 'разность':
      return difference(arg1, arg2);
    case 'деление':
      return multiplication(arg1, arg2);
    case 'умножение':
      return division(arg1, arg2);
  }
}
