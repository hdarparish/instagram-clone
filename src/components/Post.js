import { useState, useEffect } from "react";
//icons
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import {
  HiOutlinePaperAirplane,
  HiOutlineEmojiHappy,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
//aws
import { Auth, API } from "aws-amplify";
import { createComment, createLike, deleteLike } from "../graphql/mutations";
import * as queries from "../graphql/queries";

function Post({ id, profileImage, username, imagePosted, caption }) {
  const [addComment, setAddComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [user, setUser] = useState(false);

  //save the comment
  const submitComment = async (e) => {
    e.preventDefault();
    const comment = {
      postID: id,
      username: user.idToken.payload.name.split(" ").join("."),
      content: addComment,
    };
    await API.graphql({
      query: createComment,
      variables: { input: comment },
    });
    setAddComment("");
  };

  //check if the user is authenticated
  useEffect(() => {
    Auth.currentSession()
      .then((user) => setUser(user))
      .catch(() => console.log("Not signed in"));
  }, []);

  //get the comments for the post
  useEffect(() => {
    (async () => {
      const { data } = await API.graphql({
        query: queries.listComments,
        authMode: "API_KEY",
      });
      //filter the comments by postID
      setComments(data.listComments.items.filter((item) => item.postID === id));
    })();
  }, []);

  //get the likes for the post
  useEffect(() => {
    (async () => {
      const { data } = await API.graphql({
        query: queries.listLikes,
        authMode: "API_KEY",
      });
      //filter the comments by postID
      setLikes(data.listLikes.items.filter((like) => like.postID === id));
    })();
  }, [comments]);

  //check if the user has liked the post
  useEffect(() => {
    setHasLiked(
      likes.findIndex(
        (like) =>
          like.cognitoUsername === user?.idToken?.payload["cognito:username"] &&
          like.postID === id
      ) !== -1
    );
  }, [likes]);

  const likePost = async () => {
    //if the user has already liked the post, then unlike
    if (hasLiked) {
      //get the index of the user like
      const index = likes.findIndex(
        (like) =>
          like.cognitoUsername === user.idToken.payload["cognito:username"] &&
          like.postID === id
      );
      //delete the like
      await API.graphql({
        query: deleteLike,
        variables: {
          input: {
            id: likes[index].id,
          },
        },
      });
    } else {
      const like = {
        postID: id,
        username: user.idToken.payload.name.split(" ").join("."),
        cognitoUsername: user.idToken.payload["cognito:username"],
      };
      await API.graphql({
        query: createLike,
        variables: { input: like },
      });
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={profileImage} alt="profile" />
        <p>{username}</p>
        <HiOutlineDotsHorizontal />
      </div>
      <img src={imagePosted} alt="" />
      {user && (
        <div className="post-icons">
          {hasLiked ? (
            <AiFillHeart className="heart-red" onClick={likePost} />
          ) : (
            <AiOutlineHeart onClick={likePost} />
          )}

          <AiOutlineComment />
          <HiOutlinePaperAirplane />
        </div>
      )}
      {likes.length > 0 && (
        <p className="post__total-likes">{likes.length} likes</p>
      )}

      <div className="post-description">
        <p>
          <span>{username}</span> {caption}
        </p>
      </div>
      <div className="post-comments">
        {comments.length > 0 &&
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>
                <span>{comment.username}</span> {comment.content}
              </p>
            </div>
          ))}
      </div>
      {user && (
        <form action="" className="post-form">
          <HiOutlineEmojiHappy />
          <input
            type="text"
            placeholder="Add a comment..."
            value={addComment}
            onChange={(e) => setAddComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={!addComment.trim()}
            onClick={submitComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
