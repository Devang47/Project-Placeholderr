import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="NavWrapper">
        <div className="Navbar-trigger MainNavicon">
          <a
            href="https://github.com/Devang47/Project-Placeholderr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github btn"
          >
            <button name="Github btn">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5023 11.3154L13.2734 0.941554L12.5877 0.245848C12.4315 0.0883782 12.2203 0 12 0C11.7798 0 11.5686 0.0883782 11.4124 0.245848L0.497791 11.3154C0.337715 11.4772 0.211205 11.6699 0.125727 11.8821C0.0402491 12.0943 -0.0024636 12.3217 0.000109727 12.551C0.0106987 13.4965 0.78634 14.2513 1.71817 14.2513H2.84325V23H21.1569V14.2513H22.3058C22.7584 14.2513 23.1846 14.0713 23.505 13.7463C23.6627 13.5868 23.7876 13.3971 23.8726 13.1882C23.9576 12.9794 24.0009 12.7555 24 12.5295C24 12.0728 23.8226 11.6404 23.5023 11.3154V11.3154ZM13.4825 21.066H10.5176V15.5863H13.4825V21.066ZM19.2508 12.3173V21.066H15.1767V14.9416C15.1767 14.348 14.7029 13.8672 14.1178 13.8672H9.88226C9.29722 13.8672 8.82336 14.348 8.82336 14.9416V21.066H4.74926V12.3173H2.20791L12.0027 2.38669L12.6142 3.00718L21.7948 12.3173H19.2508Z"
                  fill="#6D86FF"
                />
              </svg>
            </button>
          </a>
        </div>
        <div className="Navbar-logo MainNavicon">Kitatsu</div>
        <div className="Navbar-right-icon MainNavicon">
          <a
            href="https://devang-saklani.web.app/#Contact"
            aria-label="Contact me btn"
          >
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3333 2.33333H4.66665C3.37981 2.33333 2.33331 3.37983 2.33331 4.66666V18.6667C2.33331 19.9535 3.37981 21 4.66665 21H8.16665V25.3948L15.4898 21H23.3333C24.6201 21 25.6666 19.9535 25.6666 18.6667V4.66666C25.6666 3.37983 24.6201 2.33333 23.3333 2.33333ZM23.3333 18.6667H14.8435L10.5 21.2718V18.6667H4.66665V4.66666H23.3333V18.6667Z"
                fill="white"
              />
              <path
                className="message-content"
                d="M8.16669 8.16667H19.8334V10.5H8.16669V8.16667ZM8.16669 12.8333H16.3334V15.1667H8.16669V12.8333Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
