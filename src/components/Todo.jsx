import React, { useState, useEffect } from 'react';

const Todo = () => {
  const [todo, settodo] = useState("");
  const [todolist, settodolist] = useState([]);
  const [currentTab, setCurrentTab] = useState('All');

  useEffect(() => {
    const data = localStorage.getItem("todolist") || [];
    if (data?.length > 0) {
      settodolist(JSON.parse(data));
    }
  }, []);

  const handleStatusChange = (index, newStatus) => {
    const updatedList = [...todolist];
    updatedList[index].status = newStatus;
    settodolist(updatedList);
    localStorage.setItem("todolist", JSON.stringify(updatedList));
  };

  const filterListByTab = (tab) => {
    if (tab === 'All') return todolist;
    return todolist.filter((task) => task.status === tab);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", minHeight: "100vh", backgroundColor: "#f4f4f9", padding: "20px" }}>
      <div style={{ width: "100%", maxWidth: "700px", backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#333", textAlign: "center", marginBottom: "20px", fontSize: "28px" }}>Todo App</h1>

        {/* Tabs for filtering tasks */}
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
          {['All', 'Pending', 'In Progress', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              style={{
                padding: "10px 15px",
                fontSize: "16px",
                borderRadius: "8px",
                border: currentTab === tab ? "2px solid #007bff" : "1px solid #ddd",
                backgroundColor: currentTab === tab ? "#007bff" : "#fff",
                color: currentTab === tab ? "#fff" : "#333",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Input and Add Todo button */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <input
            style={{
              padding: "12px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              flexGrow: 1,
              marginRight: "10px",
              outline: "none",
            }}
            type='text'
            value={todo}
            onChange={(e) => settodo(e.target.value)}
            placeholder='Enter Todo'
          />
          <button
            disabled={todo.trim().length === 0}
            onClick={() => {
              const newTask = { task: todo, status: 'Pending' };
              const updatedList = [...todolist, newTask];
              settodolist(updatedList);
              localStorage.setItem("todolist", JSON.stringify(updatedList));
              settodo("");
            }}
            style={{
              padding: "12px 20px",
              backgroundColor: todo.trim().length === 0 ? "#ccc" : "#007bff",
              color: "white",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              cursor: todo.trim().length === 0 ? "not-allowed" : "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Add Todo
          </button>
        </div>

        {/* Task List based on selected tab */}
        <div style={{ marginTop: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#007bff", color: "white", textAlign: "left", fontSize: "16px" }}>
                <th style={{ padding: "10px" }}>S.No</th>
                <th style={{ padding: "10px" }}>Task</th>
                <th style={{ padding: "10px" }}>Status</th>
                <th style={{ padding: "10px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterListByTab(currentTab).length > 0 ? (
                filterListByTab(currentTab).map((todo, ind) => (
                  <tr key={ind} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "10px", color: "#555" }}>{ind + 1}</td>
                    <td style={{ padding: "10px", color: "#333" }}>{todo.task}</td>
                    <td style={{ padding: "10px", color: todo.status === 'Pending' ? "#ffc107" : todo.status === 'In Progress' ? "#17a2b8" : "#28a745" }}>
                      <select
                        value={todo.status}
                        onChange={(e) => handleStatusChange(ind, e.target.value)}
                        style={{
                          padding: "8px",
                          fontSize: "14px",
                          borderRadius: "6px",
                          border: "1px solid #ddd",
                          outline: "none",
                          cursor: "pointer",
                        }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                    <td style={{ padding: "10px", textAlign: "center" }}>
                      <button
                        onClick={() => {
                          const updateddata = todolist.filter((_, ind2) => ind2 !== ind);
                          settodolist(updateddata);
                          localStorage.setItem("todolist", JSON.stringify(updateddata));
                        }}
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "#dc3545",
                          color: "white",
                          border: "none",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontSize: "14px",
                          transition: "background-color 0.3s ease",
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center", padding: "20px", color: "#888" }}>No tasks found for this status.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Todo;
