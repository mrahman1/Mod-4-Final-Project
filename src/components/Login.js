import React from 'react'


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
      <div class="column" id="LoginForm"> Login Form
        <form onSubmit={this.handleSubmit}>
          <input
            onChange = {this.handleEmailChange}
            type = "text"
            placeholder = "email"
            value = {this.state.email}
          />
          <br/>
          <input
            type = "text"
            placeholder = "password"
          />
          <br/>
          <input
            type = "submit"
            placeholder = "submit"
          />
        </form>
      </div>
    )
  }
}

export default Login;
