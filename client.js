

function getAndPrintHTMLChunks () {

  var https = require ('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response){

    if(response.statusCode !== 200) {
      callback(new Error('Request Failed. Status code: ' + response.statusCode), null);
      return;
    }

    response.setEncoding('utf8');

    response.on('data', function(data){
      console.log(data);

    });

    response.on('end', function(){
      console.log('Request has finished');
    });

  });

}

console.log(getAndPrintHTMLChunks());