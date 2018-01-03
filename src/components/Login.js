import React from 'react'
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
class Login extends React.Component{

  state = {
    email: null,
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getUser("Mimi")
  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.getUser(this.state.firstName)
  // }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  render(){
    return(
      <div>
          <h3 id="login-header">Welcome to Todoish</h3>
          <h4 id="login-header"> Please Login </h4>
          <form
            class="ui form"
            id="LoginForm"
            onSubmit={this.handleSubmit}
          >
              <div class="ui input" id="login-input">
                <input
                  onChange = {this.handleEmailChange}
                  type = "text"
                  placeholder = "email"
                  value = {this.state.email}
                />
              </div>
              <br/>
              <div class="ui input" id="login-input">
                <input
                  type = "text"
                  placeholder = "password"
                />
              </div>
              <br/>
              <div class="ui input">
                <input
                  type = "submit"
                  placeholder = "submit"
                />
              </div>
          </form>
        </div>
    )
  }
}

export default withRouter(Login);
