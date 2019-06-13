import React from 'react';
import axios from 'axios';
import './App.css';
import FriendList from './components/FriendList';
import BecomeFriendForm from './components/BecomeFriendForm';
import { NavLink, Route, withRouter } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      currentFriend: null
    };
  }

  componentDidMount() {
    console.log('I am a mounted teapot')
  
    axios
    .get("http://localhost:5000/friends")
    .then(res => {
      console.log(res)
      this.setState({ friends: res.data });
    })
    .catch(err => alert("Sorry something went wrong: ", err));
  };

  postFriend = friend => {
    axios
     .post("http://localhost:5000/friends", friend)
     .then(res => {
      console.log("Post Info: ", res);
      this.setState({ friends: [...this.state.friends, friend] });
      })
     .catch(err => console.log("Well, seems like we won't get friends. :( ", err));
  };

  updateBecomeFriendForm = friend => {
    this.setState({
      currentFriend: friend
    });
    //console.log(this.state.activeItem);
    this.props.history.push("/form");
  };

   updateFriend= (id, friend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => {
        console.log("Update Info: ", res);
        this.setState({
          currentFriend: null,
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => alert("Seems like the update failed: ", err));
  };

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log("Delete: ", res);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log("Hmm, seem like you can't get rid of me: ", err));
  };

  render() {
    return (
    <div className="App">
      <header className="App-header"/>
      <NavLink exact to="/" activeClassName="activeNavButton">Home</NavLink>
      <br/>
      <NavLink exact to="/form" activeClassName="activeNavButton">Friends</NavLink>
      <Route exact path="/" render={props=> { return (<FriendList {...props} friends={this.state.friends} updateBecomeFriendForm={this.updateBecomeFriendForm} deleteFriend={this.deleteFriend} />) } }/>
      <Route exact path="/form" render={props => { return (<BecomeFriendForm {...props} postFriend={this.postFriend} updateFriend={this.updateFriend} currentFriend={this.state.currentFriend} />) } }/>
    </div>
    )
  };
}

const WithRouter = withRouter(App);
export default WithRouter;