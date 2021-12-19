import { useState, useCallback } from "react"

const useForm = (vlidationInfo, taskCreate, taskUpdate) => {
    const [task, setTask] = useState({
        id: null,
        task_description: '',
        timestamp: null,
    })
    

    const [searchValue, setSearchValue] = useState({
        timestamp: null
      })

    const clearTask = () => setTask({
      id: null,
      task_description: '',
      timestamp: null,
    })
    
    
    const [errors, serErrors] = useState({})

    const modalShow = useCallback(() => {
      setShow(true)
    }, [])
    
    
    const modalHide = useCallback(() =>{
      setShow(false)
      setEdit(false)
      clearTask()
    }, [])
    

    const [edit, setEdit] = useState(false)
    const [show, setShow] = useState(false)

    const onChangeHandler = (event) => {
        setTask({
          ...task,
          [event.target.name]: event.target.value
      })
    }
    

    const searchHandler = useCallback(event => {
        setSearchValue({
          ...searchValue,
          [event.target.name]: event.target.value
        })
      }, [searchValue])

    
    const onSubmitHandler = event => {
      event.preventDefault()
    
          if(edit){
            taskUpdate(task)
            modalHide()
          }else{
            let taskObj = new FormData()
            taskObj.append("task_description", task.task_description)
            taskObj.append("timestamp", task.timestamp.toISOString())
            if(task.task_description === '' || task.timestamp === null){
                serErrors(vlidationInfo(task))
            }else{
                taskCreate(taskObj)
                modalHide()
            }
          }
    }
    
    
      const editingTask = task => {
        setTask({
          id: task.id,
          task_description: task.task_description,
          timestamp: task.timestamp
        })
        modalShow()
        setEdit(true)
      }

    return {task, onChangeHandler, onSubmitHandler, searchHandler, editingTask, searchValue, errors, modalShow, modalHide, edit, show}

}

export default useForm