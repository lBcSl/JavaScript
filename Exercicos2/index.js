let estoqueLivros = [];

function AdicionarLivro(titulo, autor, quantidade) {
   const livroExistente = estoqueLivros.find(livro => livro.titulo === titulo);

   if (livroExistente) {
      
   } else {
      estoqueLivros.push({ titulo, autor, quantidade });
      console.log(`Livro "${titulo}" adicionado com sucesso.`);
   }
}

function RemoverLivro(titulo) {
   const indice = estoqueLivros.findIndex(livro => livro.titulo === titulo);

   if (indice !== -1) {
      estoqueLivros.splice(indice, 1);
      
   } else {
      console.log("Livro não encontrado no estoque.");
   }
}

function atualizarQuantidade(titulo, novaQuantidade) {
   const livro = estoqueLivros.find(livro => livro.titulo === titulo);

   if (livro) {
      livro.quantidade = novaQuantidade;
      
   } else {
      console.log(`Livro "${titulo}" não encontrado no estoque.`);
   }
}

function listarLivros() {
   if (estoqueLivros.length === 0) {
   } else {
      console.log("Livros disponíveis no estoque:");
      estoqueLivros.forEach((livro, index) => {
         
      });
   }
}


AdicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 10);
AdicionarLivro("1984", "George Orwell", 5);
listarLivros();
RemoverLivro("1984");
listarLivros();
