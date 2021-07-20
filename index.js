const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const { type } = require("os");
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./front-end/build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./front-end/build", "index.html"));
});

app.get("/comments", (req, res) => {
  fs.readFile("./Database/Comments.json", (err, data) => {
    let obj = JSON.parse(data);
    res.send(obj);
  });
});

app.get("/comments/:n", (req, res) => {
  let num = parseInt(req.params.n);
  fs.readFile("./Database/Comments.json", (err, data) => {
    let obj = JSON.parse(data).slice(0, num);
    res.send(obj);
  });
});

app.get("/tweets", (req, res) => {
  fs.readFile("./Database/Tweets.json", (err, data) => {
    let obj = JSON.parse(data);
    res.send(obj);
  });
});

app.get("/tweets/:n", (req, res) => {
  let num = parseInt(req.params.n);
  fs.readFile("./Database/Tweets.json", (err, data) => {
    let obj = JSON.parse(data).slice(0, num);
    res.send(obj);
  });
});

app.get("/todos", (req, res) => {
  fs.readFile("./Database/todos.json", (err, data) => {
    let obj = JSON.parse(data);
    res.send(obj);
  });
});

app.get("/todos/:n", (req, res) => {
  let num = parseInt(req.params.n);
  fs.readFile("./Database/todos.json", (err, data) => {
    let obj = JSON.parse(data).slice(0, num);
    res.send(obj);
  });
});


app.get("/posts", (req, res) => {
  fs.readFile("./Database/posts.json", (err, data) => {
    let obj = JSON.parse(data);
    res.send(obj);
  });
});

app.get("/posts/:n", (req, res) => {
  let num = parseInt(req.params.n);
  fs.readFile("./Database/posts.json", (err, data) => {
    let obj = JSON.parse(data).slice(0, num);
    res.send(obj);
  });
});

app.get("/images", (req, res) => {
  fs.readFile("./Database/Placerholder-images.json", (err, data) => {
    let obj = JSON.parse(data);
    res.send(obj);
  });
});

app.get("/images/:n", (req, res) => {
  let num = parseInt(req.params.n);
  fs.readFile("./Database/Placerholder-images.json", (err, data) => {
    let obj = JSON.parse(data).slice(0, num);
    res.send(obj);
  });
});

app.get("/unsplash-images", (req, res) => {
  fs.readFile("./Database/Images.json", (err, data) => {
    let obj = JSON.parse(data);
    res.send(obj);
  });
});

app.get("/unsplash-images/:n", (req, res) => {
  let num = parseInt(req.params.n);
  fs.readFile("./Database/Images.json", (err, data) => {
    let obj = JSON.parse(data).slice(0, num);
    res.send(obj);
  });
});

app.get("/covid-world", (req, res) => {
  fetch(
    "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
  )
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.get("/covid-world/:n", (req, res) => {
  const q = req.params.n.toUpperCase();
  let result;
  fetch(
    "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
  )
    .then((res) => res.json())
    .then((data) => {
      result = data.filter((e) => e.country.toUpperCase() === q )
      res.send(result);
    });
});

app.get("/covid-usa", (req, res) => {
  fetch(
    "https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true"
  )
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.get("/covid-india", (req, res) => {
  fetch("https://api.covid19india.org/v4/min/data.min.json")
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.get("/nasa-mars", (req, res) => {
  fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XPqgmvb2EVjO53epzVxa0JbQH6y8X1dIefEfK9kP"
  )
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.get("/nasa-apod", (req, res) => {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=XPqgmvb2EVjO53epzVxa0JbQH6y8X1dIefEfK9kP"
  )
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.get("/github-profiles", (req, res) => {
  fs.readFile("./Database/GithubProfiles.json", (err, data) => {
    let obj = JSON.parse(data);
    res.send(obj);
  });
});

app.get("/github-profiles/:n", (req, res) => {
  let num = parseInt(req.params.n);
  fs.readFile("./Database/GithubProfiles.json", (err, data) => {
    let obj = JSON.parse(data).slice(0, num);
    res.send(obj);
  });
});

app.post("/posts", (req, res) => {
  let result = validatePost(req);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }
  let obj;
  fs.readFile("./Database/posts.json", (err, data) => {
    obj = JSON.parse(data);
    let newItem = {
      userId: Math.ceil((obj.length + 1) / 10),
      id: obj.length + 1,
      title: result.value.title,
      body: result.value.body,
    };
    obj.push(newItem);
    res.send(newItem);
  });
});

function validatePost(req) {
  const schema = Joi.object({
    title: Joi.string().min(10).required(),
    body: Joi.string().min(20).required(),
  });
  return schema.validate(req.body);
}

app.listen(process.env.PORT || 5000);
