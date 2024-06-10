import React from 'react'

function Card({ data, setData, item, index, setEditTodo}) {

    const handleDelete = () =>{
        console.log(index)
        let newData = [...data]
        newData.splice(index,1)
        setData(newData)
    }

    const handleEdit = () =>{
        console.log(item, index)
        setEditTodo({...item, index})
    }

    const handleStatus = (e) =>{
        const newStatus = e.target.value === "Completed";
        console.log(newStatus)
        let newData = [...data];
        newData[index].completed = newStatus;
        setData(newData);
    }

    return <>
        <div className="card mt-3" style={{ width: "18rem" }}>
            <div className="card-border">
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
            </div>
            <div className="card-body">
                <h5 className='card-title'>Status</h5>
                <select className="form-select" value={item.completed ? "Completed" : "Not Completed"} onChange={handleStatus}>
                    <option value={"Completed"}>Completed</option>
                    <option value={"Not Completed"}>Not Completed</option>
                </select>
            </div>
            <div className="card-body">
                <button className='btn btn-primary' onClick={handleEdit}>Edit</button>&nbsp;&nbsp;
                <button className='btn btn-danger' onClick={() => handleDelete()}>Delete</button>
            </div>

            </div>
            
        </div>

    </>
}

export default Card