import React from 'react';
import Friend from './Friend';

const FriendList = (props) => (
        <div className="friends-list">
            {props.friends.map(friend => (
                <Friend friend={friend} history={props.history} updateBecomeFriendForm={props.updateBecomeFriendForm} deleteFriend={props.deleteFriend} key={friend.id}/>
            ))}
        </div>
    )

export default FriendList;