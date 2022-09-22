function ConcluirTarefa(){
    var tarefaCheck = document.getElementsByName("tarefaCheck")
    for(let i=0;i<tarefaCheck.length;i++){
        tarefaCheck[i].addEventListener("click", ()=>{ // Aplicando os eventos no inputs
            var tarefa = tarefaCheck[i].parentElement
            if(tarefaCheck[i].checked){
                tarefa.className = "feito"
            }
            else{
                tarefa.removeAttribute("class")
            }
        })
    }
}

function AddTarefa(){
    function Adicionar(tarefas){ 
        const tarefaLista = document.querySelector('ul')
        for(let i=0;i<tarefas.length;i++){
            tarefaLista.innerHTML += `
                <li>
                    <input type="checkbox" name="tarefaCheck"  style="width: 10px;height: 10px;">
                    ${tarefas[i].nome}
                </li>
            ` //Adicionando o elemento dinamicamente
        }
    }

    let parametros = {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    } // Definindo alguns parametros
    
    fetch("/tarefas", parametros)//Fazendo a requisição da rota tarefas
        .then(resposta => resposta.json())
        .then(json => Adicionar(json))
    
}

AddTarefa()
document.onmousemove = ()=>{
    /*
        Enquanto o mous estiver sobre o documento, qualquer
        novo elemento que aparacer a função ConcluirTarefa poderá
        ser ativada
    */
    ConcluirTarefa()
}
