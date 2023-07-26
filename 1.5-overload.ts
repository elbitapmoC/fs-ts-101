// Override vs overload?
// Override - Same functions with sig, different classes connected
// Overload - Same function with different signatures

interface Coordinate {
  x: number;
  y: number;
}

function parseCoord(str: string): Coordinate;
function parseCoord(obj: Coordinate): Coordinate;
function parseCoord(x: number, y: number): Coordinate;
// unknown - any
function parseCoord(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value);
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoord(10, 20));
console.log(parseCoord({ x: 1, y: 44 }));
console.log(parseCoord("x:12,y:12"));
