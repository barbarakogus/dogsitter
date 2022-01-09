const buscarPaciente = document.querySelector(".buscar__paciente");

const spanBuscarPaciente = document.querySelector("#erro-buscar-paciente");

buscarPaciente.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/clients");
    xhr.send();

    xhr.addEventListener("load", function(){
        const retorno = xhr.responseText;
        
        if(xhr.status == 200){
            spanBuscarPaciente.innerHTML = "";
            let clientes = JSON.parse(retorno);
            for(let i = 0; i<clientes.length; i++){
                adicionarClienteTabela(clientes[i]);
            }
        }else {
            spanBuscarPaciente.innerHTML = "Erro ao buscar paciente";
            console.log("erro na requisição");
        }
    })
})