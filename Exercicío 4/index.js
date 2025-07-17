// trocar o titulo
const titulo = document.querySelector('h1');
titulo.textContent = 'Exercício Modulo 6';

// trocar o estilo do itens da lista
const itensLista =  document.querySelectorAll('li');
itensLista.forEach(item => {
    item.textContent = 'Item da lista'; 
    item.style.color = 'blue';
    item.style.fontWeight = 'bold';
    item.style.margin = '5px 0';
});

// adicionar uma classe aos paragrafos
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(p => {
    p.classList.add('paragrafo-estilizado');
});

const botao = document.querySelectorAll('button');
botao.forEach(btn => {
    btn.textContent = 'Clique aqui';
});

console.log('Exercício Modulo 6 executado com sucesso!');