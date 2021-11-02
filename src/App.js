import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import React from "react"
import List from './components/List'


class App extends React.Component {
  constructor(){
 
    super()
    this.state= {
      tasks:[]
    }
  }
  addTask = (str) =>{
    console.log(str)
    this.setState({ tasks: [...this.state.tasks, {description : str, status : "todo"}]})
  }
  // deleteTask =(e) =>{
  //   this.setState({tasks:this.state.tasks.filter(task=>task!== e.target.value)})
  //   console.log(this.state.tasks)
  // }
  deleteTask=(index) => {
    // console.log("index",index)
    // let stateTasks = this.state.tasks
    // console.log("delete Task stateTasks", stateTasks)
    // let newArray = stateTasks.filter((task, i) => i !== index );
    // console.log("delete Task newArray",newArray)
    // this.setState({tasks:newArray})
    this.setState({
      tasks: this.state.tasks.filter((task, i) => i !== index )
    })

  }

  render(){
    console.log("App, tasks",this.state.tasks)
 
    return (
      <div>
        <Form addTask={this.addTask}></Form>
        <List tasks ={this.state.tasks} delete ={this.deleteTask}></List>
      </div>
      );
      
  }
  
}

export default App;
