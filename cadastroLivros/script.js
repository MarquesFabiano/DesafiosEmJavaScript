function escopoLista() {
    const form = document.querySelector('.form');
    const listaResultado = document.querySelector('#livros');
    const livrosCadastrados = [];
  
    function cadastraLivros() {
      const nome = form.querySelector('#titulo');
      const autor = form.querySelector('#autor');
      const ano = form.querySelector('#ano');
  
      livrosCadastrados.push({
        nome: nome.value,
        autor: autor.value,
        ano: ano.value
      });
  
      listaResultado.innerHTML += `<tr><td>${nome.value}</td><td>${autor.value}</td><td>${ano.value}</td></tr>`;
    }
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      cadastraLivros();
    });
  
    function ordenarTitulo() {
      livrosCadastrados.sort((a, b) => a.nome.localeCompare(b.nome));
      listaResultado.innerHTML = '';
  
      livrosCadastrados.forEach(livro => {
        listaResultado.innerHTML += `<tr><td>${livro.nome}</td><td>${livro.autor}</td><td>${livro.ano}</td></tr>`;
      });
    }

    function ordenarAutor(){
        livrosCadastrados.sort((a,b) => a.autor.localeCompare(b.autor));
        listaResultado.innerHTML = '';

        livrosCadastrados.forEach(livro => {
            listaResultado.innerHTML += `<tr><td>${livro.nome}</td><td>${livro.autor}</td><td>${livro.ano}</td></tr>`;
        });
    }
  
    document.getElementById('botao-titulo').addEventListener('click', ordenarTitulo);
    document.getElementById('botao-autor').addEventListener('click', ordenarAutor);
  }
  escopoLista();
  