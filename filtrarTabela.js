const filtro = document.querySelector("#filtro-tabela");

filtro.addEventListener("input", function(){
    const clientes = document.querySelectorAll(".conteudo-tabela");
    for(let i = 0; i<clientes.length; i++){
        const cliente = clientes[i]; 
        let nome = cliente.querySelector(".info-nome-proprietario").textContent;
        let nomePet = cliente.querySelector(".info-nome-pet").textContent;
        let expressao = new RegExp(this.value, "i");
        if(!expressao.test(nome) && (!expressao.test(nomePet))){
            cliente.classList.add("invisivel");
        }else {
            cliente.classList.remove("invisivel");
        }
    }    
})