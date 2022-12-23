import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import "./Header.css";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className="header">
      <Logo />
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div onClick={handleToggle} className="header-menu">
        {toggle ? <AiOutlineClose /> : <AiOutlineBars />}
      </div>
    </header>
  );
};

export default Header;
