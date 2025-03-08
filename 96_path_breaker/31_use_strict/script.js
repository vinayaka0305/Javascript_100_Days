//Use-strict prevents bad coding practices and makes code stricter and safer

"use strict";

x = 10;// ❌ Error! x is not declared with let, const, or var
console.log(x);

//without use strict, js would allow this mistake and create x as a global varible
//But with use-strict, it throws an error, helping you avoid bugs



// Should You Always Use "use strict"?
// ✅ Yes! It helps write cleaner, safer, and less error-prone code.
// ✅ Modern JavaScript modules automatically use strict mode, so you don't always need to declare it manually.