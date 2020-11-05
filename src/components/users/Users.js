import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const User = ({ user: { avatar_url, login } }) => {
  return (
    <div className="col-md-3 mb-3">
      <div class="card testimonial-card">
        <div class="card-up indigo lighten-1"></div>

        <div class="avatar mx-auto white">
          <img
            src={avatar_url}
            class="rounded-circle w-25 h-25"
            alt="woman avatar"
          />
        </div>

        <div class="card-body">
          <h4 class="card-title">{login}</h4>
          <hr />
          <Link to={`/user/${login}`} className="btn btn-block btn-primary">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export class Users extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
