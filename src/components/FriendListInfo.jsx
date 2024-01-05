
import React from 'react';
import PropTypes from 'prop-types';




export function FriendListInfo({avatar, name, isOnline}){
     return(
            <li class="item">
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
        )}
 
FriendListInfo.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool
}





