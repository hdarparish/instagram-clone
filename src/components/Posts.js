import Post from "./Post";
import Avatar from "../img/img_avatar.png";
import { useEffect, useState } from "react";
//aws
import { API, Storage } from "aws-amplify";
import * as queries from "../graphql/queries";

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
  const [postsList, setPostsList] = useState(null);
  const db = Storage.get();

  useEffect(() => {
    (async () => {
      const { data } = await API.graphql({
        query: queries.listPosts,
        authMode: "API_KEY",
      });
      const posts = await Promise.all(
        data.listPosts.items.map(async (post) => {
          const image = await Storage.get(post.image);
          post.s3Image = image;
          return post;
        })
      );

      //sort the array of posts by creation datetime
      setPostsList(
        posts.sort(
          (firstPost, secondPost) =>
            new Date(secondPost.createdAt) - new Date(firstPost.createdAt)
        )
      );
    })();
  }, []);
  console.log(postsList);
  return (
    <div className="posts">
      {postsList &&
        postsList.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            profileImage={post.profileImage}
            username={post.username}
            caption={post.caption}
            imagePosted={post.s3Image}
          />
        ))}
    </div>
  );
}

export default Posts;
