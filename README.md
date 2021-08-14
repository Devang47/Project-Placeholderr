
# Project-Placeholderr
JSON Placeholder rest API built with Node + Express.

## API Endpoints:
This is the list of all the currently available endpoints along with their currently supported methods :

- [Comments](https://project-placeholderr.herokuapp.com/comments) (get) 
- [Posts](https://project-placeholderr.herokuapp.com/posts) (get, post)
- [Tweets](https://project-placeholderr.herokuapp.com/tweets) (get)
- [Todos](https://project-placeholderr.herokuapp.com/todos) (get)
- [Images](https://project-placeholderr.herokuapp.com/images) (get)
- [Images from Unsplash](https://project-placeholderr.herokuapp.com/unsplash-images) (get)
- [Covid data -World](https://project-placeholderr.herokuapp.com/covid-world) (get)
- [Covid data -India](https://project-placeholderr.herokuapp.com/covid-india) (get)
- [Covid data -USA](https://project-placeholderr.herokuapp.com/covid-usa) (get)
- [Mars Images from NASA](https://project-placeholderr.herokuapp.com/nasa-mars) (get)
- [APOD](https://project-placeholderr.herokuapp.com/nasa-apod) (Astronomy Picture of the Day) by NASA (get)
- [Random Github profiles](https://project-placeholderr.herokuapp.com/github-profiles/) (get)

## How to use:

You can easily call these API via Fetch, Axios or any other language specific tool/method. 
Here is an example in JS (using fetch):
```
fetch("https://project-placeholderr.herokuapp.com/posts")
.then((response) =>  response.json())
.then((data) =>  console.log(data));
```
\
If you want any **specific number of comments/posts/todos/tweets or images** just specify the number here:
```
fetch(`https://project-placeholderr.herokuapp.com/nasa-mars/${HERE}`)
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
The data in these endpoints is gathered from various sources like **NASA**, **JSONPlaceholder**,
**Unsplash** and **Covid-19 India** and this data is free to use under The MIT License.


## Creator :
This rest API and this documentation is hand coded by [**Devang Saklani**](https://devang-saklani.web.app/)

