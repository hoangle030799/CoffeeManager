import React, { Fragment, memo, useState } from "react";
import { Link } from "react-router-dom";

import logo1 from "../../../assets/images/logo1.png";
import VerticalNav from "./verticalNav";

// Redux Selector / Action
import { useSelector } from "react-redux";
// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

const Sidebar = memo(() => {
  const [isClicked, setIsClicked] = useState(false);
  const minisidebar = () => {
    setIsClicked(isClicked);
    document.body.classList.toggle('sidebar-main');
  };
  const appName = useSelector(SettingSelector.app_name)
  return (
    <Fragment>
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <Link to="/">
            <img
              src={logo1}
              className="img-fluid"
              alt=""
              style={{ height: "90px" }}
            />
            <span className="fs-3">Coffee Manager</span>
          </Link>
        </div>
        <div id="sidebar-scrollbar">
          <VerticalNav />
        </div>
      </div>
    </Fragment>
  );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;
