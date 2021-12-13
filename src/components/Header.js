//logo
import Logo from "../img/instagram-logo.png";
import Avatar from "../img/img_avatar.png";
//icons
import { HiHome, HiOutlinePaperAirplane, HiSearch } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-logo">
          <img src={Logo} alt="website logo" />
        </div>
        <div className="header-input">
          <div className="search-icon">
            <HiSearch />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-icons">
          <HiHome />
          <HiOutlinePaperAirplane />
          <BsPlusSquare />
          <AiOutlineHeart />
          <img src={Avatar} alt="user profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
