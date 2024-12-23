function creatCounter(intialValue){
let num = intialValue
   return {
    inrement(){
        return num += 1;
    },
    decrment(){
        return num -= 1;
    }
   }
}

const counter = creatCounter(5);
console.log(counter.inrement());
console.log(counter.decrment());
console.log(counter.inrement());