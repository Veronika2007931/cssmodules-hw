import friends from "../friends.json"
import { FriendListInfo } from "./FriendListInfo"



export function FriendList(){
    return(
        <ul class="friend-list">
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