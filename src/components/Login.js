import React from 'react'

class Login extends React.Component{

  state = {
    firstName: "",
    email: "",
    password: ""

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getUser(this.state.firstName)
  }

  handleChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  render(){
    return(
      <div class="column" id="LoginForm"> Login Form
        <form onSubmit={this.handleSubmit}>
          <input
            type = "text"
            placeholder = "firstName"
            onChange = {this.handleChange}
            value = {this.state.firstName}
          />
          <input
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
