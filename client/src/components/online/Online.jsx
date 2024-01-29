import "./online.css"

export default function Online({user}) {
  return (
    <li className="onlineFriend">
    <div className="onlineProfileImgContainer">
      <img className="onlineProfileImg" src={user.profilePicture} alt="" />
      <span className="onlineSign"></span>
    </div>
    <span className="onlineUsername">
      {user.username}
    </span>
    </li>
  )
}
