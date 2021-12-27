import Post from "./Post";
import Avatar from "../img/img_avatar.png";
import { useEffect, useState } from "react";
//aws
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";

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
  const [postsList, setPostsList] = useState([]);
  const [user, setUser] = useState(false);
  let newPostSubscription;
  //const subscription = API.graphql(subscriptions.onCreatePost);

  //check if the user is authenticated
  useEffect(() => {
    Auth.currentSession()
      .then((user) => setUser(user))
      .catch(() => newPostSubscription.unsubscribe());
  }, []);

  useEffect(() => {
    getPosts();
    allPostsSubscription();
  }, []);

  const getPosts = async () => {
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
  };

  //if a new post is created update the post list
  const allPostsSubscription = async () => {
    newPostSubscription = await API.graphql(
      graphqlOperation(subscriptions.onCreatePost)
    ).subscribe({
      next: async () => {
        await getPosts();
      },
    });
  };

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
