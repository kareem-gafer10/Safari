import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
const FooterIcon = () => {
  return (
    <div className="footer-icons">
      <div className="icon">
        <AiOutlineInstagram color="#c0392b" size={32} />
      </div>
      <div className="icon">
        <BsFacebook color="#2980b9" size={32} />
      </div>
      <div className="icon">
        <BsTwitter color="skyblue" size={32} />
      </div>
      <div className="icon">
        <BsLinkedin color="darkblue" size={32} />
      </div>
    </div>
  );
};

export default FooterIcon;
