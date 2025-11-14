function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); ++i) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function evenOdd(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(evenOdd(4));
