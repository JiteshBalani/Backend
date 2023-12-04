const http = require("http");

const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', "text.html");

    //Write response Content
    res.write("<html><head><title>NodeJs HTTP Server</title></head><body>");
    res.write("<h1>Hello World!</h1>");
    res.write("</body></html>");

    //End the response
    res.end();
});

server.listen(port, host, () => {
    console.log(`Server is listening on https://${host}:${port}`);
});