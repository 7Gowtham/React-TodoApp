import React, { useState } from 'react'
import Form from './Components/Form'
import Card from './Components/Card'


function App() {
    // let [data, setData] = useState([
    //     {
    //         name: "Gym",
    //         desc: "Need to go at 10AM",
    //         completed: false
    //     },
    //     {
    //         name: "Shopping",
    //         desc: "Need to go tomorrow",
    //         completed: true
    //     },
    //     {
    //         name: "Travel",
    //         desc: "Need to go Next Month",
    //         completed: false
    //     }
    // ])
    let [data, setData] = useState([])

    let [editTodo, setEditTodo] = useState(null)
    let [selectOption, setSelectOption] = useState("All")

    return <>
        <div className="container">
            <h2 className="card-title text-center mt-3">MyTodo</h2>
            <Form data={data} setData={setData} editTodo={editTodo} setEditTodo={setEditTodo} />
            <div className="card-body filter">
                <h4 className='card-title mt-5'>My Todos</h4>
                <div className="drop">
                    <h4 className='card-title mt-5'>Status</h4>&nbsp;&nbsp;
                    <select className="form-select mt-5" value={selectOption} onChange={(e) => setSelectOption(e.target.value)}>
                        <option value={"All"}>All</option>
                        <option value={"Completed"}>Completed</option>
                        <option value={"Not Completed"}>Not Completed</option>
                    </select>
                </div>
            </div>
            <div className="card-flex d-flex justify-content-center">
            {
                data.length === 0 ?
                <h3 className='mt-5'>Add a Todo</h3> :
                data.map((e, i) => {
                    if (selectOption === "All" || (selectOption === "Completed" && e.completed) || (selectOption === "Not Completed" && !e.completed)) {
                        return <Card item={e} data={data} setData={setData} key={i} index={i} setEditTodo={setEditTodo} />
                    }
                })

            }
            </div>
            
        </div>
    </>
}

export default App