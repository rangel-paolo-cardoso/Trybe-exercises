const net = require('net');
const server = net.createServer((c) => {
  console.log('client connected!');

  c.on('end', () => {
    console.log('client disconnected!');
  });

  c.write('hello\r\n');

  c.on('data', (data) => {
    console.log('Aqui do client: ', data.toString());
  });

  c.pipe(c);
});

server.on('error', (err) => {
  throw err;
});

server.listen(8085, () => {
  console.log('Server bound');
});


/**
 * (GET request)
 * curl address.com or curl -X GET address.com
 * 
 * (POST resquest) passing a JSON through the request
 * (use \ on the terminal to concatenate separated lines of code)
 * curl -X POST -H 'Content-Type: application/json' -d '{"foo": "bar"}' address.com
 * 
 * (POST request) passing headers through the request (you can use -H -d instead of --header and --data respectively)
 * curl --request POST --header 'Content-Type: application/json' --header 'Authorization: apikey EXAMPLE-TOKEN' -data '{"foo": "bar"}' address.com
*/
