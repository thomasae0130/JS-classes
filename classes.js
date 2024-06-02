class Corporations {
    constructor (name, value) {
        this._namename = name;
        this._value = value;
        this._employees = [];
}
get name () { return this._namename; }

get value () { return this._value; }

get employees () { return this._employees; }
}

class Google extends Corporations {
    constructor (name, value) {
        super(name, value);
        this._name = name;
        this._value = value;
        this._employees = [];
    }

    get name () { return this._name; }

    get value () { return this._value; }

    get employees () { return this._employees; }

    addEmployee (employee) {
        this._employees.push(employee);
    }
}

class Apple extends Corporations {
    constructor (name, value) {
        super(name, value);
        this._name = name;
        this._value = value;
        this._employees = [];
    }
    get name () { return this._name; }
    get value () { return this._value; }
    get employees () { return this._employees; }
    addEmployee (employee) {
        this._employees.push(employee);
    }
}


// Testing the code

// Create instances of Google and Apple
const google = new Google("Google Inc.", 1000000);
const apple = new Apple("Apple Inc.", 2000000);

// Add employees to Google
google.addEmployee("John Doe");
google.addEmployee("Jane Smith");

// Add employees to Apple
apple.addEmployee("Alice Johnson");
apple.addEmployee("Bob Brown");

// Log Google details
console.log("Google Name:", google.name);
console.log("Google Value:", google.value);
console.log("Google Employees:", google.employees);

// Log Apple details
console.log("Apple Name:", apple.name);
console.log("Apple Value:", apple.value);
console.log("Apple Employees:", apple.employees);

// Log details from the superclass method to verify inheritance
console.log("Google Name (superclass):", google.name);
console.log("Google Value (superclass):", google.value);
console.log("Google Employees (superclass):", google.employees);

console.log("Apple Name (superclass):", apple.name);
console.log("Apple Value (superclass):", apple.value);
console.log("Apple Employees (superclass):", apple.employees);