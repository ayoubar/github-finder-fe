import logo from './logo.svg';
import React , { Component, Fragment } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Navbar from './components/layouts/Navbar'
import Search from './components/search/Search'
import Users from './components/users/Users'
import About from './components/layouts/About'
import Login from './components/auth/Login'
import NotFound from './components/layouts/NotFound'
import UserItem from './components/users/UserItem'
import Profile from './components/users/Profile'
import axios from 'axios'
import './App.css';




/*
 todo ENDPOINT : https://api.gihtub.com
 todo Search Endpoint : https://api.github.com/search/users?q=query
 todo Get repos by username https://api.github.com/users/:username/repos
 todo Get Profile by username https://api.github.com/users/:username
*/


/*
  props = {
    buttonname: "search props",
    title: "this is a title",
    numbers:[1,2,3,4],
    obj: {
      id:1,
      name:"ayoub"
    }
  }
*/

/*  React Router
    ? /about
    ? /contact
    ? /home
*/

class  App extends Component {


  state = {
    
    users:[],
    repos:[],
    loading: false,
    error:null

  }


   methodTest = (e) => {
     e.preventDefault()
     console.log('YES')
   }

   //reda
  searchUsers = async  (text) => {
      const response = await axios.get(`https://api.github.com/search/users?q=${text}`)
      const data = await response.data
      this.setState({ users: data.items})
  }


  getRepos = async(username) => {
    
    try {
      this.setState({ loading:true})
      const response  = await axios.get(`https://api.github.com/users/${username}/repos`)
      this.setState({ repos: response.data, loading: false})
      
    } catch (error) {
      console.log(error.response.data);
      this.setState({ error:error.response.data.message})
    }



  }

  render() {
  return (
    <BrowserRouter>
      <Fragment>
      
        <Navbar />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <div className="container">
                  <Search
                    buttonname={'search'}
                    searchUsers={this.searchUsers.bind(this)}
                  />
                </div>
                <Users users={this.state.users} />
              </Fragment>
            )}
          />

          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/user/:username"
            render={(props) => <UserItem {...props} 
              repos={this.state.repos}
              getReposUserItem={this.getRepos} 
              loading={this.state.loading}
              error={this.state.error}
            />}
          />

          <Route exact path="/user/profile/:username" compnent={Profile}/>

          <Route exact path="*" render={(props) => <NotFound />} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
}

export default App;
