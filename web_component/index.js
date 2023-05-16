const port = 3000;

const server = http.createServer((req,res)=>{
    let.urlPath = req.url.split('/'[1]);
    console.log("Before readFile");
    FileSystem.readFile(urlPath,(err,data)=>{
        if(err){
            res.setHeader('Content-Type','text/html');
            res.write("<h1>Error</h1>");
            res.end();
            console.log("Error garlaa");
        }
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.write(data);
        res.end();
        console.log('amjilttai duuslaa');
    });
    res.end();
    console.log('after readFile');
})
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
    
})