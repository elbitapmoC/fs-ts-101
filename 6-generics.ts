// We can use ANY letter, T is just a convention.
// Generic acts as a placeholder for the type.
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(["a", "b", "c", "d"]);

// numArr.push("hello"); // expects a number
// strArr.push("hello"); // expects a string
