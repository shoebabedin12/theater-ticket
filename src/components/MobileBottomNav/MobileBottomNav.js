import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileBottomNav = () => {
  const [menuBox, setMenuBox] = useState(false)


  const OpenMobileMenu = () =>{
    document.body.classList.add("body-mobile");
    setMenuBox(true);
  }

  const CloseMobileMenu = () =>{
    document.body.classList.remove("body-mobile");
    setMenuBox(false);
  }
  return (
    <>
      <div className="mobile_bottom_navigation_area oflow-hd">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="single_mobile_navigation oflow-hd">
                <Link className="active" to="">
                  <div className="single_mobile_navigation_icon oflow-hd">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_342_260)">
                        <path
                          d="M25.2987 11.3087L25.2969 11.307L14.691 0.701441C14.2389 0.249082 13.6378 0 12.9986 0C12.3592 0 11.7582 0.24893 11.3059 0.701238L0.705482 11.3014C0.701928 11.3049 0.698373 11.3087 0.694818 11.3123C-0.233564 12.2459 -0.231939 13.7609 0.699389 14.6922C1.12483 15.1179 1.68683 15.3644 2.28767 15.3902C2.31205 15.3926 2.33668 15.3938 2.36146 15.3938H2.78416V23.1989C2.78416 24.7434 4.04079 26 5.58566 26H9.735C10.1556 26 10.4967 25.659 10.4967 25.2383V19.1191C10.4967 18.4143 11.07 17.8411 11.7748 17.8411H14.2222C14.9271 17.8411 15.5003 18.4144 15.5003 19.1191V25.2383C15.5003 25.659 15.8413 26 16.262 26H20.4114C21.9563 26 23.2129 24.7434 23.2129 23.1989V15.3938H23.6049C24.244 15.3938 24.8451 15.1449 25.2975 14.6926C26.2299 13.7597 26.2302 12.2422 25.2987 11.3087Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_342_260">
                          <rect width="26" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="single_mobile_navigation_title oflow-hd">
                    Home
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-4">
              <div className="single_mobile_navigation oflow-hd">
                <Link className="" to="">
                  <div className="single_mobile_navigation_icon oflow-hd">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.7675 1.08334H5.2325C4.7068 1.08363 4.20271 1.29259 3.83098 1.66432C3.45925 2.03605 3.25029 2.54014 3.25 3.06584V22.9342C3.25029 23.4599 3.45925 23.964 3.83098 24.3357C4.20271 24.7074 4.7068 24.9164 5.2325 24.9167H20.7675C21.2932 24.9164 21.7973 24.7074 22.169 24.3357C22.5408 23.964 22.7497 23.4599 22.75 22.9342V3.06584C22.7497 2.54014 22.5408 2.03605 22.169 1.66432C21.7973 1.29259 21.2932 1.08363 20.7675 1.08334ZM7.58333 6.50001H13C13.2873 6.50001 13.5629 6.61415 13.766 6.81731C13.9692 7.02048 14.0833 7.29603 14.0833 7.58334C14.0833 7.87066 13.9692 8.14621 13.766 8.34938C13.5629 8.55254 13.2873 8.66668 13 8.66668H7.58333C7.29602 8.66668 7.02047 8.55254 6.8173 8.34938C6.61414 8.14621 6.5 7.87066 6.5 7.58334C6.5 7.29603 6.61414 7.02048 6.8173 6.81731C7.02047 6.61415 7.29602 6.50001 7.58333 6.50001ZM18.4167 19.5H7.58333C7.29602 19.5 7.02047 19.3859 6.8173 19.1827C6.61414 18.9795 6.5 18.704 6.5 18.4167C6.5 18.1294 6.61414 17.8538 6.8173 17.6506C7.02047 17.4475 7.29602 17.3333 7.58333 17.3333H18.4167C18.704 17.3333 18.9795 17.4475 19.1827 17.6506C19.3859 17.8538 19.5 18.1294 19.5 18.4167C19.5 18.704 19.3859 18.9795 19.1827 19.1827C18.9795 19.3859 18.704 19.5 18.4167 19.5ZM18.4167 14.0833H7.58333C7.29602 14.0833 7.02047 13.9692 6.8173 13.766C6.61414 13.5629 6.5 13.2873 6.5 13C6.5 12.7127 6.61414 12.4371 6.8173 12.234C7.02047 12.0308 7.29602 11.9167 7.58333 11.9167H18.4167C18.704 11.9167 18.9795 12.0308 19.1827 12.234C19.3859 12.4371 19.5 12.7127 19.5 13C19.5 13.2873 19.3859 13.5629 19.1827 13.766C18.9795 13.9692 18.704 14.0833 18.4167 14.0833Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="single_mobile_navigation_title oflow-hd">
                    Explore Events
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-4">
              <div className="single_mobile_navigation oflow-hd">
                <Link className="openmobilemenu" to="" onClick={OpenMobileMenu}>
                  <div className="single_mobile_navigation_icon oflow-hd">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_301_2)">
                        <path
                          d="M24.375 22.75H1.62501C0.727511 22.75 0 22.0225 0 21.125C0 20.2276 0.727511 19.5 1.62501 19.5H24.375C25.2725 19.5 26.0001 20.2276 26.0001 21.125C26 22.0225 25.2725 22.75 24.375 22.75ZM24.375 14.625H1.62501C0.727511 14.625 0 13.8975 0 13C0 12.1026 0.727511 11.375 1.62501 11.375H24.375C25.2725 11.375 26.0001 12.1025 26.0001 13C26.0001 13.8975 25.2725 14.625 24.375 14.625ZM24.375 6.49999H1.62501C0.727511 6.49999 0 5.77248 0 4.87498C0 3.97748 0.727511 3.24997 1.62501 3.24997H24.375C25.2725 3.24997 26.0001 3.97748 26.0001 4.87498C26.0001 5.77248 25.2725 6.49999 24.375 6.49999Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_301_2">
                          <rect width="26" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="single_mobile_navigation_title oflow-hd">
                    Menu
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile_menu_box_area ${menuBox ? "mobile_menu_box_area_open" : ""}`}>
        <button className="mobile_menu_box_Cross remove-all" id="" onClick={CloseMobileMenu}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_535_2)">
              <path
                d="M1.22093 25.0002C0.979466 25.0002 0.743411 24.9286 0.542626 24.7945C0.34184 24.6604 0.185345 24.4697 0.0929338 24.2466C0.000522909 24.0236 -0.0236515 23.7781 0.0234685 23.5413C0.0705884 23.3044 0.186886 23.0869 0.35765 22.9162L22.9162 0.357583C23.1452 0.128626 23.4557 0 23.7795 0C24.1033 0 24.4139 0.128626 24.6428 0.357583C24.8718 0.586539 25.0004 0.897071 25.0004 1.22086C25.0004 1.54466 24.8718 1.85519 24.6428 2.08415L2.08421 24.6427C1.97095 24.7562 1.83638 24.8462 1.68823 24.9076C1.54008 24.9689 1.38128 25.0004 1.22093 25.0002Z"
                fill="black"
              />
              <path
                d="M23.7795 25.0002C23.6191 25.0004 23.4603 24.9689 23.3122 24.9076C23.164 24.8462 23.0294 24.7562 22.9162 24.6427L0.357583 2.08415C0.128626 1.85519 0 1.54466 0 1.22086C0 0.897071 0.128626 0.586539 0.357583 0.357583C0.586539 0.128626 0.897071 0 1.22086 0C1.54466 0 1.85519 0.128626 2.08415 0.357583L24.6427 22.9162C24.8135 23.0869 24.9298 23.3044 24.9769 23.5413C25.024 23.7781 24.9999 24.0236 24.9075 24.2466C24.815 24.4697 24.6586 24.6604 24.4578 24.7945C24.257 24.9286 24.0209 25.0002 23.7795 25.0002Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_535_2">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className="mobile_menu_box_content oflow-hd">
          <div className="mobile_menu_box_content_img oflow-hd">
            <img src={require("./../../assets/images/logo.png")} alt="img" />
          </div>
          <div className="mobile_menu_box_content_menu oflow-hd">
            <ul>
              <li className="menu_item_active">
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Explore Events</Link>
              </li>
              <li>
                <Link to="">Partnership</Link>
              </li>
              <li>
                <Link to="">Who We Are</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileBottomNav;
