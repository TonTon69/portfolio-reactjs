import React from "react";
import { Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          &copy; 2021. Designed and Developed by{" "}
          <a href="#" target="_blank">
            TonTon
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
