
# Project-Placeholderr
JSON Placeholder rest API built with Node + Express.

## API Endpoints:
This is the list of all the currently available endpoints along with their currently supported methods :

- [Comments](https://placeholderr.onrender.com/comments) (get) 
- [Posts](https://placeholderr.onrender.com/posts) (get, post)
- [Tweets](https://placeholderr.onrender.com/tweets) (get)
- [Todos](https://placeholderr.onrender.com/todos) (get)
- [Images](https://placeholderr.onrender.com/images) (get)
- [Images from Unsplash](https://placeholderr.onrender.com/unsplash-images) (get)
- [Covid data -World](https://placeholderr.onrender.com/covid-world) (get)
- [Covid data -India](https://placeholderr.onrender.com/covid-india) (get)
- [Covid data -USA](https://placeholderr.onrender.com/covid-usa) (get)
- [Mars Images from NASA](https://placeholderr.onrender.com/nasa-mars) (get)
- [APOD](https://placeholderr.onrender.com/nasa-apod) (Astronomy Picture of the Day) by NASA (get)
- [Random Github profiles](https://placeholderr.onrender.com/github-profiles/) (get)

## How to use:

You can easily call these API via Fetch, Axios or any other language specific tool/method. 
Here is an example in JS (using fetch):
```
fetch("https://placeholderr.onrender.com/posts")
.then((response) =>  response.json())
.then((data) =>  console.log(data));
```
\
If you want any **specific number of comments/posts/todos/tweets or images** just specify the number here:
```
fetch(`https://placeholderr.onrender.com/nasa-mars/${HERE}`)
.then((response) =>  response.json())
.then((data) =>  console.log(data));
```
\
In **Covid data -world** API specify the country like this to get data about a specific country:
```
fetch(`https://placeholderr.onrender.com/covid-world/${"denmark"}`)
.then((response) =>  response.json())
.then((data) =>  console.log(data));
```



## Copyright
The data in these endpoints is gathered from various sources like **NASA**, **JSONPlaceholder**,
**Unsplash** and **Covid-19 India** and this data is free to use under The MIT License.


## Creator :
This rest API and this documentation is hand coded by [**Devang Saklani**](https://devang-saklani.web.app/)

