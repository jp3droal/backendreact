const http = require("http");

const porta = 3000;

const servidor = http.createServer((requisicao, resposta) =>{
    resposta.write("Hello, Mundo!!!")
    resposta.end();
}).listen(porta)