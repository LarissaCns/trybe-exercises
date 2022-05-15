// função de escrita de arquivos
const fs = require('fs');

const writingFile = (nomeDoArquivo, conteudoDoArquivo) => {
    fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);
  
    return 'ok';
  };

module.exports = writingFile;