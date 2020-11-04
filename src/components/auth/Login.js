import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="container mt-5">
        <form className="text-center border border-light p-5" action="#!">
          <p className="h4 mb-4">Login</p>

          <input
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />

          <input
            type="password"
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            placeholder="Password"
          />

          <div className="d-flex justify-content-around">
            <div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultLoginFormRemember"
                />
                <label
                  className="custom-control-label"
                  for="defaultLoginFormRemember"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <a href="">Forgot password?</a>
            </div>
          </div>

          <button className="btn btn-info btn-block my-4" type="submit">
            Sign in
          </button>

          <p>
            Not a member?
            <a href="">Register</a>
          </p>

          <p>or sign in with:</p>

          <a href="#" className="mx-2" role="button">
            <i className="fab fa-facebook-f light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-twitter light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-linkedin-in light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-github light-blue-text"></i>
          </a>
        </form>
      </div>
    );
  }
}
