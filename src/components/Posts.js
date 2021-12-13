import Post from "./Post";
import Avatar from "../img/img_avatar.png";
import { useEffect } from "react/cjs/react.development";

const userPosts = [
  {
    username: "hdarparish",
    profileImage:
      "https://www.hossein-darparish.com/static/media/me.4aaba918.jpg",
    imagePosted: Avatar,
    description: "This is me!",
    likes: 4,
    comments: ["nice", "ok"],
  },
  {
    username: "darparishh",
    profileImage:
      "https://media-exp1.licdn.com/dms/image/C5603AQH8qhhAfhzfew/profile-displayphoto-shrink_200_200/0/1624316414978?e=1645056000&v=beta&t=ZBtzBItR1p9o2Wc4bRhZZXZEJUbrXWpn1IR02RB6Yz4",
    imagePosted:
      "https://www.hossein-darparish.com/static/media/me.4aaba918.jpg",
    description: "My linkedin profile Pic",
    likes: 4,
    comments: ["follow me", "ok"],
  },
];

function Posts() {
  return (
    <div className="posts-wrapper">
      {userPosts.map((post, index) => (
        <Post
          key={index}
          profileImage={post.profileImage}
          username={post.username}
          description={post.description}
          imagePosted={post.imagePosted}
        />
      ))}
    </div>
  );
}

export default Posts;
