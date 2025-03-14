import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"

function Tasks(proprio){
    var navigate = useNavigate();

    function details(task){
        var query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }
    return (
    <div className="task">
        <ul>{proprio.tarefa.map((task)=> 
            <li key={task.id}>
                <button id="text" 
                onClick={()=> proprio.onTaskClick(task.id)} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                    {task.isCompleted && <CheckIcon/>}
                {task.title}
                
                </button>
                
            <button id="botão" onClick={() => details(task)}>
            <abbr title="DETALHES"><ChevronRightIcon/></abbr>
            </button>
            <button id="botão" onClick={() =>{proprio.removerTask({id: task.id})}}>
            <abbr title="DELETE"><TrashIcon/></abbr>
            </button>
        </li>)}</ul>
    </div>
    )
}

export default Tasks