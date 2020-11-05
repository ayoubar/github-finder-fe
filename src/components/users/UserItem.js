import React, { Component } from 'react';
import Spinner from './../layouts/Spinner';
import Alert from './../layouts/Alert';
export class UserItem extends Component {
  componentDidMount() {
    console.log("Fire ")
    this.props.getReposUserItem(this.props.match.params.username)
  }

  render() {
    console.log(this.props)
    const { repos , loading, error} = this.props
    // console.log(this.props.prams.match.username);

    if(error) {
        return <Alert message={error}  typeError={'danger'} />
    }
    if(loading) {
      return <Spinner />
    }

    
    return (
      <div className="container mt-5">
        <h1> repos of  {this.props.match.params.username} </h1>
        <ul>
          {repos && repos.map(repo => (<li> {repo.name}</li>))}
        </ul> 
      </div>
    );
  }
}

export default UserItem;
