function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    var body = '';

    response.on('data', function (data){
      body += data;
    })

    response.on('end', function(){
      console.log(body);
    });

  })

  /* Add your code here */

}

getAndPrintHTML();