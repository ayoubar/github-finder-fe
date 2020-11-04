import React, { Component } from 'react';

export class UserItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1> this is user {this.props.match.params.username} </h1>
      </div>
    );
  }
}

export default UserItem;
