//Object.freeze() is method that makes an object immutable(unchangeable);

//You cannot add,remove or change properties of a frozen object

//It prevents accidental modifications, making your data safe;

let person = {name:"Alice",age:"25"}

Object.freeze(person);

person.age = 40 //   ❌ No effect (can't change)
person.city = "NY" // ❌ No effect (can't add)
delete person.name;// ❌ No effect (can't delete)

console.log(person); // { name: "Alice", age: 25 }

console.log(Object.isFrozen(person));


// 🔥 When to Use Object.freeze()?
// When you want constant objects that should never change.
// To protect data from accidental modifications.
// In Redux (React state management) to prevent unintended state changes.