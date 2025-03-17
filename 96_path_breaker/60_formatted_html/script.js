function getFormattedHtml(htmlText) {
    const indentSize = 4; // Number of spaces for each indentation level
    let formattedHtml = ""; // Holds the final formatted HTML string
    let indentLevel = 0; // Tracks the current indentation level
  
    // Replace '><' with '>\n<' to split HTML into lines while preserving structure
    const lines = htmlText.replace(/>\s*</g, ">\n<").split("\n");
  
    lines.forEach((line) => {
      // Check if the current line is a closing tag (e.g., </div>)
      if (line.match(/^<\/\w/)) {
        // Reduce indentation level before adding the closing tag
        indentLevel = Math.max(indentLevel - 1, 0);
      }
  
      // Add the line to the formatted output with the correct indentation
      formattedHtml += " ".repeat(indentSize * indentLevel) + line + "\n";
  
      // Check if the line is an opening tag (e.g., <div> but not self-closing like <br/>)
      if (line.match(/^<\w[^>]*[^/]?>$/)) {
        // Increase indentation level for the next lines inside this tag
        indentLevel++;
      }
    });
  
    return formattedHtml.trim(); // Trim any extra newlines from the final output
  }
  
  // Example usage:
  console.log(
    getFormattedHtml(
      `<div class="container"><p>Hello, world!</p><ul><li>Item 1</li><li>Item 2</li></ul></div>`
    )
  );
  