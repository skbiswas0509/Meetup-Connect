import "./sidebar.css"
import {RssFeed, Event, Bookmark } from "@material-ui/icons";
import { Users } from "../../dummyData"
import Friends from "../Friends/Friends";

export default function Sidebar({user}){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                     <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Saved Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                {Users.map((u)=>(
                    <Friends key={u.id} user={u} />
                ))}

                </ul>
            </div>
        </div>
    )
}