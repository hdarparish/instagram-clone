//logo
import Logo from "../img/instagram-logo.png";
import Avatar from "../img/img_avatar.png";
//icons
import { HiHome, HiOutlinePaperAirplane, HiSearch } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";

import { Auth } from "aws-amplify";

import { useState, useEffect } from "react";

function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch(() => console.log("Not signed in"));
  }, []);
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
              <BsPlusSquare />
              <AiOutlineHeart />
              <img
                src={user?.attributes?.picture}
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
