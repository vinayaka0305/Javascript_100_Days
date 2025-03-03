const arr = [1,2,3,4,5];
const tar = 9;
function two_sum(arr,tar){
    let left = 0;
    let right = arr.length-1;

    while(left<right){
        let currSum = arr[left]+arr[right];

        if(currSum === tar){
            return [left,right];
        }else if(currSum<tar){
            left++;
        }else{
            right++;
        }
    }
    return -1;
}


console.log(two_sum(arr,tar));