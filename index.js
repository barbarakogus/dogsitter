const enviarFormulario = document.querySelector(".enviar");

const tabelaBody = document.querySelector(".tabela-body");

let contadorMensagem = 0;

enviarFormulario.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.querySelector("form");

    const cliente = obterDadosDoFormulario(form);
    
    if(!validarFormulario(cliente)){
        return;
    };

    const clienteTr = criarTr(cliente);
 
    tabelaBody.appendChild(clienteTr);

    form.reset();
    const caracteres = document.querySelector("#numero-maximo");
    caracteres.innerHTML = "";
});

function obterDadosDoFormulario(form){
    const cliente = {
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
    const tr = document.createElement("tr");

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
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validarFormulario (cliente){
    let estaValido = true;
    const span = document.querySelectorAll(".span");   
    if(cliente.nome.length == 0){ //apenas no JS "" == 0;
        span[0].textContent = "O campo nome é indispensável";
        estaValido = false;
    }else {
        span[0].textContent = ""; 
    }
    if(cliente.email.length == ""){
        span[1].textContent = "O campo email é indispensável";
        estaValido = false;
    }else if(!validaEmail(cliente.email)){
        span[1].textContent = "O campo email está fora do padrão";
        estaValido = false;
    }
    else{
        span[1].textContent = "";
    }
    if(cliente.telefone.length == ""){
        span[2].textContent = "O campo telefone é indispensável";
        estaValido = false;
    }else if(isNaN(cliente.telefone)){
        span[2].textContent = "O campo telefone deve conter apenas números";
        estaValido = false;
    }else{
        span[2].textContent = "";
    }  
    return estaValido;
}

function validaEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function maximoCaracteresTextArea(){
    const textArea = document.querySelector("#mensagem");
    const caracteres = document.querySelector("#numero-maximo");

    textArea.addEventListener("input", function(){
        contadorMensagem++;
        caracteres.innerHTML = "(" + contadorMensagem + ")";
    })
};



