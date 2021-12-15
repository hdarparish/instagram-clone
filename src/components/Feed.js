import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  return (
    <main className="feed-wrapper">
      <section className="stories-posts-wrapper">
        <div>
          <Stories />
        </div>
        <Posts />
      </section>
      <section>
        <div className="feed-suggestions-wrapper">
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;
