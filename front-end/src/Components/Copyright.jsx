import React from "react";
import Fish from "../Assets/Fish-2.svg";

function Section3() {
  return (
    <section className="copyright-section">
      <div className="content">
        <h2>Copyright</h2>
        <p className="info">
          The JSON data used in these APIs is taken from various sources like
          NASA, JSONPlaceholder, Unsplash, Apify etc..
          <br />
          We do not pretend to own any of this Information and Images.
        </p>
        <section className="attribution">
          <span className="head">Our Sources:</span>
          <ul>
            <a href="https://api.nasa.gov/" target="_blank">
              <li>
                NASA
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.20903 10.8327H3.25069C2.96337 10.8327 2.68782 10.7185 2.48466 10.5154C2.28149 10.3122 2.16736 10.0367 2.16736 9.74935V3.79102C2.16736 3.5037 2.28149 3.22815 2.48466 3.02498C2.68782 2.82182 2.96337 2.70768 3.25069 2.70768H5.41736V3.79102H3.25069V9.74935H9.20903V7.58268H10.2924V9.74935C10.2924 10.0367 10.1782 10.3122 9.97506 10.5154C9.77189 10.7185 9.49634 10.8327 9.20903 10.8327ZM6.33819 7.42397L5.57444 6.65806L8.98315 3.24935H7.04236V2.16602H10.834V5.95768H9.75069V4.01581L6.33819 7.42397Z"
                    fill="#5E5E5E"
                  />
                </svg>
              </li>
            </a>
            <a href="https://jsonplaceholder.typicode.com/" target="_blank">
              <li>
                JSONPlaceholder
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.20903 10.8327H3.25069C2.96337 10.8327 2.68782 10.7185 2.48466 10.5154C2.28149 10.3122 2.16736 10.0367 2.16736 9.74935V3.79102C2.16736 3.5037 2.28149 3.22815 2.48466 3.02498C2.68782 2.82182 2.96337 2.70768 3.25069 2.70768H5.41736V3.79102H3.25069V9.74935H9.20903V7.58268H10.2924V9.74935C10.2924 10.0367 10.1782 10.3122 9.97506 10.5154C9.77189 10.7185 9.49634 10.8327 9.20903 10.8327ZM6.33819 7.42397L5.57444 6.65806L8.98315 3.24935H7.04236V2.16602H10.834V5.95768H9.75069V4.01581L6.33819 7.42397Z"
                    fill="#5E5E5E"
                  />
                </svg>
              </li>
            </a>
            <a href="https://source.unsplash.com/">
              <li>
                Unsplash
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.20903 10.8327H3.25069C2.96337 10.8327 2.68782 10.7185 2.48466 10.5154C2.28149 10.3122 2.16736 10.0367 2.16736 9.74935V3.79102C2.16736 3.5037 2.28149 3.22815 2.48466 3.02498C2.68782 2.82182 2.96337 2.70768 3.25069 2.70768H5.41736V3.79102H3.25069V9.74935H9.20903V7.58268H10.2924V9.74935C10.2924 10.0367 10.1782 10.3122 9.97506 10.5154C9.77189 10.7185 9.49634 10.8327 9.20903 10.8327ZM6.33819 7.42397L5.57444 6.65806L8.98315 3.24935H7.04236V2.16602H10.834V5.95768H9.75069V4.01581L6.33819 7.42397Z"
                    fill="#5E5E5E"
                  />
                </svg>
              </li>
            </a>
            <a href="https://www.covid19india.org/">
              <li>
                Covid-19 India
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.20903 10.8327H3.25069C2.96337 10.8327 2.68782 10.7185 2.48466 10.5154C2.28149 10.3122 2.16736 10.0367 2.16736 9.74935V3.79102C2.16736 3.5037 2.28149 3.22815 2.48466 3.02498C2.68782 2.82182 2.96337 2.70768 3.25069 2.70768H5.41736V3.79102H3.25069V9.74935H9.20903V7.58268H10.2924V9.74935C10.2924 10.0367 10.1782 10.3122 9.97506 10.5154C9.77189 10.7185 9.49634 10.8327 9.20903 10.8327ZM6.33819 7.42397L5.57444 6.65806L8.98315 3.24935H7.04236V2.16602H10.834V5.95768H9.75069V4.01581L6.33819 7.42397Z"
                    fill="#5E5E5E"
                  />
                </svg>
              </li>
            </a>
          </ul>
        </section>
        <div className="Fish-illustration">
          <img src={Fish} alt="Fish illustration" />
        </div>
      </div>
    </section>
  );
}

export default Section3;
