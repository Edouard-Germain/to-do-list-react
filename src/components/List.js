import React from "react"
import App from "../App"

class List extends React.Component {
    constructor(){
        super()
    }

    render(){
        // console.log("List props : ", this.props)
        let taskList = this.props.tasks.map((task,index)=> 
            <li key={index}>
                {task.description} 
                {task.status} 
                <button onClick={() => this.props.delete(index)}>delete</button>
                <button>modifier</button>
            </li>
        )
        return(
            <div>
                <h3> ma liste</h3>
                 <ul>{taskList}</ul>
            </div>
        )
    }
}

export default List