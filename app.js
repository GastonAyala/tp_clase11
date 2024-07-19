const importar = require('./collectibles.js');

const hotToys = importar("Hot Toys");
const bandai = importar("Bandai");
const starWars = importar("Star Wars");
// console.log(starWars);

const unifiedCollectibles = [
    ...hotToys,
    ...bandai,
    ...starWars
];
// console.log(unifiedCollectibles);

const collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function () {
        this.figuras.forEach((figuras, index) => {
            console.log(`${index + 1} - marca: ${figuras.marca} nombre: ${figuras.nombre} precio: $${figuras.precio} stock: ${figuras.stock}`);
        });
    },
    figuresByBrand: function (marcaFigura) {
        const figurasFiltradas = this.figuras.filter(({ marca }) =>
            marca.toLowerCase() === marcaFigura.toLowerCase());
        return figurasFiltradas
    }
};

// console.log(collectibles.figuras);
// collectibles.listFigures();
// console.log(collectibles.figuresByBrand("Hot Toys"));
// console.log(collectibles.figuresByBrand("Bandai"));
// console.log(collectibles.figuresByBrand("Star Wars"));
module.exports = collectibles;