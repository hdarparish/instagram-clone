import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  return (
    <main className="feed">
      <section>
        <div>
          <Stories />
        </div>
        <Posts />
      </section>
      <section>
        <div className="feed-suggestions">
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;
