//metodo.js
const http = require('http');
const porta = 8080
const pessoas = require('./pessoas');

const servidor = http.createServer((requisicao, resposta) => {
    resposta.setHeader('content-type', 'application/json; charset = utf-8')

    if(requisicao.url == '/'){
        resposta.statusCode = 200
        resposta.write(JSON.stringify({pagina: 'APIDEV 1.0', autor: 'João Pedro Alves Lopes'}))
    }else if(requisicao.url == '/funcionarios'){
        resposta.statusCode = 200
        resposta.write(JSON.stringify({conteudo: pessoas}))
    }else if(requisicao.url == '/funcionarios/desenvolvedores'){
        resposta.statusCode = 200
        resposta.write(JSON.stringify({conteudo: pessoas.filter()}))
    }else{
        resposta.statusCode = 404
        resposta.write(JSON.stringify({erro: 'Página não encontrada'}))
    }
    
    resposta.end()
})

servidor.listen(porta), () => console.log(`Servidor rodando na porta ${porta}`)