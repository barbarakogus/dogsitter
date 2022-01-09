const tabela = document.querySelector(".tabela");

tabela.addEventListener("dblclick", function(event){
    const id = event.target.parentNode.firstChild.textContent
    
    fetch(`http://localhost:3000/clients/${id}`, {
        headers: {
            'Accept': 'application/json',
        },
        method: "DELETE",
    })
    .then(()=> {
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    })
    .catch(function(res){ console.log(res) })
});