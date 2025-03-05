
function formatString(str){
    return str.replace(/([A-Z])/g," $1").trim().toLowerCase();
}
const str = "VinayakaIsGivingInterview";
console.log(formatString(str));

//([A-Z]) -> finds all uppercase letters

//" $1" ->  Add a space before each uppercase letter ($1 refer to the matched letter)

//.trim() -> removes the extraspace from beginnig;

//.toLowerCase -> convert entire string to lowercase