onmessage = function(message) {
  let sum = (parseFloat(message.data[0])) + (parseFloat(message.data[1]));
  postMessage(sum);
}
