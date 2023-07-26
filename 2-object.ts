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
