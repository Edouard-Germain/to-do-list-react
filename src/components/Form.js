import React from "react"

class Form extends React.Component {
    constructor(){
    super()
        this.state={
            task : ""
        }
        
    }
    handleTaskDescriptionChange =(e) => {
        this.setState({
            task : e.target.value
        })
        // console.log(this.state.task)
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({
            task : ""
        })
    }
    render (){
        return(
            <div>
                <h2>To do list</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleTaskDescriptionChange}></input>
                    <button type="submit" placeholder ="to do list" >to do list</button>
                </form>
            </div>
        )
    }
}

export default Form