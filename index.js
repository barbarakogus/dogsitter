const enviarFormulario = document.querySelector(".enviar");

const tabela = document.querySelector(".tabela-body");

enviarFormulario.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.querySelector("form");

    const cliente = obterDadosDoFormulario (form);

    validarFormulario (cliente);
    
    if(!validarFormulario(cliente)){
        return;
    };

    const clienteTr = criarTr(cliente);
 
    tabela.appendChild(clienteTr);

    form.reset();
});

function obterDadosDoFormulario (form){
    let cliente = {
        nome: form.nome.value,
        nomePet: form.nomePet.value,
        email: form.email.value,
        telefone: form.telefone.value,
        mensagem: form.mensagem.value,
        contato: form.contato.value,
        periodo: form.periodo.value,
        checkbox: form.cheackbox.checked ? "sim" : "não" //if ternário(?): if checkbox.checked for true, assume "sim", se n "não". Usado para validações pequenas, simples.
    }
  //  if(cliente.checkbox){
  //      cliente.checkbox = "sim";
  //  }else {
  //      cliente.checkbox = "não";
  //  }
    return cliente;
}

function criarTr (cliente){
    let tr = document.createElement("tr");

    tr.appendChild(criarTd(cliente.nome, "conteudo-tabela"));
    tr.appendChild(criarTd(cliente.nomePet, "conteudo-tabela"));
    tr.appendChild(criarTd(cliente.email, "conteudo-tabela"));
    tr.appendChild(criarTd(cliente.telefone, "conteudo-tabela"));
    tr.appendChild(criarTd(cliente.mensagem, "conteudo-tabela"));
    tr.appendChild(criarTd(cliente.contato, "conteudo-tabela"));
    tr.appendChild(criarTd(cliente.periodo, "conteudo-tabela"));
    tr.appendChild(criarTd(cliente.checkbox, "conteudo-tabela"));

    return tr;
}

function criarTd (dado,classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validarFormulario (cliente, span){
    let estaValido = true;
    const span = document.querySelectorAll(".span");   
    
    if(cliente.nome.length == ""){
        span[0].textContent = "O campo nome é indispensável";
        estaValido = false;
        return;
    }
    if(cliente.email.length == ""){
        span[1].textContent = "O campo email é indispensável";
        estaValido = false;
        return;
    }
    if(cliente.telefone.length == ""){
        span[2].textContent = "O campo telefone é indispensável";
        estaValido = false;
        return;
    };
    return estaValido;
}



