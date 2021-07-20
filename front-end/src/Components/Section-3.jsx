import React from "react";

function Section3() {
  return (
    <section className="other-api-services">
      <h3 className="head">Other useful JSON files</h3>
      <ul>
        <a
          href="/unsplash-images"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="unsplash-images API Endpoint"
        >
          <li className="item item-1"></li>
        </a>
        <a
          href="/todos"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="todos API Endpoint"
        >
          <li className="item item-2"></li>
        </a>
        <a
          href="/tweets"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="tweets API Endpoint"
        >
          <li className="item item-3"></li>
        </a>
        <a
          href="/nasa-apod"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="nasa apod API Endpoint"
        >
          <li className="item item-4"></li>
        </a>
        <a
          href="/nasa-mars"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="nasa mars API Endpoint"
        >
          <li className="item item-5"></li>
        </a>
        <a
          href="/covid-world"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="covid world API Endpoint"
        >
          <li className="item item-6"></li>
        </a>
        <a
          href="/covid-india"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="covid india API Endpoint"
        >
          <li className="item item-7"></li>
        </a>
        <a
          href="/covid-usa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="covid usa API Endpoint"
        >
          <li className="item item-8"></li>
        </a>
      </ul>

      <div className="contact-me">
        Looking for something else?&nbsp;
        <a
          href="mailto:devangsaklani@gmail.com"
          aria-label="Contact me"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}

export default Section3;
