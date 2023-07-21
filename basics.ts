// number
let id: number = 999990;

// string
let intro: string = "Hello World!";

// boolean
let spicy: boolean = true;

// any
let x: any = "Ok cool";
x = true;

// array
let fruits: string[] = ["🍒", "🍑", "🍇", "🍍", "🫐"];
let person: any[] = [
  "Seven",
  {
    asleep: false,
    hungry: false,
    age: 22,
    name: "Maybaleene",
  },
];

// tuples
let business: [string, number, number][];
business = [
  ["Aug", 20, 2020],
  ["Jul", 18, 2023],
];

// Union
let availability: boolean | number;
availability = false;
availability = 12;

// Enum - comes in two flavors, String or numeric
// Used to define a set of named contstants
// initial value is 0...
// b/c we set
enum WorkDays {
  Monday = "Mon",
  Tuesday = "Tue",
  Wednesday = "Wed",
  Thursday = "Thur",
}

enum WeekDays {
  Friday = 6,
  Saturday = 7,
  Sunday = 1,
}

console.log(WeekDays.Friday);
console.log(WorkDays.Monday);

// Objects
const testSubject: {
  id: number;
  name: string;
} = {
  id: 2,
  name: "Cornwall",
};

// ALTERNATE to above:
type SubjectProp = {
  id: number;
  name: string;
};

// Objects
const Subject: SubjectProp = {
  id: 2,
  name: "Cornwall",
};

// Type Assertion - Tells compiler to treat an entity as a different type.
// 2 Ways tp assert type.
let cid: any = 1;
let assertID1 = <number>cid;
let assertID2 = cid as number;

// Override vs overload?

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

// Interface
interface Banks {
  (names): void;
}

const brag: Banks = ()