let amigos = [];

function adicionarAmigo() {

    let campoAmigo = document.getElementById('amigo');

    let nomeAmigo = campoAmigo.value;

    if (nomeAmigo === "" || nomeAmigo.trim() === "") {
         alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);

    campoAmigo.value = "";

    atualizarListaAmigos();
}

function atualizarListaAmigos() {

    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }

}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }
      
    let numeroAleatorio = Math.random();
    
    let numeroAleatorioMaior = numeroAleatorio * amigos.length;
    
    let indiceAleatorio = Math.floor(numeroAleatorioMaior);
     
    let amigoSorteado = amigos[indiceAleatorio];
    
    let elementoResultado = document.getElementById('resultado');
    
    elementoResultado.innerHTML = "O amigo sorteado é: " + amigoSorteado + "!";
  
}