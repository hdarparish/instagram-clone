import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
//aws
import { Auth } from "aws-amplify";
//states
import { useState, useEffect } from "react";

function Feed() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    Auth.currentSession()
      .then((user) => setUser({ user }))
      .catch(() => console.log("Not signed in"));
  }, []);
  return (
    <main className="feed" style={{ justifyContent: !user ? "center" : "" }}>
      <section>
        <div>
          <Stories />
        </div>
        <Posts />
      </section>
      {user && (
        <section>
          <div className="feed-suggestions">
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
