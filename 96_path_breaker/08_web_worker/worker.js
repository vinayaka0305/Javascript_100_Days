self.onmessage = function(event) {
    let result = event.data * 2; // Multiply received number by 2
    postMessage(result); // Send the result back
};
