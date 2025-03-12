//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Declara um array vazio chamado 'amigos' para armazenar os nomes dos amigos.
const amigos = [];

// Obtém uma referência ao elemento de entrada de texto com o ID 'amigo'.
const inputAmigo = document.getElementById('amigo');

// Obtém uma referência ao elemento de lista não ordenada (<ul>) com o ID 'listaAmigos'.
const listaAmigos = document.getElementById('listaAmigos');

// Obtém uma referência ao elemento de lista não ordenada (<ul>) com o ID 'resultado'.
const resultadoLista = document.getElementById('resultado');

// Define uma função chamada 'adicionarAmigo' que é chamada quando o botão "Adicionar" é clicado.
function adicionarAmigo() {
    // Obtém o valor do campo de entrada, remove espaços em branco extras e armazena em 'nomeAmigo'.
    const nomeAmigo = inputAmigo.value.trim();

    // Verifica se 'nomeAmigo' não está vazio.
    if (nomeAmigo !== '') {
        // Adiciona 'nomeAmigo' ao final do array 'amigos'.
        amigos.push(nomeAmigo);

        // Limpa o valor do campo de entrada.
        inputAmigo.value = '';

        // Chama a função 'atualizarListaAmigos' para atualizar a lista exibida na página.
        atualizarListaAmigos();
    }
}

// Define uma função chamada 'atualizarListaAmigos' para atualizar a lista de amigos na página.
function atualizarListaAmigos() {
    // Limpa o conteúdo da lista 'listaAmigos'.
    listaAmigos.innerHTML = '';

    // Itera sobre cada nome no array 'amigos'.
    amigos.forEach(amigo => {
        // Cria um novo elemento de lista (<li>).
        const itemLista = document.createElement('li');

        // Define o texto do elemento de lista como o nome do amigo.
        itemLista.textContent = amigo;

        // Adiciona o elemento de lista à lista 'listaAmigos'.
        listaAmigos.appendChild(itemLista);
    });
}

// Define uma função chamada 'sortearAmigo' para realizar o sorteio do amigo secreto.
function sortearAmigo() {
    // Verifica se há pelo menos dois amigos para o sorteio.
    if (amigos.length < 2) {
        // Exibe um alerta se não houver amigos suficientes.
        alert("Adicione pelo menos dois amigos para o sorteio.");

        // Sai da função.
        return;
    }

    // Declara um array vazio chamado 'pares' para armazenar os pares de amigos sorteados.
    let pares = [];

    // Cria uma cópia do array 'amigos' chamada 'amigosDisponiveis'.
    let amigosDisponiveis = [...amigos];

    // Itera sobre cada amigo no array 'amigos'.
    for (let i = 0; i < amigos.length; i++) {
        // Obtém o amigo atual.
        let amigoAtual = amigos[i];

        // Declara uma variável 'amigoSorteado' para armazenar o amigo sorteado.
        let amigoSorteado;

        // Tenta encontrar um amigo diferente para sortear (até 100 tentativas para evitar loops infinitos).
        for (let tentativas = 0; tentativas < 100; tentativas++) {
            // Gera um índice aleatório dentro do array 'amigosDisponiveis'.
            let indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);

            // Obtém o amigo sorteado do array 'amigosDisponiveis'.
            amigoSorteado = amigosDisponiveis[indiceSorteado];

            // Verifica se o amigo sorteado é diferente do amigo atual.
            if (amigoSorteado !== amigoAtual) {
                // Sai do loop interno se um amigo diferente for encontrado.
                break;
            }
        }

        // Verifica se nenhum amigo diferente foi encontrado após 100 tentativas.
        if (amigoSorteado === amigoAtual) {
            // Exibe um alerta e sai da função.
            alert("Não foi possível sortear amigos. Tente novamente.");
            return;
        }

        // Adiciona o par de amigos sorteados ao array 'pares'.
        pares.push({ amigoAtual, amigoSorteado });

        // Remove o amigo sorteado do array 'amigosDisponiveis'.
        amigosDisponiveis = amigosDisponiveis.filter(amigo => amigo !== amigoSorteado);
    }

    // Limpa o conteúdo da lista de resultados.
    resultadoLista.innerHTML = '';

    // Itera sobre cada par de amigos sorteados no array 'pares'.
    pares.forEach(par => {
        // Cria um novo elemento de lista (<li>).
        const resultadoItem = document.createElement('li');

        // Define o texto do elemento de lista como o par de amigos sorteados.
        resultadoItem.textContent = `${par.amigoAtual} => ${par.amigoSorteado}`;

        // Adiciona o elemento de lista à lista de resultados.
        resultadoLista.appendChild(resultadoItem);
    });
}