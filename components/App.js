import React from "react"

function App() {
    return (
        <div>
            <h1>ToDo List</h1>
            <input type="checkbox" id="task1" name="task1" value="task1" />
            <label> Continue with React Tutorial</label><br></br>
            <input type="checkbox" id="task2" name="task2" value="task2" />
            <label> Revise the AWS Notes</label><br></br>
            <input type="checkbox" id="task3" name="task3" value="task3" />
            <label> Enjoy the time with family</label><br></br>
        </div>
    )
}

export default App