import { useState } from "react";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import {
  HiOutlinePaperAirplane,
  HiOutlineEmojiHappy,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";

function Post({ profileImage, username, imagePosted, description }) {
  const [addComment, setAddComment] = useState("");

  const submitComment = (e) => {
    e.preventDefault();
    setAddComment("");
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={profileImage} alt="profile" />
        <p>{username}</p>
        <HiOutlineDotsHorizontal />
      </div>
      <img src={imagePosted} alt="" />
      <div className="post-icons">
        <AiOutlineHeart />
        <AiOutlineComment />
        <HiOutlinePaperAirplane />
      </div>
      <div className="post-description">
        <p>
          <span>{username}</span> {description}
        </p>
      </div>

      <div className="post-comments"></div>
      <form action="" className="post-form">
        <HiOutlineEmojiHappy />
        <input
          type="text"
          placeholder="Add a comment..."
          value={addComment}
          onChange={(e) => setAddComment(e.target.value)}
        />
        <button type="submit" onClick={submitComment}>
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
