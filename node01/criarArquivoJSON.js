const fs = require("fs");
const pets = require("./listaObjetos.js")
const caminho = "./arquivosTexto"
const codificacao = "utf-8"
const nomeArquivo = "pets.json"
const caminhoArquivo = `${caminho}/${nomeArquivo}`

fs.writeFile(caminhoArquivo, JSON.stringify(pets), (erro,dados) =>{
    if(erro){
        console.log(erro)
    }else{
        console.log("Arquivo criado com sucesso")
        console.log("Conteúdo do arquivo:")
        console.log(dados)
        fs.readFile(caminhoArquivo, codificacao, (erro, conteudo)=>{
            if (err) throw erro
            console.log(conteudo)
        })
    }
})