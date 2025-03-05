//since escape() and unescape() are deprecated, use encodeURIComponent() and decodeURIComponent()


//1.Encoding(encodeURIComponent);
//converts special characters into a safe format url's

console.log(encodeURIComponent("Hello World!"));


//2.Decoding (decodeURIComponent);
//converts back into normal text

console.log(decodeURIComponent("Hello%20World%21"))

// Why Use encodeURIComponent() Instead of escape()?
// ✅ Works correctly with all Unicode characters.
// ✅ Follows modern web standards.
// ✅ escape() doesn't properly encode some characters like + and /, but encodeURIComponent()