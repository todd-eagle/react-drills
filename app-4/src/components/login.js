import React, {Component} from 'react';

class Login extends Component {
  constructor(){
    super()
  
    this.state={
      username: '',
      password: ''
    }
    this.submit = this.submit.bind(this)
  }

  userName(val){
    this.setState({username: val})
  }

  userPassword(val){
    this.setState({password: val})
  }

  submit(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render(){
    return(
      <div>
        <input type="text" onChange={(e) => this.userName(e.target.value)} />
        <input type="text" onChange={(e) => this.userPassword(e.target.value)} />
        <button onClick={this.submit}>Login</button>
      </div>
    )
  }
}


export default Login