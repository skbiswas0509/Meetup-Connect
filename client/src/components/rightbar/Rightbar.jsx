import "./rightbar.css";
import { Users } from "../../dummyData"
import Online from "../online/Online";


export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
      <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.png" alt="" />
            <span className="birthdaText"><b>DJA</b> and <b>2 others </b>have birthday today.</span>
          </div>
          <img className="rightbarAd" src="assets/ad.png" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u)=>(
              <Online key={u.id} user={u}/>
            ))}
          </ul>
      </>
    )
  }
const ProfileRightbar = () =>{
  return(
    <>
    <h4 className="rightbarTitle">User Information </h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Dhaka</span>
      </div>

      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Occupation:</span>
        <span className="rightbarInfoValue">Student</span>
      </div>

      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Age:</span>
        <span className="rightbarInfoValue">20</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User friends </h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Wick</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Wick</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Wick</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Wick</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Wick</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Wick</span>
      </div>
    </div>
    </>
  )
  }
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
        </div>
  )
}
