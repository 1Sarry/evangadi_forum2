import React from "react";
import footerLogo from "../../assets/evangadi-logo-footer.png";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "react-icons/ri";
const Footer = () => {
  return (
    <div className="footer-bg p-5">
      <div className="container d-md-flex justify-content-between gap-5 p-0">
        <div className="pb-4">
          <img src={footerLogo} alt="" />
          <div className="d-flex gap-4 pt-3">
            {" "}
            <RiFacebookCircleLine size={28} color="white"/>
            <RiInstagramLine size={28} color="white"/>
            <RiYoutubeLine size={28} color="white"/>
          </div>
        </div>
        <div className="pb-4 footer-item">
          <h5 className="text-white text-nowrap">Useful Links</h5>
          <ul className="list-unstyled ">
            <li>How It Works</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="pb-4 footer-item">
          <h5 className="text-white text-nowrap">Contact Info</h5>
          <ul className="list-unstyled ">
            <li>Evangadi Networks</li>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
