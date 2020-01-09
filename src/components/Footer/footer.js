import React, { Component } from "react";
import ScrollTop from "../ScrollTop/scrollTop";
import SocialIcons from "../SocialIcons/socialIcons";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className={`page-footer text-center footer`}>
        <div className="footer-inner">
          <SocialIcons />
          <ScrollTop />
          <div className="copyright">
            <div>Home page cover photo taken by Karen Irmscher.</div>
            <div>Website designed and built by <a href="https://curtisyungen.github.io/Portfolio/">Curtis Yungen</a>.</div>
            <br />
            <div>Copyright &copy; 2020 Steve Yungen. All rights reserved.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
