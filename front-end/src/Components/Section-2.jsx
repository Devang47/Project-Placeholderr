import React from "react";
import Images from "../Assets/images-B&W.jpg";
import Posts from "../Assets/posts.jpg";
import Github from "../Assets/github.jpg";
import Comments from "../Assets/Comments.jpg";

function Section2() {
  return (
    <section className="api-services">
      <h3 className="head">Let’s see what we have in stock</h3>
      <div className="api-list">
        <ul>
          <li className="item item-1">
            <div className="display-image">
              <a href="/images" target="_blank" rel="noopener noreferrer">
                <img src={Images} alt="Placeholder images" />
              </a>
            </div>
            <div className="details">
              <h4 className="title">Placeholder Images</h4>
              <p className="details-p">
                A collection of over 200 square Images from placeholder.com in
                different colors. Perfect for placeholders.
              </p>
              <div className="api-call-example">
                <span>
                  fetch(&quot;/images/n&quot;)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;.then((res) =&gt; res.json())
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;.then((data) =&gt; console.log(data)
                  <br />
                  );
                </span>
              </div>
            </div>
          </li>
          <li className="item item-2">
            <div className="display-image">
              <a href="/posts" target="_blank" rel="noopener noreferrer">
                <img src={Posts} alt="" />
              </a>
            </div>
            <div className="details">
              <h4 className="title">Posts</h4>
              <p className="details">
                A beautiful collection of posts. Each post contains a unique-id,
                user-id and title. Taken from jsonplaceholder.
              </p>
              <div className="api-call-example">
                <span>
                  fetch(&#39;https://devangisa.com&#39;)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; .then((res) =&gt; res.json())
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; .then((res) =&gt; console.log(res))
                </span>
              </div>
            </div>
          </li>
          <li className="item item-3">
            <div className="display-image">
              <a href="/comments" target="_blank" rel="noopener noreferrer">
                <img src={Comments} alt="" />
              </a>
            </div>
            <div className="details">
              <h4 className="title">Comments</h4>
              <p className="details">
                A collection of 100 comments with proper email-id and Title.
              </p>
              <div className="api-call-example">
                <span>
                  fetch(&#39;https://devangisa.com&#39;)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; .then((res) =&gt; res.json())
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; .then((res) =&gt; console.log(res))
                </span>
              </div>
            </div>
          </li>
          <li className="item item-4">
            <div className="display-image">
              <a
                href="/github-profiles"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="" />
              </a>
            </div>
            <div className="details">
              <h4 className="title">Github Profiles</h4>
              <p className="details">
                The perfect collection of github profiles with everything will
                you need such as Avatar, id, repos, followers, following etc.
              </p>
              <div className="api-call-example">
                <span>
                  fetch(&#39;https://devangisa.com&#39;)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; .then((res) =&gt; res.json())
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; .then((res) =&gt; console.log(res))
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Section2;
