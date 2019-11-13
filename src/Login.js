import React from 'react';

import './Login.css';

export default function Login(props) {
  return (
    <div className="form">
      <div className="form">
        <form onSubmit={props.submit} className="login-form">
          <input data-testid="firstName" type="text" placeholder="first name" onChange={props.input}/>
          <input data-testid="lastName" type="text" placeholder="last name"/>
          <input data-testid="email" type="text" placeholder="Email"/>
          <input data-testid="password" type="password" placeholder="password"/>
          <button data-testid="submit">Login</button>
        </form>
      </div>
    </div>
  )
}