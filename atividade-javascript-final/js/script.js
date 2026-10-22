/*
    Atividade: Painel de Tarefas Escolares

    Escreva aqui o código JavaScript para programar os recursos da página.
*/

// Selecionar os cards de tarefa
const cards = document.querySelectorAll(".tarefa")

const contador = document.querySelector("#contador-tarefas")

cards.forEach( function(card){

    const indicador = card.querySelector(".indicador-estado");
    const botao = card.querySelector(".botao-avancar")

    botao.addEventListener("click", function(){
    
        if (card.classList.contains("tarefa-pendente")) {
            card.classList.remove("tarefa-pendente");
            card.classList.add("tarefa-andamento");
    
            indicador.classList.remove("estado-pendente")
            indicador.classList.add("estado-andamento")
    
            indicador.textContent = "Em andamento";
            botao.textContent = "Concluir tarefa";
    
        } else if (
            card.classList.contains("tarefa-andamento")) {
            card.classList.remove("tarefa-andamento")
            card.classList.add("tarefa-concluida")
    
            indicador.classList.remove("estado-andamento")
            indicador.classList.add("estado-concluida")

            indicador.textContent = "Concluída";
            botao.textContent = "Recomeçar tarefa"


        } else {card.classList.contains("tarefa-concluida")
            card.classList.remove("tarefa-concluida")
            card.classList.add("tarefa-pendente")

            indicador.classList.remove("estado-concluida")
            indicador.classList.add("estado-pendente")

            indicador.textContent = "Pendente"
            botao.textContent = "Iniciar tarefa"
        }
    
        atualizarContador();

    });
});

function atualizarContador(){

    let concluidas = 0;

    cards.forEach(function(card){

        if(card.classList.contains("tarefa-concluida")) {
            concluidas++
        }
    });

    contador.textContent = concluidas  + " de 4 tarefas concluidas"
}

const mensagemMotivacional = document.querySelector("#mensagem-motivacional")

const botaoMensagemMotivacional = document.querySelector(".botao-motivacao")

const mensagens = [

    {
        mensagem: "Grandes aprendizados começam com pequenos passos."
    },
    {
        mensagem: "Cada exercício é uma oportunidade de descobrir algo novo."
    },
    {
        mensagem: "Com dedicação e prática, você chega mais longe."
    },
    {
        mensagem: "Errar faz parte do caminho de quem está aprendendo."
    },
    {
        mensagem: "Uma tarefa de cada vez: seu esforço está construindo resultados."
    },
    {
        mensagem: "Continue curioso e celebre cada progresso nos estudos."
    },
    {
        mensagem: "Não desista! Todo esforço conta."
    },
    {
        mensagem: "Você é capaz de aprender coisas incríveis."
    },
    {
        mensagem: "A persistência é o caminho para o sucesso."
    },
    {
        mensagem: "Cada dia é uma nova oportunidade para melhorar."
    },
    {
        mensagem: "O conhecimento que você conquista hoje fará a diferença amanhã."
    },
    {
        mensagem: "Pequenos avanços também são conquistas."
    },
    {
        mensagem: "Acredite no seu potencial e continue tentando."
    },
    {
        mensagem: "Seu futuro é construído com as escolhas que você faz hoje."
    },
    {
        mensagem: "Não precisa ser perfeito, basta continuar progredindo."
    },
    {
        mensagem: "Estudar um pouco hoje é melhor do que deixar tudo para amanhã."
    },
    {
        mensagem: "Os desafios são oportunidades para crescer."
    },
    {
        mensagem: "Você está mais perto do seu objetivo a cada tarefa concluída."
    },
    {
        mensagem: "A disciplina transforma objetivos em conquistas."
    },
    {
        mensagem: "Continue avançando, mesmo que seja um passo de cada vez."
    },
];

const historicoMensagens = [];

function exibirMensagemAleatoria(){

    const indicesDisponiveis = mensagens
    .map(function(_, indice){
        return indice;
    })
    .filter(function(indice) {
            if (historicoMensagens.includes(indice)) {
                return false;
            } else {
                return true;
            }
        });

    if (indicesDisponiveis.length === 0) {
        historicoMensagens.length = 0;

     mensagens.forEach(function(_, indice) {
        indicesDisponiveis.push(indice);
    });
}

    const posicaoAleatoria = Math.floor(
        Math.random() * indicesDisponiveis.length
    )

    const indiceAleatorio = indicesDisponiveis[posicaoAleatoria]

    const mensagemEscolhida = mensagens[indiceAleatorio];

    historicoMensagens.push(indiceAleatorio);

    if (historicoMensagens.length > 5) {
        historicoMensagens.splice(0, 1)
    }

    mensagemMotivacional.textContent = mensagemEscolhida.mensagem;

}

    botaoMensagemMotivacional.addEventListener("click", exibirMensagemAleatoria);

