import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ openLoginModal, openUserMenu }) => {
  const [user, setUser] = useState(false);
  // Retrieve the "User" item from localStorage
  const userJSON = localStorage.getItem("User");

  useEffect(() => {
    // Check if the item exists in localStorage
    if (userJSON) {
      // If it exists, parse it back to an object
      const storedUser = JSON.parse(userJSON);
      setUser(storedUser);
    } else {
      console.log("User not found in localStorage");
    }
  }, []);
  return (
    <>
    <div className="header_space oflow-hd"></div>
      <div className="header_area">
        <div className="header_top_area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="header_social oflow-hd">
                  <ul>
                    <li>
                      <Link to="">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_269)">
                            <path
                              d="M8.66164 15V8.1583H10.9572L11.3016 5.49117H8.66164V3.7886C8.66164 3.01665 8.87513 2.49057 9.98336 2.49057L11.3945 2.48999V0.104423C11.1505 0.072709 10.3128 0 9.33778 0C7.30183 0 5.90798 1.24272 5.90798 3.52445V5.49117H3.60547V8.1583H5.90798V15H8.66164Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_269">
                              <rect width="15" height="15" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_275)">
                            <path
                              d="M11.25 0H3.75C1.65 0 0 1.65 0 3.75V11.25C0 13.35 1.65 15 3.75 15H11.25C13.35 15 15 13.35 15 11.25V3.75C15 1.65 13.35 0 11.25 0ZM13.5 11.25C13.5 12.525 12.525 13.5 11.25 13.5H3.75C2.475 13.5 1.5 12.525 1.5 11.25V3.75C1.5 2.475 2.475 1.5 3.75 1.5H11.25C12.525 1.5 13.5 2.475 13.5 3.75V11.25Z"
                              fill="black"
                            />
                            <path
                              d="M7.5 3.75C5.4 3.75 3.75 5.4 3.75 7.5C3.75 9.6 5.4 11.25 7.5 11.25C9.6 11.25 11.25 9.6 11.25 7.5C11.25 5.4 9.6 3.75 7.5 3.75ZM7.5 9.75C6.225 9.75 5.25 8.775 5.25 7.5C5.25 6.225 6.225 5.25 7.5 5.25C8.775 5.25 9.75 6.225 9.75 7.5C9.75 8.775 8.775 9.75 7.5 9.75Z"
                              fill="black"
                            />
                            <path
                              d="M11.25 4.5C11.6642 4.5 12 4.16421 12 3.75C12 3.33579 11.6642 3 11.25 3C10.8358 3 10.5 3.33579 10.5 3.75C10.5 4.16421 10.8358 4.5 11.25 4.5Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_275">
                              <rect width="15" height="15" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_272)">
                            <path
                              d="M15 2.84906C14.4422 3.09375 13.8478 3.25594 13.2281 3.33469C13.8656 2.95406 14.3522 2.35594 14.5809 1.635C13.9866 1.98937 13.3303 2.23969 12.6309 2.37938C12.0666 1.77844 11.2622 1.40625 10.3847 1.40625C8.68219 1.40625 7.31156 2.78813 7.31156 4.48219C7.31156 4.72594 7.33219 4.96031 7.38281 5.18344C4.82625 5.05875 2.56406 3.83344 1.04437 1.96688C0.779062 2.42719 0.623438 2.95406 0.623438 3.52125C0.623438 4.58625 1.17188 5.53031 1.98937 6.07687C1.49531 6.0675 1.01063 5.92406 0.6 5.69812V5.73187C0.6 7.22625 1.66594 8.4675 3.06375 8.75344C2.81344 8.82188 2.54063 8.85469 2.2575 8.85469C2.06063 8.85469 1.86187 8.84344 1.67531 8.80219C2.07375 10.02 3.20438 10.9153 4.54875 10.9444C3.5025 11.7628 2.17406 12.2559 0.735938 12.2559C0.48375 12.2559 0.241875 12.2447 0 12.2137C1.36219 13.0922 2.97656 13.5938 4.7175 13.5938C10.3763 13.5938 13.47 8.90625 13.47 4.84312C13.47 4.70719 13.4653 4.57594 13.4587 4.44563C14.0691 4.0125 14.5819 3.47156 15 2.84906Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_272">
                              <rect width="15" height="15" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="tel:+088 01718-77 95 97">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_282)">
                            <path
                              d="M11.4043 9.9228C10.9142 9.43899 10.3024 9.43899 9.81549 9.9228C9.44404 10.2911 9.0726 10.6594 8.7074 11.034C8.60752 11.137 8.52324 11.1589 8.40151 11.0902C8.16116 10.9591 7.90521 10.853 7.67423 10.7094C6.59736 10.032 5.69529 9.16119 4.89622 8.18108C4.49981 7.69415 4.1471 7.17288 3.90051 6.58607C3.85057 6.46746 3.85993 6.38942 3.95669 6.29266C4.32814 5.9337 4.69021 5.56538 5.05541 5.19706C5.56419 4.68516 5.56419 4.08586 5.05229 3.57083C4.76201 3.27743 4.47172 2.99026 4.18143 2.69685C3.88178 2.3972 3.58525 2.09443 3.28248 1.7979C2.79243 1.32033 2.18064 1.32033 1.69371 1.80102C1.31915 2.16934 0.960191 2.54703 0.579385 2.90911C0.226672 3.24309 0.0487541 3.65199 0.0112978 4.12956C-0.048008 4.90678 0.142395 5.6403 0.410832 6.35509C0.960191 7.83461 1.79671 9.1487 2.81116 10.3535C4.18143 11.9829 5.81702 13.272 7.73042 14.2022C8.59191 14.6204 9.48462 14.9419 10.4554 14.995C11.1233 15.0325 11.7039 14.8639 12.169 14.3426C12.4874 13.9868 12.8463 13.6622 13.1834 13.322C13.6828 12.8163 13.686 12.2045 13.1897 11.7051C12.5966 11.1089 12.0004 10.5159 11.4043 9.9228ZM10.8081 7.43508L11.9599 7.23843C11.7788 6.18029 11.2794 5.22203 10.5209 4.46042C9.71872 3.65823 8.70428 3.15257 7.58683 2.9965L7.42452 4.15453C8.28914 4.27626 9.07572 4.66643 9.69687 5.28758C10.2837 5.8744 10.6676 6.61728 10.8081 7.43508ZM12.6091 2.42842C11.2794 1.09872 9.59699 0.259073 7.73978 0L7.57747 1.15802C9.18185 1.38276 10.6364 2.11004 11.7851 3.25558C12.8744 4.34493 13.5892 5.72145 13.8483 7.23531L15.0001 7.03866C14.6973 5.28446 13.8701 3.69257 12.6091 2.42842Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_282">
                              <rect width="15" height="15" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>+088 01718-77 95 97</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="header_top_menu oflow-hd">
                  <ul>
                    <li>
                      <Link to="">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9812 0.625H3.01875C2.71546 0.625166 2.42464 0.745721 2.21018 0.96018C1.99572 1.17464 1.87517 1.46546 1.875 1.76875V13.2312C1.87517 13.5345 1.99572 13.8254 2.21018 14.0398C2.42464 14.2543 2.71546 14.3748 3.01875 14.375H11.9812C12.2845 14.3748 12.5754 14.2543 12.7898 14.0398C13.0043 13.8254 13.1248 13.5345 13.125 13.2312V1.76875C13.1248 1.46546 13.0043 1.17464 12.7898 0.96018C12.5754 0.745721 12.2845 0.625166 11.9812 0.625ZM4.375 3.75H7.5C7.66576 3.75 7.82473 3.81585 7.94194 3.93306C8.05915 4.05027 8.125 4.20924 8.125 4.375C8.125 4.54076 8.05915 4.69973 7.94194 4.81694C7.82473 4.93415 7.66576 5 7.5 5H4.375C4.20924 5 4.05027 4.93415 3.93306 4.81694C3.81585 4.69973 3.75 4.54076 3.75 4.375C3.75 4.20924 3.81585 4.05027 3.93306 3.93306C4.05027 3.81585 4.20924 3.75 4.375 3.75ZM10.625 11.25H4.375C4.20924 11.25 4.05027 11.1842 3.93306 11.0669C3.81585 10.9497 3.75 10.7908 3.75 10.625C3.75 10.4592 3.81585 10.3003 3.93306 10.1831C4.05027 10.0658 4.20924 10 4.375 10H10.625C10.7908 10 10.9497 10.0658 11.0669 10.1831C11.1842 10.3003 11.25 10.4592 11.25 10.625C11.25 10.7908 11.1842 10.9497 11.0669 11.0669C10.9497 11.1842 10.7908 11.25 10.625 11.25ZM10.625 8.125H4.375C4.20924 8.125 4.05027 8.05915 3.93306 7.94194C3.81585 7.82473 3.75 7.66576 3.75 7.5C3.75 7.33424 3.81585 7.17527 3.93306 7.05806C4.05027 6.94085 4.20924 6.875 4.375 6.875H10.625C10.7908 6.875 10.9497 6.94085 11.0669 7.05806C11.1842 7.17527 11.25 7.33424 11.25 7.5C11.25 7.66576 11.1842 7.82473 11.0669 7.94194C10.9497 8.05915 10.7908 8.125 10.625 8.125Z"
                            fill="black"
                          />
                        </svg>
                        <span>List Your Event</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_258)">
                            <path
                              d="M0.506058 5.6422C1.85701 6.44552 5.17755 8.41676 6.83548 9.36723C7.03856 9.48375 7.26896 9.54534 7.5 9.54534C7.73104 9.54534 7.96144 9.48375 8.16519 9.36691C9.82245 8.41676 13.143 6.44555 14.494 5.64188C14.8109 5.45278 15 5.12787 15 4.77263C15 4.41739 14.8109 4.09249 14.494 3.90306C13.4499 3.28217 9.90967 1.17845 8.16452 0.178035C7.95927 0.0601659 7.73152 -0.00106979 7.49987 -0.000110982C7.27535 0.000815863 7.04712 0.0602299 6.83216 0.179985C6.83216 0.179985 2.08607 2.96752 0.506697 3.90267C0.189108 4.09114 0 4.41605 0 4.77263C0 5.12784 0.189108 5.45278 0.506058 5.6422Z"
                              fill="black"
                            />
                            <path
                              d="M14.5059 6.63973C14.4532 6.60712 14.3925 6.58965 14.3305 6.58924C14.2685 6.58883 14.2075 6.60549 14.1544 6.63739C12.3186 7.72705 9.84907 9.18788 8.50406 9.9586C7.89017 10.3102 7.10913 10.3098 6.49655 9.95892C5.13894 9.18056 2.67401 7.72305 0.845635 6.63739C0.737769 6.57248 0.601267 6.57347 0.493401 6.63973C0.184442 6.82916 0 7.15077 0 7.5C0 7.85524 0.189108 8.18014 0.506026 8.36957C1.85701 9.17292 5.17755 11.1441 6.83548 12.0946C7.03856 12.2111 7.26896 12.2727 7.5 12.2727C7.73104 12.2727 7.96144 12.2111 8.16519 12.0943C9.82245 11.1441 13.143 9.17292 14.494 8.36925C14.8109 8.18014 15 7.85524 15 7.5C15 7.15077 14.8156 6.82916 14.5059 6.63973Z"
                              fill="black"
                            />
                            <path
                              d="M14.5059 9.36702C14.3987 9.30144 14.2629 9.29942 14.1544 9.36469C12.3186 10.4543 9.84907 11.9152 8.50406 12.6859C7.89017 13.0375 7.10913 13.0371 6.49655 12.6862C5.13894 11.9079 2.67401 10.4503 0.845635 9.36469C0.737769 9.29977 0.601267 9.30144 0.493401 9.36702C0.184442 9.55645 0 9.87803 0 10.2273C0 10.5825 0.189108 10.9074 0.506026 11.0968C1.85701 11.9002 5.17755 13.8714 6.83548 14.8219C7.03856 14.9384 7.26896 15 7.5 15C7.73104 15 7.96144 14.9384 8.16519 14.8216C9.82245 13.8714 13.143 11.9002 14.494 11.0965C14.8109 10.9074 15 10.5825 15 10.2273C15 9.87803 14.8156 9.55645 14.5059 9.36702Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_258">
                              <rect width="15" height="15" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Organizer's Panel</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom_area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header_bottom_logo floatleft oflow-hd">
                  <Link to="">
                    <img
                      src={require("./../../assets/images/logo.png")}
                      alt="img"
                    />
                  </Link>
                </div>
                {user ? (
                  <div className="header_userD floatright oflow-hd">
                    <Link
                      className="usermenubtn"
                      to="#"
                      onClick={openUserMenu}
                      role="button"
                    >
                      <span>Hello, Fahim</span>
                      <img
                        src={require("./../../assets/images/user.png")}
                        alt="img"
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="header_bottom_btn floatright oflow-hd">
                    <Link className="loginbtn" to="" onClick={openLoginModal}>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_300_12)">
                          <path
                            d="M8.29201 8.18895C9.417 8.18895 10.3912 7.78544 11.1871 6.98933C11.9831 6.19339 12.3866 5.21948 12.3866 4.09436C12.3866 2.96958 11.9831 1.99557 11.187 1.19933C10.3909 0.403483 9.41686 0 8.29201 0C7.16686 0 6.19292 0.403483 5.39698 1.19946C4.60104 1.99543 4.19739 2.96948 4.19739 4.09436C4.19739 5.21948 4.601 6.19352 5.39711 6.9895C6.19322 7.78534 7.16726 8.18895 8.29201 8.18895ZM15.4565 13.0721C15.4335 12.7409 15.3871 12.3795 15.3187 11.998C15.2497 11.6135 15.1609 11.2501 15.0545 10.9179C14.9447 10.5746 14.7953 10.2356 14.6106 9.9107C14.4189 9.57349 14.1937 9.27984 13.941 9.03822C13.6768 8.78545 13.3534 8.58221 12.9793 8.43393C12.6066 8.2865 12.1935 8.2118 11.7516 8.2118C11.578 8.2118 11.4102 8.28298 11.0861 8.49402C10.8557 8.64405 10.6246 8.79302 10.3929 8.94094C10.1702 9.08285 9.86849 9.21579 9.49585 9.33615C9.13231 9.45379 8.7632 9.51345 8.39886 9.51345C8.03456 9.51345 7.66554 9.45379 7.3016 9.33615C6.9294 9.21589 6.62771 9.08298 6.40525 8.94107C6.14726 8.77622 5.91385 8.62577 5.71138 8.49386C5.38765 8.28285 5.21967 8.21163 5.04615 8.21163C4.60412 8.21163 4.19118 8.28647 3.81854 8.43409C3.44474 8.58208 3.12114 8.78531 2.85668 9.03835C2.60417 9.2801 2.37889 9.57359 2.18744 9.9107C2.0029 10.2356 1.85349 10.5745 1.74349 10.9181C1.63724 11.2502 1.54842 11.6135 1.47942 11.998C1.41106 12.379 1.36464 12.7405 1.34166 13.0725C1.31881 13.4066 1.30748 13.7415 1.3077 14.0764C1.3077 14.9638 1.58979 15.6822 2.14607 16.212C2.69548 16.7348 3.42243 17.0001 4.30646 17.0001H12.4921C13.3761 17.0001 14.1028 16.735 14.6523 16.212C15.2087 15.6826 15.4908 14.9641 15.4908 14.0762C15.4907 13.7337 15.4792 13.3958 15.4565 13.0721Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_300_12">
                            <rect width="17" height="17" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      <span>Sign In</span>
                    </Link>
                  </div>
                )}
                <div className="header_bottom_menu floatright oflow-hd">
                  <ul>
                    <li className="menu_item_active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Explore Events</Link>
                    </li>
                    <li>
                      <Link to="/">Partnership</Link>
                    </li>
                    <li>
                      <Link to="/">Who We Are</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
