import React, { Component } from 'react';

class Search extends Component {
  state = {
    textInput: '',
  };

  handleChange = (e) => {
    this.setState({ textInput: e.target.value });
  };

  handleClick = () => {
    alert('WOOO');
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.textInput);
    this.setState({ textInput: '' });
  };

  StopClickDroite = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <form
          class="text-center p-5"
          onSubmit={this.submitForm}
          onContextMenu={this.StopClickDroite}
        >
          <input
            type="text"
            id="defaultSubscriptionFormPassword"
            class="form-control mb-4 border-dark"
            placeholder="Search..."
            onChange={this.handleChange}
          />

          <button
            type="submit"
            className="btn btn-dark btn-block"
            // onClick={() => alert('HELLO')}
          >
            {this.props.buttonname}
          </button>
        </form>
      </>
    );
  }
}

export default Search;
