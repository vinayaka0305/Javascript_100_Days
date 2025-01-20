const arr = [[1,2],[3,4],[5,6]];

function flattenTheArray(arr,n){
    if(n === 0)return arr;
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] === "number"){
            result.push(arr[i])
        }else{
           result.push(...flattenTheArray(arr[i],n-1))
        }
    }
    return result;
}

console.log(flattenTheArray(arr,1))