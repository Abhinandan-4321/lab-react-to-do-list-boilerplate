import { Component } from 'react'

import './App.css'

import Display from './component/display'
class App extends Component{
  constructor(){
    super()
    this.state = {
      todo :[],
      todoItem:{
        Key:"", 
      description:""
    }
    }
  }

  handleInput=(e)=> {
    this.setState({
      todoItem: {
        Key:Date.now(),
        description: e.target.value
      }
  })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = this.state.todoItem
    if(newItem.description !== "" ){
      const array = [...this.state.todo, newItem]
      this.setState({
        todo:array,
        todoItem:{Key:"", description:""}
      })
    }
      
  }

  handleDelete = (Key) => {
    const forDelete = this.state.todo.filter((el)=>el.Key!=Key)
    this.setState({
      todo : forDelete
    })
  }

  handleUpdate = (newDes, key) => {
    const listItems = this.state.todo
    listItems.map((el)=>{
      if(el.Key === key){
        el.description = newDes
      }
    })

    this.setState({
      todo:listItems
    })
  }


  render(){
    return <div>
      <form onSubmit={this.handleSubmit}>
        <h1>To Do List</h1>
        <input className = "input" type="text" placeholder="Type here" onChange={this.handleInput} value={this.state.todoItem.description}/>
        <button className = "btn" type = "submit">Submit</button>
        <p>{this.state.todoItem.description}</p>
      </form>
      <Display todoItem = {this.state.todo} handleUpdate = {this.handleUpdate} handleDelete = {this.handleDelete}/>
    </div>
  }
}

export default App
