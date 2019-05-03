import React, { Component } from 'react'
import Axios from 'axios';

class Auth extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  createUser = () => {
    Axios.post(`/register-user`, this.state).then(res => {
      this.props.history.push('/dashboard')
    })
  }

  inputHandler = (e) => {
    const { name } = e.target
    this.setState({
      [name]: e.target.value
    })

  }
  render() {
    // console.log(this.props.history)
    return (
      <div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={e => this.inputHandler(e)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={e => this.inputHandler(e)}
        ></input>
        <button>Login</button>
        <button onClick={() => this.createUser()}>Register</button>
      </div>
    )
  }
}
export default Auth