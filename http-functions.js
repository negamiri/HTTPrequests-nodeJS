var https = require ('https');

module.exports = function getHTML (options, callback) {
    https.get(options, function(response){

    if (response.statusCode !== 200){
      callback(new Error('Request Failed. Status code: ' + response.statusCode), null);
      return;
    }

    response.setEncoding('utf8');

    var body = '';
    response.on('data', function (data){
      body += data;
    });

    response.on('end', function() {
      callback(body);
    });

  });
};