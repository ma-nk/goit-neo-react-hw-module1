import css from './FriendListItem.module.css'

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
       <>
            <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={isOnline ? css.online : css.offline}>{isOnline ? "Online" : "Offline"}</p>
        </> 
    )
}