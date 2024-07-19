const importar = marca => {
    const fs = require('fs');
    let nombreArchivo = ""; marca === "Hot Toys" ? nombreArchivo = "figuras1" : marca === "Bandai" ? nombreArchivo = "figuras2" : marca === "Star Wars" ? nombreArchivo = "figuras3" : "";
    const path = `./datos/${nombreArchivo}.json`;
    const marcaReadAndParse = JSON.parse(fs.readFileSync(path, 'utf-8'));
    return marcaReadAndParse
};
// console.log(importar("Bandai"));
module.exports = importar;