class PrimeNumberGenerator {
  constructor(maxCount) {
    this.maxCount = maxCount;
    this.primes = Array(this.maxCount + 1).fill(0);
    this.currentNumber = 1;
    this.currentPrimeIndex = 1;
    this.primes[1] = 2;
    this.currentOrder = 2;
    this.square = 9;
    this.multipliers = Array(this.maxCount + 1).fill(0);
  }

  generateAndPrintPrimes() {
    this.generatePrimes();
    this.printPrimes();
  }

  generatePrimes() {
    while (this.currentPrimeIndex < this.maxCount) {
      this.findNextPrime();
    }
  }

  findNextPrime() {
    let isPrime;
    do {
      this.currentNumber += 2;
      if (this.currentNumber === this.square) {
        this.updateSquare();
      }
      isPrime = this.checkIfPrime();
    } while (!isPrime);
    this.currentPrimeIndex++;
    this.primes[this.currentPrimeIndex] = this.currentNumber;
  }

  updateSquare() {
    this.currentOrder++;
    this.square = this.primes[this.currentOrder] * this.primes[this.currentOrder];
    this.multipliers[this.currentOrder - 1] = this.currentNumber;
  }

  checkIfPrime() {
    let n = 2;
    let isPrime = true;
    while (n < this.currentOrder && isPrime) {
      this.updateMultiplier(n);
      if (this.multipliers[n] === this.currentNumber) {
        isPrime = false;
      }
      n++;
    }
    return isPrime;
  }

  updateMultiplier(n) {
    while (this.multipliers[n] < this.currentNumber) {
      this.multipliers[n] += this.primes[n] + this.primes[n];
    }
  }

  printPrimes() {
    let pageNumber = 1;
    let pageOffset = 1;
    const rows = 50;
    const columns = 4;
    while (pageOffset <= this.maxCount) {
      console.log("Page ", pageNumber);
      for (
        let rowOffset = pageOffset;
        rowOffset <= pageOffset + rows - 1;
        rowOffset++
      ) {
        let aux = [];
        for (let c = 0; c <= columns - 1; c++) {
          if (rowOffset + c * rows <= this.maxCount) {
            aux.push(this.primes[rowOffset + c * rows]);
          }
        }
        console.log(aux.join('|'));
      }
      pageNumber++;
      pageOffset += rows * columns;
    }
  }
}

new PrimeNumberGenerator(1000).generateAndPrintPrimes();
