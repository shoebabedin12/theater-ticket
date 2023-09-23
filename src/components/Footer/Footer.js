import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_area oflow-hd">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer_widget oflow-hd">
                <div className="footer_widget_img oflow-hd">
                  <Link to="">
                    <img
                      src={require("./../../assets/images/logo-footer.png")}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="footer_widget_des oflow-hd">
                  <p>
                    Tellus sed adipiscing blandit sodales nullam tincidunt
                    fringilla vivamus. Magna nam quisque ut aliquam sit sed enim
                    egestas.
                  </p>
                </div>
                <div className="footer_widget_copyright oflow-hd desktopview">
                  © 2023 TicketSystem. All rights reserved
                </div>
              </div>
            </div>
            <div className="col-md-4 col-center">
              <div className="footer_widget oflow-hd">
                <div className="footer_widget1 oflow-hd">
                  <div className="footer_widget_title oflow-hd">
                    <h2>Address</h2>
                  </div>
                  <div className="footer_widget_location oflow-hd">
                    <p>
                      Office :#9,Khan Jahan Ali Road,TootPara
                      <br />
                      (Central Road More) Khulna,9100
                    </p>
                  </div>
                </div>
                <div className="footer_widget2 oflow-hd">
                  <Link to="tel:+088 01718-779597">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_229)">
                        <path
                          d="M12.9248 11.2458C12.3694 10.6975 11.676 10.6975 11.1242 11.2458C10.7032 11.6633 10.2822 12.0807 9.86835 12.5052C9.75515 12.6219 9.65963 12.6467 9.52167 12.5689C9.24928 12.4203 8.9592 12.3 8.69742 12.1373C7.47697 11.3697 6.45462 10.3827 5.54901 9.27189C5.09974 8.72004 4.7 8.12927 4.42054 7.46421C4.36394 7.32978 4.37455 7.24134 4.48421 7.13168C4.90518 6.72486 5.31553 6.30743 5.72943 5.89C6.30605 5.30985 6.30605 4.63064 5.72589 4.04695C5.3969 3.71442 5.06791 3.38896 4.73892 3.05643C4.39931 2.71683 4.06325 2.37369 3.7201 2.03762C3.16471 1.49638 2.47135 1.49638 1.9195 2.04116C1.49499 2.45859 1.08817 2.88663 0.656595 3.29699C0.256853 3.6755 0.0552129 4.13892 0.0127624 4.68017C-0.0544508 5.56101 0.161339 6.39233 0.465568 7.20243C1.08817 8.87922 2.03624 10.3685 3.18594 11.734C4.73892 13.5806 6.59259 15.0416 8.7611 16.0958C9.73746 16.5698 10.7492 16.9342 11.8494 16.9943C12.6064 17.0368 13.2644 16.8458 13.7915 16.255C14.1523 15.8517 14.5591 15.4838 14.9412 15.0982C15.5072 14.5251 15.5107 13.8318 14.9483 13.2658C14.2761 12.5901 13.6005 11.918 12.9248 11.2458ZM12.2491 8.42642L13.5545 8.20355C13.3493 7.00433 12.7833 5.9183 11.9237 5.05514C11.0145 4.146 9.86481 3.57292 8.59837 3.39604L8.41442 4.70847C9.39432 4.84643 10.2858 5.28862 10.9897 5.99259C11.6548 6.65765 12.0899 7.49958 12.2491 8.42642ZM14.2903 2.75221C12.7833 1.24521 10.8765 0.293616 8.77171 0L8.58776 1.31243C10.4061 1.56713 12.0545 2.39138 13.3564 3.68965C14.591 4.92426 15.4011 6.48431 15.6947 8.20002L17 7.97715C16.6569 5.98905 15.7194 4.18491 14.2903 2.75221Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_229">
                          <rect width="17" height="17" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>+088 01718-77 95 97</span>
                  </Link>
                </div>
                <div className="footer_widget3 oflow-hd">
                  <div className="footer_widget_title oflow-hd">
                    <h2>Follow Us</h2>
                  </div>
                  <div className="footer_social oflow-hd">
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  col-center">
              <div className="footer_widget oflow-hd">
                <div className="footer_widget_title oflow-hd">
                  <h2>Support</h2>
                </div>
                <div className="footer_widget_menu oflow-hd">
                  <ul>
                    <li>
                      <Link to="">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="">Disclaimer</Link>
                    </li>
                    <li>
                      <Link to="">Sitemap</Link>
                    </li>
                    <li>
                      <Link to="">Terms and Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer_widget_copyright oflow-hd mobileview">
              © 2023 TicketSystem. All rights reserved
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
