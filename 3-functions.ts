// Functions
// return type number
const addNum = (x: number, y: number): number => {
  let total = x + y;
  printNum(total);
  return total;
};

// return type void
const printNum = (total: number): void => {
  console.log(total);
};

let added = addNum(5, 10);
