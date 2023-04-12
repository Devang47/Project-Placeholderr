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
                id="Bold"
                enable-background="new 0 0 24 24"
                height="512"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#6D86FF"
              >
                <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
              </svg>
            </button>
          </a>
        </div>
        <div className="Navbar-logo MainNavicon">
          <a href="https://placeholderr.onrender.com/#">Kitatsu</a>
        </div>
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
