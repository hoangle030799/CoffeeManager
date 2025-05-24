import React, { useState, useContext, memo, Fragment } from "react";

//Router
import { Link } from "react-router-dom";

//React-bootstrap
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  Tooltip,
  OverlayTrigger,
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
          <li className="iq-menu-title">
            <i className="ri-subtract-line"></i>
            <span>Apps</span>
          </li>
          {/* Email menu Start */}
          <Accordion.Item
            as="li"
            eventKey="email-menu"
            bsPrefix={`${active === "email" ? "active menu-open" : ""} `}
            onClick={() => setActive("email")}
          >
            <CustomToggle
              eventKey="email-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Email</Tooltip>}
              >
                <i className="ri-mail-open-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Email</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="email-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-inbox-fill"
                  pathname="/app/email"
                  title="Inbox"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-edit-2-fill"
                  pathname="/app/email-compose"
                  title="Email Compose"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Email menu End */}

          {/* Doctors menu Start */}
          <Accordion.Item
            as="li"
            eventKey="doctor-menu"
            bsPrefix={`nav-item ${active === "doctor" ? "active" : ""} `}
            onClick={() => setActive("doctor")}
          >
            <CustomToggle
              eventKey="doctor-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Doctors</Tooltip>}
              >
                <i className="ri-user-3-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Doctors</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="doctor-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-file-list-fill"
                  pathname="/all-doctors"
                  title="All Doctors"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-user-add-fill"s
                  pathname="/add-doctors"
                  title="Add Doctors"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-profile-fill"
                  pathname="/doctors-profile"
                  title="Doctors Profile"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-file-edit-fill"
                  pathname="/edit-doctors"
                  title="Edit Doctors"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Doctors menu End */}
          {/* Calendar */}
          <SidebarMenu isTag="true" pathname="/calendar" title="Calendar">
            <i className="ri-calendar-event-fill"></i>
          </SidebarMenu>
          {/* Chat */}
          <SidebarMenu isTag="true" pathname="/chat" title="Chat">
            <i className="ri-message-fill"></i>
          </SidebarMenu>
          <li className="iq-menu-title">
            <i className="ri-subtract-line"></i>
            <span>Components</span>
          </li>
          {/* UI-Elements menu Start */}
          <Accordion.Item
            as="li"
            eventKey="uiElement-menu"
            bsPrefix={`nav-item ${active === "uiElement" ? "active" : ""} `}
            onClick={() => setActive("uiElement")}
          >
            <CustomToggle
              eventKey="uiElement-menu"
              active={activeMenu === 'uiElement' ? true : false} 
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>UI Elements</Tooltip>}
              >
                <i className="ri-apps-fill"></i>
              </OverlayTrigger>
              <span className="item-name">UI Elements</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="uiElement-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-font-color"
                  pathname="/ui-colors"
                  title="Colors"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-text"
                  pathname="/ui-typography"
                  title="Typography"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-alert-fill"
                  pathname="/ui-alerts"
                  title="Alerts"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-building-3-fill"
                  pathname="/ui-badges"
                  title="Badges"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-guide-fill"
                  pathname="/ui-breadcrumb"
                  title="Breadcrumb"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-checkbox-blank-fill"
                  pathname="/ui-button"
                  title="Button"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-bank-card-fill"
                  pathname="/ui-cards"
                  title="Cards"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-slideshow-4-fill"
                  pathname="/ui-carousel"
                  title="Carousel"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-movie-fill"
                  pathname="/ui-video"
                  title="Video"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-grid-fill"
                  pathname="/ui-grid"
                  title="Grid"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-image-fill"
                  pathname="/ui-image"
                  title="Image"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-file-list-fill"
                  pathname="/ui-list-group"
                  title="List Group"
                ></SidebarMenu>
                {/* <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-camera-fill"
                  pathname="/ui-media"
                  title="Media"
                ></SidebarMenu> */}
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-checkbox-blank-fill"
                  pathname="/ui-modal"
                  title="Modal"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-notification-3-fill"
                  pathname="/ui-notifications"
                  title="Notifications"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-more-fill"
                  pathname="/ui-paginations"
                  title="Paginations"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-folder-shield-fill"
                  pathname="/ui-popovers"
                  title="Popovers"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-battery-low-fill"
                  pathname="/ui-progressbar"
                  title="Progressbars"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-database-fill"
                  pathname="/ui-tabs"
                  title="Tabs"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-record-mail-fill"
                  pathname="/ui-tooltips"
                  title="Tooltips"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* UI-Elements menu End */}
          {/* UI-Elements menu End */}

          {/* Forms menu Start */}
          <Accordion.Item
            as="li"
            eventKey="forms-menu"
            bsPrefix={`nav-item ${active === "forms" ? "active" : ""} `}
            onClick={() => setActive("forms")}
          >
            <CustomToggle
              eventKey="forms-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Forms</Tooltip>}
              >
                <i className="ri-device-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Forms</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="forms-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-tablet-fill"
                  pathname="/form-elements"
                  title="Form Elements"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-device-fill"
                  pathname="/form-validation"
                  title="Form Validation"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-toggle-fill"
                  pathname="/form-switch"
                  title="Form Switch"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-chat-check-fill"
                  pathname="/form-Checkbox"
                  title="Form Checkbox"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-radio-button-fill"
                  pathname="/form-radio"
                  title="Form Radio"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Forms menu End */}

          {/* Forms menu Start */}
          <Accordion.Item
            as="li"
            eventKey="form-wizard-menu"
            bsPrefix={`nav-item ${active === "form-wizard" ? "active" : ""} `}
            onClick={() => setActive("form-wizard")}
          >
            <CustomToggle
              eventKey="form-wizard-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Form Wizard</Tooltip>}
              >
                <i className="ri-file-word-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Form Wizard</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="form-wizard-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-anticlockwise-fill"
                  pathname="/simple-wizard"
                  title="Simple Wizard"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-anticlockwise-2-fill"
                  pathname="/validate-wizard"
                  title="Validate Wizard"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-clockwise-fill"
                  pathname="/vertical-wizard"
                  title="Vertical Wizard"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Form-Wizard menu End */}

          {/* Table menu Start */}
          <Accordion.Item
            as="li"
            eventKey="table-menu"
            bsPrefix={`nav-item ${active === "tables" ? "active" : ""} `}
            onClick={() => setActive("tables")}
          >
            <CustomToggle
              eventKey="table-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Table</Tooltip>}
              >
                <i className="ri-table-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Table</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="table-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-table-fill"
                  pathname="/basic-table"
                  title="Basic Table"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-table-2"
                  pathname="/data-table"
                  title="Data Table"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-archive-drawer-fill"
                  pathname="/editable-table"
                  title="Editable Table"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Table menu End */}

          {/* Chart menu Start */}
          <Accordion.Item
            as="li"
            eventKey="charts-menu"
            bsPrefix={`nav-item ${active === "charts" ? "active" : ""} `}
            onClick={() => setActive("charts")}
          >
            <CustomToggle
              eventKey="charts-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Chart</Tooltip>}
              >
                <i className="ri-bar-chart-2-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Charts</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="charts-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-file-chart-fill"
                  pathname="/chartjs"
                  title="ChartJS"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-bar-chart-fill"
                  pathname="/e-chart"
                  title="E-Chart"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-pie-chart-box-fill"
                  pathname="/apex-chart"
                  title="Apex Chart"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Chart menu End */}

          {/* Icons menu Start */}
          <Accordion.Item
            as="li"
            eventKey="icons-menu"
            bsPrefix={`nav-item ${active === "icons" ? "active" : ""} `}
            onClick={() => setActive("icons")}
          >
            <CustomToggle
              eventKey="icons-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Icons</Tooltip>}
              >
                <i className="ri-copper-coin-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Icons</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="icons-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-stack-fill"
                  pathname="/dripicons"
                  title="Dripicons"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-facebook-fill"
                  pathname="/font-awesome"
                  title="Font Awesome"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-keynote-fill"
                  pathname="/line-awesome"
                  title="Line Awesome"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-remixicon-fill"
                  pathname="/remixicon"
                  title="Remixicon"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-underline"
                  pathname="/unicons"
                  title="Unicons"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Chart menu End */}

          <li className="iq-menu-title">
            <i className="ri-subtract-line"></i>
            <span>Pages</span>
          </li>

          {/* Authentication menu Start */}
          <Accordion.Item
            as="li"
            eventKey="authentication-menu"
            bsPrefix={`nav-item ${
              active === "authentication" ? "active" : ""
            } `}
            onClick={() => setActive("authentication")}
          >
            <CustomToggle
              eventKey="authentication-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Authentication</Tooltip>}
              >
                <i className="ri-server-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Authentication</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="authentication-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-login-box-fill"
                  pathname="/sign-in"
                  title="Login"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-logout-box-fill"
                  pathname="/sign-up"
                  title="Register"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-record-mail-fill"
                  pathname="/recover-password"
                  title="Recover Password"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-chat-check-fill"
                  pathname="/confirm-mail"
                  title="Confirm Mail"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-file-lock-fill"
                  pathname="/lock-screen"
                  title="Lock Scresn"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Authentication menu End */}

          {/* Maps menu Start */}
          <Accordion.Item
            as="li"
            eventKey="maps-menu"
            bsPrefix={`nav-item ${active === "maps" ? "active" : ""} `}
            onClick={() => setActive("maps")}
          >
            <CustomToggle
              eventKey="maps-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Maps</Tooltip>}
              >
                <i className="ri-map-pin-2-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Maps</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="maps-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-google-fill"
                  pathname="/google-map"
                  title="Google"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-map-pin-range-line"
                  pathname="/vector-map"
                  title="Vector"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Maps menu End */}

          {/* Extra pages menu Start */}
          <Accordion.Item
            as="li"
            eventKey="extra-pages-menu"
            bsPrefix={`nav-item ${active === "extra-pages" ? "active" : ""} `}
            onClick={() => setActive("extra-pages")}
          >
            <CustomToggle
              eventKey="extra-pages-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Extra Pages</Tooltip>}
              >
                <i className="ri-folders-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Extra Pages</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="extra-pages-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-map-pin-time-fill"
                  pathname="/timeline"
                  title="Timeline"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-question-answer-fill"
                  pathname="/invoice"
                  title="Invoice"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-checkbox-blank-fill"
                  pathname="/blank-page"
                  title="Blank Page"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-error-warning-fill"
                  pathname="/error-404"
                  title="Error 404"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-error-warning-fill"
                  pathname="/error-500"
                  title="Error 500"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-price-tag-3-fill"
                  pathname="/pricing"
                  title="Pricing"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-price-tag-2-fill"
                  pathname="/pricing-1"
                  title="Pricing 1"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-git-repository-commits-fill"
                  pathname="/maintenance"
                  title="Maintenance"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-run-fill"
                  pathname="/coming-soon"
                  title="Coming Soon"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-compasses-2-fill"
                  pathname="/faq"
                  title="Faq"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Extra pages menu End */}

          {/* Menu Level start */}
          {/* <Accordion.Item
            as="li"
            eventKey="menu-level"
            bsPrefix={`nav-item ${active === "extra-menu" ? "active" : ""} `}
            onClick={() => setActive("extra-menu")}
          >
            <CustomToggle
              eventKey="menu-level"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Menu Level</Tooltip>}
              >
                <i className="ri-record-circle-line"></i>
              </OverlayTrigger>
              <span className="item-name">Menu Level</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="menu-level">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-record-circle-line"
                  pathname="#"
                  title="Menu 1"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-record-circle-line"
                  pathname="#"
                  title="Menu 2"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-record-circle-line"
                  pathname="#"
                  title="Menu 3"
                ></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item> */}

          {/* Menu Level end */}
        </Accordion>
      </nav>
      <div className="p-3"></div>
      {/* </div> */}
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
