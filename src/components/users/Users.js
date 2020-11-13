import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './../../context/users/UserContext';

// component based class ====> component based  functions
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
            get repos
          </Link>
          <Link to={`/user/${login}`} className="btn btn-block btn-indigo mt-1">
            profile
          </Link>
        </div>
      </div>
    </div>
  );
};

// props drilling 

 const Users = () =>  {
   const userContext = useContext(UserContext);
   const { users } = userContext;
   return (
     <div className="container">
       <div className="row">
         {users.map((user) => (
           <User key={user.id} user={user} />
         ))}
       </div>
     </div>
   );
 }

export default Users;
