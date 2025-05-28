import React, { useState, useContext, memo, Fragment } from "react";

//Router
import { Link } from "react-router-dom";

//React-bootstrap
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";

//Componets
import SidebarMenu from "./sidebar-menu";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = memo(() => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [active, setActive] = useState("");


  return (
    <Fragment>
      {/* <div id="sidebar-scrollbar"> */}
      <nav className="iq-sidebar-menu">
        <Accordion as="ul" className="iq-menu">
          <li className="iq-menu-title">
            <i className="ri-subtract-line"></i>
            <span>Dashboard</span>
          </li>
          <SidebarMenu isTag="true" pathname="/" title="Doctor Dashboard">
            <i className="ri-hospital-fill"></i>
          </SidebarMenu>

          <SidebarMenu
            isTag="true"
            pathname="/dashboard-1"
            title="Hospital Dashboard 1 "
          >
            <i className="ri-home-8-fill"></i>
          </SidebarMenu>
          <SidebarMenu
            isTag="true"
            pathname="/dashboard-2"
            title="Hospital Dashboard 2"
          >
            <i className="ri-briefcase-4-fill"></i>
          </SidebarMenu>
          <SidebarMenu
            isTag="true"
            pathname="/dashboard-3"
            title="Patient Dashboard"
          >
            <i className="ri-group-fill"></i>
          </SidebarMenu>
          <SidebarMenu
            isTag="true"
            pathname="/dashboard-4"
            title="Covid-19 Dashboard"
            isNew="true"
          >
            <i className="lab la-mendeley"></i>
          </SidebarMenu>
        </Accordion>
      </nav>
      <div className="p-3"></div>
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
