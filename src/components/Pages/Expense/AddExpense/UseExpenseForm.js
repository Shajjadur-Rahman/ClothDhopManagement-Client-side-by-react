import { useState, useCallback } from "react"


const useForm = (vlidationInfo, addExpense, updateExpense) => {
    
    const [expense, setExpense] = useState({
        id: null,
        expense_type: '',
        expense_amount: '',
        timestamp: null
    })

    const clearExpense = () => {
        setExpense({
            id: null,
            expense_type: '',
            expense_amount: '',
            timestamp: null
        })
    }

    const [errors, setErrors] = useState({})
    const [edit, setEdit] = useState(false)
    const [show, setShow] = useState(false)

    const modalShow = () => setShow(true)
    const modalHide = () => {
        setShow(false)
        clearExpense()
    }


    const onChangeHandler = event => {
        const {name, value} = event.target
        setExpense({
            ...expense,
            [name]: value
        })
    }


    const [searchValue, setSearchValue] = useState({
        timestamp: null
      })
    

    const searchHandler = useCallback(event => {
    setSearchValue({
        ...searchValue,
        [event.target.name]: event.target.value
    })
    }, [searchValue])


    const editExpense = expense => {
        setExpense({
            id: expense.id,
            expense_type: expense.expense_type,
            expense_amount: expense.expense_amount,
            timestamp: expense.timestamp
        })
        modalShow()
        setEdit(true)
    }

    const onSubmitHandler = event => {
        event.preventDefault()
        if(edit){
            updateExpense(expense)
            modalHide()
            setEdit(false)
        }else{
            let expenseObj = new FormData()
            expenseObj.append("expense_type", expense.expense_type)
            expenseObj.append("expense_amount", parseFloat(expense.expense_amount))
            expenseObj.append("timestamp", expense.timestamp.toISOString())
        if(expense.expense_type === '' || expense.expense_amount === '' || expense.timestamp === null){
            setErrors(vlidationInfo(expense))
        }else{
                addExpense(expenseObj)
                modalHide()
                setErrors({})
                console.log("Submitted !")
            }
        }
            
    }

    return {onChangeHandler, onSubmitHandler, expense, searchHandler, searchValue, errors, edit, editExpense, show, modalShow, modalHide}
}

export default useForm