import { useNavigate } from "react-router-dom";
import "./NavbarAdmin.scss"
import { useEffect, useState } from 'react';

const NavbarAdmin = () => {
  const [activeTab, setActiveTab] = useState(window.location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTab(window.location.pathname);
  }, []);

  const navigateTo = (endpoint) => {
    setActiveTab(endpoint);
    navigate(endpoint);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="app-icon">
          <img src="./assets/Qlogo.png" alt="" />
        </div>
      </div>
      <ul className="sidebar-list">
        <li className={`sidebar-list-item ${activeTab === "/Posts" ? "active" : ""}`}  onClick={() => navigateTo("/Posts")}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-news"><path d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"></path></svg>
            <span>Posts</span>
          </a>
        </li>
        <li className={`sidebar-list-item ${activeTab === "/AircraftInfo" ? "active" : ""}`}  onClick={() => navigateTo("/AircraftInfo")}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plane"><path d="M2 11.5H1.5H2ZM15.8737 13.8322C16.0572 13.6258 16.0386 13.3098 15.8322 13.1263C15.6258 12.9428 15.3098 12.9614 15.1263 13.1678L15.8737 13.8322ZM11.5 18L11.8536 18.3535L11.8639 18.3431L11.8737 18.3322L11.5 18ZM10.382 18.5528V19.0528H10.4033L10.4245 19.0509L10.382 18.5528ZM11.3938 13.7812C11.5491 13.5529 11.49 13.2419 11.2616 13.0866C11.0333 12.9313 10.7223 12.9905 10.567 13.2188L11.3938 13.7812ZM11.2995 6.41181L10.8951 6.70589V6.70589L11.2995 6.41181ZM8.80665 7.47883L9.24559 7.2394L8.80665 7.47883ZM4.87907 7.61492L4.41762 7.80745L4.87907 7.61492ZM5.2119 14.7848L5.0262 15.249L5.2119 14.7848ZM8.51673 17.1219L8.10331 16.8407L8.51673 17.1219ZM8.40385 17.3707L8.89522 17.4632L8.40385 17.3707ZM21.2764 14.0528L20.8292 14.2764L21.2764 14.0528ZM20.1056 12.8292L20.8292 14.2764L21.7236 13.8292L21 12.3819L20.1056 12.8292ZM5.3976 14.3205L2.8143 13.2872L2.44291 14.2157L5.0262 15.249L5.3976 14.3205ZM2.5 12.8229V11.5H1.5V12.8229H2.5ZM2.5 11.5V7.99998H1.5V11.5H2.5ZM3 7.49998H3.95617V6.49998H3V7.49998ZM4.41762 7.80745L5.78198 11.0776L6.70488 10.6925L5.34052 7.4224L4.41762 7.80745ZM7.16632 12H18.7639V11H7.16632V12ZM15.1263 13.1678L11.1263 17.6678L11.8737 18.3322L15.8737 13.8322L15.1263 13.1678ZM10.382 18.0528H9.38743V19.0528H10.382V18.0528ZM8.93015 17.4031L11.3938 13.7812L10.567 13.2188L8.10331 16.8407L8.93015 17.4031ZM9.38743 18.0528C9.07074 18.0528 8.83871 17.7634 8.89522 17.4632L7.91249 17.2782C7.7421 18.1831 8.43325 19.0528 9.38743 19.0528V18.0528ZM11.1464 17.6464C10.8691 17.9237 10.8114 17.9723 10.7636 17.9959C10.7279 18.0135 10.6849 18.0251 10.3394 18.0546L10.4245 19.0509C10.6971 19.0277 10.9631 19.0128 11.2069 18.8923C11.4386 18.7777 11.6309 18.5762 11.8536 18.3535L11.1464 17.6464ZM20.382 15H13.5V16H20.382V15ZM9.61997 15H8.92585V16H9.61997V15ZM15.4044 11.2059L11.7039 6.11772L10.8951 6.70589L14.5956 11.7941L15.4044 11.2059ZM10.4908 5.49998H9.68454V6.49998H10.4908V5.49998ZM8.3677 7.71826L10.5611 11.7394L11.4389 11.2606L9.24559 7.2394L8.3677 7.71826ZM9.68454 5.49998C8.54595 5.49998 7.82248 6.71869 8.3677 7.71826L9.24559 7.2394C9.06386 6.90622 9.30501 6.49998 9.68454 6.49998V5.49998ZM11.7039 6.11772C11.4216 5.7296 10.9707 5.49998 10.4908 5.49998V6.49998C10.6507 6.49998 10.8011 6.57652 10.8951 6.70589L11.7039 6.11772ZM5.78198 11.0776C6.01505 11.6362 6.56103 12 7.16632 12V11C6.96456 11 6.78257 10.8787 6.70488 10.6925L5.78198 11.0776ZM3.95617 7.49998C4.15794 7.49998 4.33993 7.62124 4.41762 7.80745L5.34052 7.4224C5.10745 6.86378 4.56147 6.49998 3.95617 6.49998V7.49998ZM2.8143 13.2872C2.62447 13.2113 2.5 13.0274 2.5 12.8229H1.5C1.5 13.4363 1.87342 13.9879 2.44291 14.2157L2.8143 13.2872ZM5.0262 15.249C6.26648 15.7451 7.59003 16 8.92585 16V15C7.71725 15 6.51975 14.7694 5.3976 14.3205L5.0262 15.249ZM8.10331 16.8407C8.03475 16.9415 7.94787 17.0903 7.91249 17.2782L8.89522 17.4632C8.8943 17.4681 8.89394 17.4659 8.89909 17.4551C8.90444 17.4438 8.91383 17.4271 8.93015 17.4031L8.10331 16.8407ZM20.8292 14.2764C20.9954 14.6088 20.7537 15 20.382 15V16C21.497 16 22.2223 14.8265 21.7236 13.8292L20.8292 14.2764ZM2.5 7.99998C2.5 7.72383 2.72386 7.49998 3 7.49998V6.49998C2.17157 6.49998 1.5 7.17155 1.5 7.99998H2.5ZM21 12.3819C20.5765 11.535 19.7109 11 18.7639 11V12C19.3321 12 19.8515 12.321 20.1056 12.8292L21 12.3819Z" fill="#464455"></path></svg>
            <span>Aircraft Info</span>
          </a>
        </li>
        <li className={`sidebar-list-item ${activeTab === "/FlightsInfo" ? "active" : ""}`}  onClick={() => navigateTo("/FlightsInfo")}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><rect className="cls-1" x="1.5" y="9.11" width="21" height="13.36"></rect><rect className="cls-1" x="1.5" y="3.39" width="21" height="5.73"></rect><line className="cls-1" x1="6.27" y1="0.52" x2="6.27" y2="6.25"></line><line className="cls-1" x1="12" y1="0.52" x2="12" y2="6.25"></line><line className="cls-1" x1="17.73" y1="0.52" x2="17.73" y2="6.25"></line><line className="cls-1" x1="12" y1="11.02" x2="12" y2="18.66"></line><line className="cls-1" x1="10.09" y1="19.61" x2="12" y2="18.66"></line><line className="cls-1" x1="13.91" y1="19.61" x2="12" y2="18.66"></line><line className="cls-1" x1="12" y1="13.89" x2="8.18" y2="15.8"></line><line className="cls-1" x1="12" y1="13.89" x2="15.82" y2="15.8"></line></svg>
            <span>Flight Info</span>
          </a>
        </li>
        <li className={`sidebar-list-item ${activeTab === "/TicketsInfo" ? "active" : ""}`}  onClick={() => navigateTo("/TicketsInfo")}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32" fill="black" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M30 13.75c0.414-0 0.75-0.336 0.75-0.75v0-5c-0-0.414-0.336-0.75-0.75-0.75h-28c-0.414 0-0.75 0.336-0.75 0.75v0 5c0 0.414 0.336 0.75 0.75 0.75v0c1.243 0 2.25 1.007 2.25 2.25s-1.007 2.25-2.25 2.25v0c-0.414 0-0.75 0.336-0.75 0.75v0 5c0 0.414 0.336 0.75 0.75 0.75h28c0.414-0 0.75-0.336 0.75-0.75v0-5c-0-0.414-0.336-0.75-0.75-0.75v0c-1.243 0-2.25-1.007-2.25-2.25s1.007-2.25 2.25-2.25v0zM29.25 19.674v3.576h-26.5v-3.576c1.724-0.361 3-1.869 3-3.674s-1.276-3.313-2.975-3.67l-0.024-0.004v-3.576h26.5v3.576c-1.724 0.361-3 1.869-3 3.674s1.276 3.313 2.975 3.67l0.024 0.004z"></path></svg>
            <span>Ticket Info</span>
          </a>
        </li>
        <li className={`sidebar-list-item ${activeTab === "/Statistics" ? "active" : ""}`}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
            <span>Statistics</span>
          </a>
        </li>
        <li className={`sidebar-list-item ${activeTab === "/Inbox" ? "active" : ""}`}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
            <span>Inbox</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarAdmin;
