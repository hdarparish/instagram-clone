function Story({ username, profileImage }) {
  return (
    <div className="story-wrapper">
      <img src={profileImage} alt="profile" />
      <p>{username}</p>
    </div>
  );
}

export default Story;
