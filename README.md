
# Project-Placeholderr
A free JSON Placeholder rest API with many useful endpoints. Manufactured with Node, Express, and React and deployed on Heroku.


## Endpoints
This is the list of all the currently available endpoints along with their currently supported methods :

- Comments (get)
- Posts (get, post)
- Tweets (get)
- Todos (get)
- Images (get)
- Images from Unsplash (get)
- Covid data -World (get)
- Covid data -India (get)
- Covid data -USA (get)
- Mars Images from NASA (get)
- APOD (Astronomy Picture of the Day) by NASA (get)
- Random Github profiles (get)

## How to use

You can easily call these API via Fetch, Axios or any other language specific tool/method. 
Here is an example in JS (fetch method):
```
fetch("https://project-placeholderr.herokuapp.com/posts")
.then((response) =>  response.json())
.then((data) =>  console.log(data));
```
\
If you want any **specific number of comments/posts/todos/tweets or images** just specify the number here:
```
fetch(`https://project-placeholderr.herokuapp.com/posts/${HERE}`)
.then((response) =>  response.json())
.then((data) =>  console.log(data));
```
\
In **Covid data -world** API specify the country like this to get data about a specific country:
```
fetch(`https://project-placeholderr.herokuapp.com/covid-world/${"denmark"}`)
.then((response) =>  response.json())
.then((data) =>  console.log(data));
```



## Copyright
The data in these endpoints is gathered from various sources like NASA, JSONPlaceholder,
Unsplash and Covid-19 India and this data is free to use under The MIT License.


## Creator 
This rest API and this documentation is hand coded by [**Devang Saklani**](https://devang-saklani.web.app/)

