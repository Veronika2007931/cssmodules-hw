import friends from "../friends.json"
import { FriendListInfo } from "./FriendListInfo"
import s from "./FriendList.module.css"



export function FriendList(){
    return(
        <ul className={s.friendList}>
     { friends.map(({id, name, avatar, isOnline})=>{
         return <FriendListInfo
            key = {id}
            name= {name}
            avatar = {avatar}
            isOnline = {isOnline}
         
         />
     })}
</ul>
    )
}