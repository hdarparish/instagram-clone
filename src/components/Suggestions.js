import { useState, useEffect } from "react";
import faker from "faker";
import Avatar from "../img/img_avatar.png";
import { Auth } from "aws-amplify";

function Suggestions() {
  const [userSuggestions, setUserSuggestions] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentSession()
      .then((user) => setUser(user))
      .catch(() => console.log("Not signed in"));
  }, []);

  useEffect(() => {
    let users = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setUserSuggestions(users);
  }, []);

  return (
    <div className="suggestions">
      <div className="suggestions-profile">
        <img src={user?.idToken?.payload?.picture} alt="profile" />
        <p>{user?.idToken?.payload?.name.split(" ").join(".")}</p>
        <button onClick={() => Auth.signOut()}>Logout</button>
      </div>
      <div>
        <p className="suggestions__text-grey">Suggestions For You</p>
        {userSuggestions.map((user) => (
          <div className="suggestions-user" key={user.id}>
            <div>
              <img src={Avatar} alt="profile" />
            </div>
            <div className="user-details">
              <p className="user-details__username">{user.username}</p>
              <p className="user-details__company">{user.company.name}</p>
            </div>

            <button>Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
