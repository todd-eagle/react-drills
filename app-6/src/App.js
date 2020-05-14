import React, {Component} from 'react';
import './App.css';
import Todo from './components/Todo'

export default class App6 extends Component{
  constructor(){
    super()
    this.state = {
      list: [],
      userInput:''
    }

    this.addToDo = this.addToDo.bind(this)
  }
  listImput(val){
    this.setState({userInput: val})
    //console.log(this.state)
  }

  addToDo(){
    console.log(this.state.list)
    this.setState(
      {
        list: this.state.list.concat([this.state.userInput]),
        userInput:''
      })

      console.log(this.state)

  }

  render(){
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return(
      <div className="App">
        <input  value={this.state.userInput} onChange={(e)=>this.listImput(e.target.value)} />
        <button onClick={this.addToDo}>Add</button>
      <div>
        {list}
      </div>
      
      </div>
    
    )
  }
}

