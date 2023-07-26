// Interface - similar to type
interface UIF {
  readonly id: number;
  name: string;
  age?: boolean | number;
}

interface MathFunc {
  (x: number, y: string): number;
}

const user1: UIF = {
  id: 1,
  name: "Coraline",
};

const add: MathFunc = (x, y): number => x + Number(y);
console.log(add(12, "13"));
