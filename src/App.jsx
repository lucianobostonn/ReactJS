import Tasks from "./componentes/Tasks"
import Ad_Tasks from "./componentes/Ad_tasks"
import "./App.css"
import { useEffect, useState } from "react";


function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
)

  console.log(tasks)
  function onTaskClick(taskId){
    const newTask = tasks.map((task)=>{
      if(task.id == taskId)
      {
        return {...task, isCompleted: !task.isCompleted}
      }
      
      return task
    })
    setTasks(newTask)
  }

  function removerTask(taskRemove){
    var out = tasks.filter(tasks => tasks.id !== taskRemove.id)
    setTasks(out)
  }

  function adicionarTask(title, description)
  {
    var newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false
    }
    setTasks([...tasks ,newTask])
  }


  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  useEffect(()=>{
    async function fetchTasks() {
      // CHAMAR A API
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      method: 'GET'
    })
    
    // PEGAR OS DADOS QUE ELA RETORNA
    var data = await response.json()
    // ARMAZENAR/PERSISTIR ESSES DADOS
    setTasks(data)
    }
    // Se eu quiser, posso usar uma API para pegar as tarefas
    // fetchTasks()
  }, [])

  return (
    <div className="um">
    <div id="dois">
      <h1>Gerenciador de Tarefas</h1>
      <Ad_Tasks adicionarTask={adicionarTask}/>

      <Tasks key={JSON.stringify(tasks)} tarefa={tasks} onTaskClick={onTaskClick} removerTask={removerTask}/>
      </div>
    </div>
  );
}

export default App