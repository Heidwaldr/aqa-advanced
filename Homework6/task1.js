function handleEven() {
    console.log("number is even");
  }
  
  function handleOdd() {
    console.log("number is odd");
  }
  
  function handleNum(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
      evenCallback();
    } else {
      oddCallback();
    }
  }
  
  // Передаємо число 4 — воно парне
  handleNum(4, handleEven, handleOdd);
  
  // Передаємо число 7 — воно непарне
  handleNum(7, handleEven, handleOdd);