import { useState } from "react"

function Ad_Tasks({adicionarTask}){

    var [title, setTitle] = useState("");
    var [description, setDescription] = useState("");
    
    return(
        <div className="task" id="ad_tasks">
        
        <input type="text" name="title" id="ititle" placeholder="Título da Tarefa" value={title} onChange={(event)=> setTitle(event.target.value)}/>

        <input type="text" name="description" id="idescription" placeholder="Descrição da Tarefa" value={description} onChange={(event)=> setDescription(event.target.value)}/>
        
        <button onClick={() => {
            if(!title.trim() || !description.trim()){
                window.alert("Não foi possível adicionar tarefa, verifique os campos acima")
            }
            else{
            adicionarTask(title, description)
            }
            setTitle("")
            setDescription("")
        }}>Adicionar</button>
        </div>
    )
}

export default Ad_Tasks