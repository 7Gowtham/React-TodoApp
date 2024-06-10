import React, { useEffect, useState } from 'react'

function Form({ data, setData, editTodo, setEditTodo }) {
    let [todo_name, setTodo_name] = useState("")
    let [todo_desc, setTodo_desc] = useState("")
    let [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        // console.log(editTodo)
        if (editTodo) {
            setTodo_name(editTodo.name)
            setTodo_desc(editTodo.desc)
            setIsEditing(true)
        }
    }, [editTodo])

    const handleSubmit = () => {
        if (editTodo) {
            let newData = [...data]
            newData[editTodo.index] = {
                name: todo_name,
                desc: todo_desc
            }
            setData(newData)
            setEditTodo(null)
            setIsEditing(true)
        } else {
            let newData = {
                name: todo_name,
                desc: todo_desc
            }
            let newArr = [...data]
            newArr.push(newData)
            setData(newArr)
            setIsEditing(false)

        }
        setTodo_name("")
        setTodo_desc("")
        setIsEditing(false)

    }

    return <>
        <div className="row mt-5">
            <div className="col">
                <input type="text" className="form-control" placeholder="Todo Name" value={todo_name} onChange={(e) => setTodo_name(e.target.value)} />
            </div>
            <div className="col">
                <input type="text" className="form-control" placeholder="Todo Description" value={todo_desc} onChange={(e) => setTodo_desc(e.target.value)} />
            </div>
            <div className="col">
                {
                    !isEditing ? <button className="btn btn-primary mb-3" onClick={handleSubmit}>Add Todo</button>
                        :
                        <button className="btn btn-primary mb-3" onClick={handleSubmit}>Edit Todo</button>
                }
            </div>
        </div>
    </>
}

export default Form