function getFormatedHtml(htmlText){
  const indentSize = 4;
  let indentLevel = 0;
  let formattedHTML ="";

  const lines = htmlText.replace(/>\s*</g,">\n<").split("\n");
  console.log(lines);

  lines.forEach((line)=>{
    if(line.match(/^<\/\w/)){
      indentLevel = Math.max(indentLevel-1,0);
    }
    formattedHTML += " ".repeat(indentSize * indentLevel) + line + "\n";

    if(line.match(/^<\w[^>]*[^/]?>$/)){
      indentLevel++;
    }
  })
  return formattedHTML.trim();
} 


const str = `<h1>Heading</h1><div><p>This is para</p></div>`

console.log(getFormatedHtml(str));