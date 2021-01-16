const http = require('http');

//using normal function to pass as request listner.
// function rqListner(request, response){

// }

// http.createServer(rqListner); //request listner as an argument.


// or we can also use anonymous function.

// http.createServer(function(req, res){
//     console.log(" anonymous function ");

// });

// or we can also use anonymous functions.

// http.createServer((req,res) => {
//     console.log("arrow function");
// });


// This method returns a server which we'll have to save in a const. 

// const server = http.createServer((req,res) => {
//     // console.log("arrow function");
//     console.log(req.url+"\n"+ req.method +"\n"+ req.headers);
//     // process.exit();     // used to exit event loop... 
// });
//now node.js will not immediately exit instead will listen ...
// listen method will take some parameters , very first being port number
//server.listen(8000);



// get is default HTTP method used ...
// let's use response object ...

// we fill res by data that we want to sent back ... 

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Hello from my Node Js server</body>');
    res.write('</head>');
    res.end();
    
});
server.listen(8000);
