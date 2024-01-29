import "./friends.css"

export default function Friends({user}) {
  return (
    <li className="friend">
    <img className="friendImg" src={user.profilePicture} alt="Image loading Failed" />
    <span className="friendName">{user.username}</span>
    </li>
  )
}