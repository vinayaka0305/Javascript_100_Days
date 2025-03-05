var a = 200; // Declares a global variable 'a' with value 200

{
  var a = 600; // 'var' does not have block scope, so it overwrites the previous 'a' (200 → 600)
}

let b = a; // 'b' is assigned the value of 'a', which is now 600

{
  let b = -400; // This 'b' is a new variable limited to this block (shadowing the outer 'b')
  // It does not affect the outer 'b'
}

console.log(b); // Logs the outer 'b', which is still 600
