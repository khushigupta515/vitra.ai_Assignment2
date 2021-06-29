const port=8000;
const http = require('http');

function requesthandler(req,res)
{
 console.log(req.url);
 
}

//event emitter
const server = http.createServer(requesthandler);
server.listen(port,function(err)
{if(err)console.log('Error occured in creating server');
else console.log('Sever up and running on port',port);
});



