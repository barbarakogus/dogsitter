const buscarPaciente = document.querySelector(".buscar__paciente");

const spanBuscarPaciente = document.querySelector("#erro-buscar-paciente");

buscarPaciente.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://storage.googleapis.com/keepin-dev/barbara/dados2");
    xhr.send();

    xhr.addEventListener("load", function(){
        const retorno = xhr.responseText;
        console.log(retorno);
        
        if(xhr.status == 200){
            spanBuscarPaciente.innerHTML = "";
            let clientes = JSON.parse(retorno);
            console.log(clientes);
            for(let i = 0; i<clientes.length; i++){
                adicionarClienteTabela(clientes[i]);
            }
        }else {
            spanBuscarPaciente.innerHTML = "Erro ao buscar paciente";
            console.log("erro na requisição");
        }
    })
})