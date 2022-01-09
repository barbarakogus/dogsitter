const enviarFormulario = document.querySelector(".enviar");

const tabelaBody = document.querySelector(".tabela__body");

let contadorMensagem = 0;

enviarFormulario.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.querySelector("form");
    const cliente = obterDadosDoFormulario(form);

    if(!validarFormulario(cliente)){
        return;
    };

    fetch("http://localhost:3000/clients", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(cliente)
    })
    .then(response=>response.json())
    .then((data)=> {
        cliente.id = data;
        adicionarClienteTabela(cliente);
    })
    .catch(function(res){ console.log(res) })

    form.reset();
    const caracteres = document.querySelector("#numero-maximo");
    caracteres.innerHTML = "";
    
});

function obterDadosDoFormulario(form){
    const cliente = {
        name: form.nome.value,
        namePet: form.nomePet.value,
        email: form.email.value,
        phone: form.telefone.value,
        message: form.mensagem.value,
        contactWay: form.contato.value,
        period: form.periodo.value,
        receiveNotifications: form.cheackbox.checked ? "sim" : "não" //if ternário(?): if checkbox.checked for true, assume "sim", se n "não". Usado para validações pequenas, simples.
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

    tr.appendChild(criarTd(cliente.id, "info__id"));
    tr.appendChild(criarTd(cliente.name, "info__nome__proprietario"));
    tr.appendChild(criarTd(cliente.namePet, "info__nome__pet"));
    tr.appendChild(criarTd(cliente.email, "info__email"));
    tr.appendChild(criarTd(cliente.phone, "info__telefone"));
    tr.appendChild(criarTd(cliente.message, "info__mensagem"));
    tr.appendChild(criarTd(cliente.contactWay, "info__contato"));
    tr.appendChild(criarTd(cliente.period, "info__periodo"));
    tr.appendChild(criarTd(cliente.receiveNotifications, "info__checkbox"));

    tr.classList.add("conteudo__tabela");

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
    if(cliente.name.length == 0){ //apenas no JS "" == 0;
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
    if(cliente.phone.length == ""){
        span[2].textContent = "O campo telefone é indispensável";
        estaValido = false;
    }else if(isNaN(cliente.phone)){
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

    textArea.addEventListener("keydown", function(event){ //"input" - consegue ouvir que o teclado está sendo usadp, porém o keyDown consegue ler qual tecla está sendo pressionada.
        let tecla = event.keyCode;
        console.log(tecla);
        if(tecla == 8){
            console.log("entrei");
            contadorMensagem -= 1;            
        }else {
            contadorMensagem++;
        }

        if(contadorMensagem < 0){
            contadorMensagem = 0;
        }
        if(contadorMensagem >= 50){
            contadorMensagem = 50
        }    
        caracteres.innerHTML = "(" + contadorMensagem + ")";
    })
};

maximoCaracteresTextArea();

function adicionarClienteTabela (cliente){
    const clienteTr = criarTr(cliente);
    contadorMensagem = 0;
    tabelaBody.appendChild(clienteTr);
}


