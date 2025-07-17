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
          </li>
          <SidebarMenu isTag="true" pathname="/" title="Coffee Manager">
            <i className="ri-cup-fill me-2"></i>
          </SidebarMenu>

          <SidebarMenu
            isTag="true"
            pathname="/menu"
            title="Menu "
          >
            <i className="ri-file-list-3-fill me-2"></i>
          </SidebarMenu>
          <SidebarMenu
            isTag="true"
            pathname="/inventory"
            title="Quản lý kho"
          >
            <i className="ri-archive-fill me-2"></i>
          </SidebarMenu>
          <SidebarMenu
            isTag="true"
            pathname="/revenue"
            title="Doanh thu"
          >
            <i className="ri-bar-chart-fill me-2"></i>
          </SidebarMenu>
        </Accordion>
      </nav>
      <div className="p-3"></div>
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
