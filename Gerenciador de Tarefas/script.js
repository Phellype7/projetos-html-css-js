
let tarefas = [];
let total = 0;
let codigo = 1;

document.getElementById("formulario").onsubmit = function(event) {
    event.preventDefault();

    let descricao = document.getElementById("descricao").value;
    let tipo = document.getElementById("tipo").value;

    if (descricao == "" || tipo == "") {
        alert("Preencha todos os campos!");
    } else {
        let tarefa = {
            codigo: codigo,
            descricao: descricao,
            tipo: tipo
        };

        tarefas.push(tarefa);

        mostrarTarefas();

        codigo++;
        total++;

        atualizarContador();

        document.getElementById("formulario").reset();
    }
};

function mostrarTarefas() {
    document.getElementById("lista-pendente").innerHTML = "";
    document.getElementById("lista-andamento").innerHTML = "";
    document.getElementById("lista-concluida").innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let tarefa = tarefas[i];

        let texto = "<li>Código: " + tarefa.codigo +
                    " - " + tarefa.descricao + "</li>";

        if (tarefa.tipo == "pendente") {
            document.getElementById("lista-pendente").innerHTML += texto;
        } else if (tarefa.tipo == "andamento") {
            document.getElementById("lista-andamento").innerHTML += texto;
        } else {
            document.getElementById("lista-concluida").innerHTML += texto;
        }
    }
}

function atualizarContador() {
    document.getElementById("contador").innerHTML = total;

    if (total <= 3) {
        document.getElementById("contador").style.color = "red";
    } else {
        document.getElementById("contador").style.color = "green";
    }
}

document.getElementById("formulario-excluir").onsubmit = function(event) {
    event.preventDefault();

    let numero = document.getElementById("codigo").value;
    let encontrou = false;

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].codigo == numero) {
            encontrou = true;
        }
    }

    if (encontrou == true) {
        let confirmar = confirm("Deseja excluir essa tarefa?");

        if (confirmar == true) {
            for (let i = 0; i < tarefas.length; i++) {
                if (tarefas[i].codigo == numero) {
                    tarefas.splice(i, 1);
                    total--;
                    break;
                }
            }

            mostrarTarefas();
            atualizarContador();
        }
    } else {
        alert("Código não encontrado!");
    }

    document.getElementById("formulario-excluir").reset();
};