const enviarFormulario = document.querySelector(".enviar");

const tabela = document.querySelector(".tabela-body");

enviarFormulario.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.querySelector("form");
    
    let nome = form.nome.value;
    let nomePet = form.nomePet.value;
    let email = form.email.value;
    let telefone = form.telefone.value;
    let mensagem = form.mensagem.value;
    let contato = form.contato.value;
    let periodo = form.periodo.value;
    let checkbox = form.cheackbox.checked;
    
    let clienteTr = document.createElement("tr");
    let nomeTd = document.createElement("td");
    nomeTd.classList.add("conteudo-tabela");
    let nomePetTd = document.createElement("td");
    nomePetTd.classList.add("conteudo-tabela");
    let emailTd = document.createElement("td");
    emailTd.classList.add("conteudo-tabela");
    let telefoneTd = document.createElement("td");
    telefoneTd.classList.add("conteudo-tabela");
    let mensagemTd = document.createElement("td");
    mensagemTd.classList.add("conteudo-tabela");
    let contatoTd = document.createElement("td");
    contatoTd.classList.add("conteudo-tabela");
    let periodoTd = document.createElement("td");
    periodoTd.classList.add("conteudo-tabela");
    let checkboxTd = document.createElement("td");
    checkboxTd.classList.add("conteudo-tabela");

    nomeTd.textContent = nome;
    nomePetTd.textContent = nomePet;
    emailTd.textContent = email;
    telefoneTd.textContent = telefone;
    mensagemTd.textContent = mensagem;
    contatoTd.textContent = contato;
    periodoTd.textContent = periodo;
    checkboxTd.textContent = checkbox;

    clienteTr.appendChild(nomeTd);
    clienteTr.appendChild(nomePetTd);
    clienteTr.appendChild(emailTd);
    clienteTr.appendChild(telefoneTd);
    clienteTr.appendChild(mensagemTd);
    clienteTr.appendChild(contatoTd);
    clienteTr.appendChild(periodoTd);
    clienteTr.appendChild(checkboxTd);

    tabela.appendChild(clienteTr);
     
    
});

