import React from 'react';

const Friend = props => {
  return (
      <div className="friend-details">
        <p><strong>Name:</strong><br/> {props.friend.name}</p>
        <p><strong>Age:</strong><br/>  {props.friend.age}</p>
        <p><strong>E-Mail:</strong><br/>  {props.friend.email}</p>
        <button className="md-button" onClick={event => props.updateBecomeFriendForm(props.friend)}>Update</button>
        <button className="md-button" onClick={event => props.deleteFriend(event, props.friend.id)}>Delete</button>
      </div>
      )
    };
    
export default Friend;