function zigZag(n){
    let num = 1;
    for(let i=1;i<=n;i++){
        let row = [];
        for(let j=1;j<=n;j++){
            row.push(num++);
        }
        if(i%2 ===0)row.reverse();
        console.log(row.join(' '))
    }
}

zigZag(4);