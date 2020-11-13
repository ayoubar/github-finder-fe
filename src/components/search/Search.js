import React, { Component, useContext,useState } from 'react';
import UserContext from './../../context/users/UserContext'

const Search  = () => {

  const userContext = useContext(UserContext)
  const { searchUsers } = userContext

  const [textInput, setTextInput] = useState('')
 const  handleChange = (e) => {
  setTextInput(e.target.value);
  };

  const handleClick = () => {
    alert('WOOO');
  };

 const  submitForm = (e) => {
    e.preventDefault();
    // this.props.searchUsers(this.state.textInput);
    searchUsers(textInput)
    setTextInput(textInput);
  };

  const StopClickDroite = (e) => {
    e.preventDefault();
  };

 
    return (
      <>
        <form
          class="text-center p-5"
          onSubmit={submitForm}
          onContextMenu={StopClickDroite}
        >
          <input
            type="text"
            id="defaultSubscriptionFormPassword"
            class="form-control mb-4 border-dark"
            placeholder="Search..."
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-dark btn-block"
            // onClick={() => alert('HELLO')}
          >
            Search
          </button>
        </form>
      </>
    );
  }


export default Search;
