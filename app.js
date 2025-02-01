//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos= [];

function adicionarAmigo() {
   let amigoSecreto = document.querySelector("input").value;
    if (amigoSecreto == "") {
        alert('Por favor, insira um nome válido');
        return;
    }
    amigos.push(amigoSecreto);
    atualizarLista();
    limparCampo();
    }

function limparCampo() {
   let amigos = document.querySelector('input');
    amigos.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let conteudo = ''; 
    for (let i = 0; i < amigos.length; i++) {
        conteudo += `<li>${amigos[i]}</li>`;
    }
    lista.innerHTML = conteudo; 
}

function sortearAmigo() {
   if (amigos.length < 2) {
    alert('Digite pelo menos dois nomes para que seja possível o sorteio!');   
    } else {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        nomeSorteado = amigos[indiceSorteado];
        resultado.innerHTML= `O amigo secreto é ${nomeSorteado}`;
    }
   }