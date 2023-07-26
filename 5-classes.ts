interface PersonInterface {
  readonly id: number;
  name: string;
  register(): string;
}

// Classes
// Public
// Private - Is only accesible from the class.
// Protected
class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered. `;
  }
}

class Employee extends Person {
  role: string;
  constructor(id: number, name: string, role: string) {
    super(id, name);
    this.role = role;
  }
}

const bp = new Employee(28, "Bazell", "Dev");
const ak = new Person(12, "Ahkal");
// console.log(ak.id);
// see line 3
console.log(ak.register());
console.log(bp.register());
