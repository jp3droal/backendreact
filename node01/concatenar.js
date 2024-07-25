const fs = require('fs');


const arquivo1 = 'arquivotxt1.txt';
const arquivo2 = 'arquivotxt2.txt';
const arquivoSaida = 'arquivotxt3.txt';


function concatenarArquivos(arquivo1, arquivo2, arquivoSaida) {
  
  fs.readFile(arquivo1, 'utf8', (err, data1) => {
    if (err) {
      console.error(`Erro ao ler ${arquivo1}:`, err);
      return;
    }
    
    
    fs.readFile(arquivo2, 'utf8', (err, data2) => {
      if (err) {
        console.error(`Erro ao ler ${arquivo2}:`, err);
        return;
      }
      
      const conteudoConcatenado = data1 + '\n' + data2;
      fs.writeFile(arquivoSaida, conteudoConcatenado, 'utf8', (err) => {
        if (err) {
          console.error(`Erro ao escrever ${arquivoSaida}:`, err);
        } else {
          console.log(`Arquivos concatenados com sucesso em ${arquivoSaida}`);
        }
      });
    });
  });
}


concatenarArquivos(arquivo1, arquivo2, arquivoSaida);