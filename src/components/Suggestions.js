import { useState, useEffect } from "react";
import faker from "faker";
import Avatar from "../img/img_avatar.png";

function Suggestions() {
  const [userSuggestions, setUserSuggestions] = useState([]);

  useEffect(() => {
    let users = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setUserSuggestions(users);
  }, []);
  return (
    <div className="suggestions-wrapper">
      <div className="suggestions-profile-wrapper">
        <img src={Avatar} alt="profile" />
        <p>hdarparish</p>
        <button>Logout</button>
      </div>
      <div>
        <p className="suggestions-text">Suggestions For You</p>
        {userSuggestions.map((user) => (
          <div className="suggestions-user-wrapper" key={user.id}>
            <div>
              <img src={Avatar} alt="profile" />
            </div>
            <div className="suggestions-details">
              <p className="user-identity">{user.username}</p>
              <p className="user-company">{user.company.name}</p>
            </div>

            <button>Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
