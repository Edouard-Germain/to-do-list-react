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
    console.log(this.state.tasks)
  }
  deleteTask =(e,) =>{
    this.setState({tasks:this.state.tasks.filter(task=>task!== e.target.value)})
  }
  render(){
   
    return (
      <div>
        <Form addTask={this.addTask}></Form>
        <List tasks ={this.state.tasks} delete ={this.deleteTask}></List>
      </div>
      );
      
  }
  
}

export default App;
