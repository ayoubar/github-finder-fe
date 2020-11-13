import React, { useState, useReducer } from 'react';
import axios from 'axios';
const types = {
  HIDE_CARD: 'hide',
  DISPLAY_CARD: 'display',
  GET_USERS: 'GET_USER',
};

function reducer(state, action) {
  // state change here

  switch (action.type) {
    case types.HIDE_CARD:
      return {
        ...state,
        display: false,
        name: 'hide',
      };

    case types.DISPLAY_CARD:
      return {
        ...state,
        display: true,
        name: 'display',
      };

    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return { ...state };
  }
}

const ReducerComonent = () => {
  //   const [display, setDisplay] = useState(true);

  const [state, dispatch] = useReducer(reducer, {
    display: true,
    name: 'Click',
    users: null,
  });

  const getUsersFromApi = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      dispatch({ type: types.GET_USERS, payload: response.data });

      /*

            acrtion =  {
                        type: 'GET_USERS',
                        paylod: [{},{},{},{},{},{},{},{},]
            }
      */
    } catch (error) {}
  };

  console.log(state);

  return (
    <div className="container">
      {state.display ? (
        <div class="card w-25 text-center mx-auto my-2">
          <img
            class="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            alt="Card image cap"
          />

          <div class="card-body">
            <h4 class="card-title">
              <a>Card title</a>
            </h4>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              {state.name}
            </a>
          </div>
        </div>
      ) : null}
      <div className="d-flex flex-direction-column mt-5">
        <button
          className="btn btn-primary btn-block btn-outline mr-2"
          onClick={() => dispatch({ type: types.DISPLAY_CARD })}
        >
          Display
        </button>
        <button
          className="btn btn-danger btn-block btn-outline"
          onClick={() => dispatch({ type: types.HIDE_CARD })}
        >
          Hide
        </button>
        <button
          className="btn btn-warning btn-block btn-outline ml-2"
          onClick={getUsersFromApi}
        >
          Get User FROM API
        </button>
      </div>

      <ul>{state.users && state.users.map((user) => <li>{user.name}</li>)}</ul>
    </div>
  );
};

export default ReducerComonent;
