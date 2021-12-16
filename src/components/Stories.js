import { useState, useEffect } from "react";
import faker from "faker";
import Story from "./Story";
import Avatar from "../img/img_avatar.png";

function Stories() {
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    let users = [...Array(15)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setUserStories(users);
  }, []);

  return (
    <div className="stories">
      {userStories.length > 0 &&
        userStories.map((user) => (
          <Story username={user.username} profileImage={Avatar} key={user.id} />
        ))}
    </div>
  );
}

export default Stories;
