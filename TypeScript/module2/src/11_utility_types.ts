{
// Utility types

// Pick

type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
}

type Name1 = Person["name"] // Not an object
type Name2 = Pick<Person,"name"> // Pick -> fetching object
type NameAge = Pick<Person,"name" | "age"> // Pick

// Omit
type ContactInfo = Omit<Person,"name"|"age"> // Omit Person -> name and age

// Required
type PersonRequired = Required<Person> // Everyting is required of Person type

// Partial
type PersonPartial = Partial<Person> // Everyting is optional of Person type

// Readonly
type PersonReadonly = Readonly<Person> // Everything is readonly , so cannot be write

// Record
type Myobj = {
    a: string,
    b: string,
}

const obj: Myobj = {
    a: "aa",
    b: "bb",
    // c: "cc", // Cannot add extra element to obj for Myobj
    // d: "dd",
}

// Solution . . Using 'Record'
type Myobj1 = Record < string, string > 

const obj1: Myobj1 = {
    a: "aa",
    b: "bb",
    c: "cc", // addiing element is not an issue
    d: "dd",
}

const EmptyObj: Record<string,unknown> = {}; // Object key type is always string and value type unknown

}