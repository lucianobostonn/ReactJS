import { useNavigate, useSearchParams } from "react-router-dom"
import './pages.css'
import { ChevronLeft } from "lucide-react"

function TaskPage() {
    var navigate = useNavigate()

    var [searchParams] = useSearchParams()
    var title = searchParams.get("title")
    var description = searchParams.get("description")

    return(
        <div>
            <div id="top">
                <span onClick={()=> navigate(-1)}><abbr title="VOLTAR"><ChevronLeft/></abbr></span>
                <h1>Detalhes da Tarefa</h1>
            </div>
            <div id="details">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default TaskPage;