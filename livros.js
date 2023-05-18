const livros = [];

function registraLivros(titulo, autor, paginas) {
    livros.push({ titulo: titulo, autor: autor, paginas: paginas });
}

function calcularTotalPaginas() {
    console.log("Total de páginas: ");
    let totalPaginas = 0;
    for (let i = 0; i < livros.length; i++) {
        totalPaginas += livros[i].paginas;
    }
    return totalPaginas;
}

registraLivros("Fabiano", "Marques", 150);
registraLivros("Lara", "Campos", 250);
registraLivros("Angela", "Maria", 233);

console.log(livros);
console.log(calcularTotalPaginas());
