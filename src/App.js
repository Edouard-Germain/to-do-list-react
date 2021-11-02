import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import React from "react"


class App extends React.Component {
  constructor(){
 
    super()
    this.state= {
      tasks:[]
    }
  }
  addTask = () =>{
   let string = "waah"
    console.log(string)
  }
  render(){
    return (
      <div>
        <Form addTask={this.addTask}></Form>
      </div>
      );
  }
  
}

export default App;
