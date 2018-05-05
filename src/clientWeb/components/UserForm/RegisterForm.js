import React , {Component }from 'react';

export default class RegisterForm extends Component {
  registerUser = (e) => {
    e.preventDefault();
    Accounts.createUser({
      email: this.email.value,
      password: this.password.value
    }, (error) => {
      if (!error) {
        this.props.client.resetStore();
      }
      console.log(error);
    })
  }

  render(){
    return(
            <form onSubmit={this.registerUser}>
              <input type="email" autoComplete="email" ref={input => (this.email = input)} />
              <input type="password" autoComplete="current-password" ref={input => (this.password = input)} />
              <button type="submit">Register user</button>
            </form>
          );
  }

}
