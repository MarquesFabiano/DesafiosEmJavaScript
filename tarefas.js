const tarefas = [];

function adicionaTarefa(nome, descricao) {
    tarefas.push({nome:nome, descricao:descricao, concluida: false});
}

function exibeTarefa(){
    console.log("Lista de tarefas:");
    for(i = 0; i < tarefas.length; i++) {
        const tarefa = tarefas[i];
        const status = tarefa.concluida ? "concluida" : "pendente";
        console.log(`${i+1}. ${tarefa.nome} - ${tarefa.descricao} - ${status}`);
    }
}

function marcarConcluida(indice){
    if (indice >= 0 && indice < tarefas.length){
        tarefas[indice].concluida = true;
        console.log("Tarefa Marcada como concluida!")
    } else {
        console.log("Tarefa não encontrada!")
    }
}
adicionaTarefa("Estudar JavaScript", "Concluir o capítulo 5 do livro");
adicionaTarefa("Fazer compras", "Comprar itens para o jantar");
adicionaTarefa("Passear com o cachorro", "Levar o cachorro para um passeio");

exibeTarefa();
marcarConcluida(1);
exibeTarefa();