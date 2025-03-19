const str = "apple 3 orange 1 banana 2";

function sortWordsAlphabeticallyAndNumsAssenOrder(str){
    // let items = str.split(" ");

    // let pairs = [];

    // for(let i=0;i<items.length;i=i+2){
    //     pairs.push([items[i],Number(items[i+1])])
    // }

    // console.log(pairs);

    // let sortWords = pairs.map((pair)=>pair[0]).sort()
    // console.log(sortWords);

    // let sortNumbers = pairs.map((pair)=>(pair[1])).sort((a,b)=>a-b);
    // console.log(sortNumbers);

    let sortWords = [];
    let sortNumbers = [];

    str.split(" ").forEach((item)=>{
        if(isNaN(item)){
            sortWords.push(item);
        }else{
            sortNumbers.push(Number(item));
        }
    })

    console.log(sortNumbers,sortWords)

    sortWords.sort();

    sortNumbers.sort((a,b)=>a-b);

    console.log(sortNumbers,sortWords)

    let result = sortWords.map((word,index)=>(word + " " +sortNumbers[index])).join(" ");
    console.log(result);
    return result;
}

console.log(sortWordsAlphabeticallyAndNumsAssenOrder(str));