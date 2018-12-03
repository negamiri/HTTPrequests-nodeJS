var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getAndPrintHTML (options) {

  https.get(options, function(response){

    response.setEncoding('utf8');

    var body = '';

    response.on('data', function (data){
      body += data;
    })

    response.on('end', function(){
      console.log(body);
    });

  })

}

getAndPrintHTML(requestOptions);