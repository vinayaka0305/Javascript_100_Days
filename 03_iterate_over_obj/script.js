//iterating over a object;

const personDetails = {
    name:'vinayaka',
    age:28,
    occupation:'FED'
}

// for-in-loop

for(let key in personDetails){
    //  console.log(key) //it print keys(name,age,occupation)
    // console.log(personDetails[key]) // it prints values(vinayaka,28,FED)
}

// object.keys

//object.keys returns an array of keys which are present
Object.keys(personDetails).forEach((key)=>{
    console.log(key,personDetails[key])
})