function calTotal(){
    const priceNodes = fetchPriceNodes()
    // console.log(priceNodes);
    const totalPrice = sumOfAllPriceNode(priceNodes);
    if(!checkGrandTotalExists()){
        const grandTotalRow = createGrandTotalRow(totalPrice);
        // console.log(grandTotalRow);
        appendGrandTotalRowToTable(grandTotalRow)
    }else{
        updateGrandTotalRow(grandTotalRow);
    }
}

function fetchPriceNodes(){
    const selector = '[data-ns-text="price"]';
    const nodes = document.querySelectorAll(selector);
    return nodes;
}


function sumOfAllPriceNode(priceNodes){
    let sum = 0;
    for(let i=0;i<priceNodes.length;i++){
        const priceText = priceNodes[i].innerText;
        const price = Number(priceText);
        sum += price;
    }
    // console.log(sum);
    return sum;
}


function createGrandTotalRow(totalPrice){
    const row = document.createElement("tr");
    const col1 = document.createElement('td')
    const col2 = document.createElement('td')
    col1.innerText = "Grand-Total";
    col2.innerText = totalPrice;
    col2.setAttribute('data-ns-test','grandTotal')
    row.appendChild(col1);
    row.appendChild(col2);
    // console.log(row);
    return row;
}

function checkGrandTotalExists(){
    const selector = '[data-ns-test = "grandTotal"]';
    const grandTotalNode = document.querySelector(selector);
    // console.log(grandTotalNode);
    return grandTotalNode !== null;
}

function appendGrandTotalRowToTable(grandTotalRow){
    const tbodyNodes = document.getElementsByTagName('tbody');
    const tbodyNode = tbodyNodes[0];
    tbodyNode.appendChild(grandTotalRow);
}

function updateGrandTotalRow(totalPrice){
    const selector = '[data-ns-test="grandTotal"]';
    const totalNode = document.querySelector(selector);
    // console.log(totalNode);
    totalNode.innerText = totalPrice
}