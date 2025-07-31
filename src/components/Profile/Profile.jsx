import css from  './Profile.module.css'

export default function Profile({ name,
    tag,
    location,
    avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    stats
}) {
    return (
        <div className={css.profileContainer}>
            <div className={css.userWrapper}>
                <img
                    className={css.userAvatar}
                    src={avatar}
                    alt="User avatar"
                    width="230"
                />
                <p className={css.username}>{name}</p>
                <p className={css.userTag}>@{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>
            <ul className={css.statsList}>
                <li className={css.statsItem}>
                    <span>Followers</span>
                    <span className={css.statsSpan}>{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span>Views</span>
                    <span className={css.statsSpan}>{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                    <span>Likes</span>
                    <span className={css.statsSpan}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}