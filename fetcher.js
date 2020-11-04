const fs = require('fs');
const args = process.argv.slice(2);
const request = require('request');
request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, function(err){
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const downloadedFile = fs.statSync(args[1])
    const fileSize = downloadedFile["size"];

    console.log('Downloaded ' + fileSize + ' bytes to ' + args[1]);
  
});
});
