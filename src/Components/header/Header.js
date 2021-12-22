import React, { useEffect } from "react";
import classes from "./header.module.css";
import { GrNotification } from "react-icons/gr";
// import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { BiSearch } from "react-icons/bi";
function Header() {

  useEffect(() => {
    document.addEventListener('scroll',(e) => {
      const dom = document.querySelector(".header_header__3b2OZ");
      if(window.pageYOffset < 14) {
        dom.style.backgroundColor = "transparent"
      } 
      else{
        dom.style.backgroundColor = "#141414"
      }
    })
  })
  
  return (
    <div className={classes.parent}>
      <div className={classes.header}>
        <div className={classes.left}>
          <img
            src="https://netflix-clone-9a0b9.firebaseapp.com/f4070143e1f521da82a119eb78b434d0.png"
            alt="logo"
          />
          <div>Home</div>
          <div>Series</div>
          <div>Films</div>
          <div>New&Popular</div>
          <div>My List</div>
        </div>
        <div className={classes.right}>
          <div className={classes.searchItem}>
            <input type="text"></input>
            <BiSearch className={classes.search} />
          </div>
          <CircleNotificationsIcon
            className={classes.notification}
            style={{ fontSize: "40px" }}
          />
          <Avatar>H</Avatar>
        </div>
      </div>
    </div>
  );
}

export default Header;
