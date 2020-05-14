import React, {Component} from 'react';
import "./App.css";

export default  class App2 extends Component {
  constructor(){
    super()
  
    this.state = {
      desserts: ['ice cream', 'cookies', 'tarts', 'cake']
    }
  
  }
 
  render(){

    let desserts=this.state.desserts.map((element)=>{
      return <h2>{element}</h2>
    })
      
    return(
      <div className="App">
        {desserts}    
      </div>
    )

  }
}
