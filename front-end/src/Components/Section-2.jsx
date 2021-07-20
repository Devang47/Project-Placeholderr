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
              <a
                href="/images"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Placeholder images"
              >
                <img src={Images} alt="Placeholder images API" />
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
                  fetch(&quot;https://project-placeholderr.herokuapp.com/images&quot;)
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
              <a
                href="/posts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Posts"
              >
                <img src={Posts} alt="Posts API" />
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
                  fetch(&quot;https://project-placeholderr.herokuapp.com/posts&quot;)
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
          <li className="item item-3">
            <div className="display-image">
              <a
                href="/comments"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comments"
              >
                <img src={Comments} alt="Comments API" />
              </a>
            </div>
            <div className="details">
              <h4 className="title">Comments</h4>
              <p className="details">
                A collection of 100 comments with proper email-id and Title.
              </p>
              <div className="api-call-example">
                <span>
                  fetch(&quot;https://project-placeholderr.herokuapp.com/comments&quot;)
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
          <li className="item item-4">
            <div className="display-image">
              <a
                href="/github-profiles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <img src={Github} alt="Github API" />
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
                  fetch(&quot;https://project-placeholderr.herokuapp.com/github-profiles&quot;)
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
        </ul>
      </div>
    </section>
  );
}

export default Section2;
