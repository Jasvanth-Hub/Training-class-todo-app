import React, { useState,useEffect } from 'react'

const Todo = () => {


  const [todo, settodo] = useState("")
  const [todolist, settodolist] = useState([])

  useEffect(()=>{
    const data = localStorage.getItem("todolist")||[]
    if(data?.length>0){
      console.log(data)
      settodolist(JSON.parse(data))
    }
  },[])

  

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

      <div>
        <h1>Todo App</h1>

        <div style={{ display: "flex", gap: "4px" }}>
          <input style={{
            padding: "5px",
            fontSize: "20px"
          }} type='text' value={todo} onChange={(e) => {
            settodo(e.target.value)
          }} placeholder='Enter Todo' />

          <button
           disabled={todo.trim().length==0}
           onClick={() => {
            const updatedList = [...todolist,todo]
            settodolist(updatedList)
            localStorage.setItem("todolist",JSON.stringify(updatedList))
            settodo("")



          }} style={{
            padding: "5px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "20px",
            borderRadius: "4px"
          }}  >Add Todo</button>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "10px",
          margin: "10px"
        }}>
          <table style={{ border: "2px solid black", width: "100%" }}>
            <thead>
              <tr style={{ width: "100%", backgroundColor: "black", color: "white" }}>
                <th>S.No</th>
                <th>task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                todolist.map((todo, ind) => {
                  return <tr key={ind} style={{ border: "2px solid black", textAlign: "center" }}>
                    <td>
                      {ind + 1}
                    </td>
                    <td>
                      {
                        todo
                      }
                    </td>
                    <td>
                     <button 
                    
                     onClick={()=>{
                      const updateddata=todolist.filter((todo,ind2)=>{
                        return ind2!=ind
                      })
                      
                      settodolist(updateddata)
                      localStorage.setItem("todolist",JSON?.stringify(updateddata))
                     }} >Remove</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>

    </div >
  )
}

export default Todo
