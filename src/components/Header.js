import { useState, useEffect } from "react";
//logo
import Logo from "../img/instagram-logo.png";
//icons
import { HiHome, HiOutlinePaperAirplane, HiSearch } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
//aws
import { Auth, Storage } from "aws-amplify";
//redux
import { useDispatch } from "react-redux";

function Header() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    Auth.currentSession()
      .then((user) => setUser(user))
      .catch(() => console.log("Not signed in"));
  }, []);

  const modal = () => {
    dispatch({ type: "MODAL_STATE" });
  };

  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo">
          <img src={Logo} alt="website logo" />
        </div>
        <div className="header-input">
          <div className="header-input__icon">
            <HiSearch />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-icons">
          {user ? (
            <>
              <HiHome />
              <HiOutlinePaperAirplane />
              <BsPlusSquare onClick={modal} />
              <AiOutlineHeart />
              <img
                src={user?.idToken?.payload?.picture}
                onClick={() => Auth.signOut()}
                alt="user profile"
              />
            </>
          ) : (
            <button
              onClick={() => Auth.federatedSignIn({ provider: "Google" })}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
