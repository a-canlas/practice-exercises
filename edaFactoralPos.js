function factorial(z) {
 return z <= 0 ? 1 : z * factorial(z - 1);
}

// The conditional prevents the function from being infinitely called
