import s from "./FriendList.module.css"
import React from 'react';
import PropTypes from 'prop-types';




export function FriendListInfo({avatar, name, isOnline}){
     return(
            <li className={s.item}>
  <span className={s.status}>{isOnline}</span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
</li>
        )}
 
FriendListInfo.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool
}





