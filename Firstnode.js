var http=require('http');
http.createServer(function(request,response){
            var hello="Hello ! Ruhul Amin Bin Abul Kasam Naogaon Computer Source Limited (CSL) is the largest IT Distributor in Bangladesh.For CSL, its customers are not only the most important stakeholders; rathert.";
response.writeHead(200,{'Content-type':'text/plain'})
response.end(hello);
}).listen(8080);
console.log("http://localhost:3000");

