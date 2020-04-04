function factorial(int) {
  return int === 0 ? 1 : int * factorial(int - 1);
}
