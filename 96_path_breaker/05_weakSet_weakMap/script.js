//weakSet and weakMap;

//They are special version of set and map in js, but with weaker reference to objects
//Means
//they donot prevent grabage collection(Objects inside them can be removed when not used)

//They store only objects, not primitive values likes strings or numbers


//weakSet

let weakSet = new WeakSet();

let obj = {name:"alice"};

weakSet.add(obj);

console.log(weakSet.has(obj));

obj = null;

//stores only objects (no string,numbers etc)
//Objects can be removed automatically if not used anywhere else
//No size property & no way to loop through it(because items might disappear)

/////////////////////////////////////////////////////////////////////////////////////

//weakMap

//Keys must be objects, not strings or numbers.
//Objects can be removed automatically if not used anywhere else.
//No size property & no way to loop through it (because keys might disappear).


let weakMap = new WeakMap();

let user = {name:"bob"};

weakMap.set(user,"Admin");// Store user data

console.log(weakMap.get(user));//Admin


user = null;// Remove reference

// Now the user key will be removed from WeakMap automatically (garbage collected)
