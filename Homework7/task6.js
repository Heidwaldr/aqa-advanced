const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedumbersList = [...numbersList];
copiedumbersList.sort((a, b) => a - b);

console.log('Original:', numbersList);
console.log('Sorted:', copiedumbersList);
