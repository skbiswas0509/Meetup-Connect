import "./share.css";
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="Image not found" />
                <input Placeholder="Whats in your mind?" className="shareInput" />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionText">Photo Or Video</span>
                    </div>

                    <div className="shareOption">
                        <label htmlColor="blue" className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>

                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon" />
                        <span className="shareOptionText">Locations</span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
        </div>
  )
}
