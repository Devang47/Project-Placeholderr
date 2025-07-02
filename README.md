# Project-Placeholderr
JSON Placeholder REST API built with Node + Express.

A comprehensive placeholder data API that provides various types of mock data for development and testing purposes. Perfect for frontend developers who need reliable test data without setting up complex backends.

## 🚀 Live API
The API is hosted at: **https://placeholderr.onrender.com**

## 📋 Features

- 🗨️ **Social Data**: Comments and tweets
- ✅ **Task Management**: Todo items  
- 📝 **Blog Content**: Posts with CRUD operations
- 🖼️ **Images**: Placeholder images and Unsplash integration
- 🦠 **COVID-19 Data**: Real-time global statistics
- 🚀 **NASA Data**: Mars rover photos and Astronomy Picture of the Day
- 👨‍💻 **Developer Profiles**: Sample GitHub profiles

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn

### Local Development
1. Clone the repository:
```bash
git clone <repository-url>
cd Project-Placeholderr
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
# or
node index.js
```

Server runs on `http://localhost:5000`

## 📚 API Endpoints

### Static Data Endpoints
| Endpoint | Methods | Description |
|----------|---------|-------------|
| [Comments](https://placeholderr.onrender.com/comments) | GET | Mock comment data |
| [Posts](https://placeholderr.onrender.com/posts) | GET, POST | Blog posts with CRUD |
| [Tweets](https://placeholderr.onrender.com/tweets) | GET | Social media tweets |
| [Todos](https://placeholderr.onrender.com/todos) | GET | Task management items |
| [Images](https://placeholderr.onrender.com/images) | GET | Placeholder images |
| [Unsplash Images](https://placeholderr.onrender.com/unsplash-images) | GET | High-quality photos |
| [GitHub Profiles](https://placeholderr.onrender.com/github-profiles) | GET | Developer profiles |

### Live Data Endpoints
| Endpoint | Methods | Description |
|----------|---------|-------------|
| [COVID World](https://placeholderr.onrender.com/covid-world) | GET | Global COVID-19 statistics |
| [COVID India](https://placeholderr.onrender.com/covid-india) | GET | India COVID-19 data |
| [COVID USA](https://placeholderr.onrender.com/covid-usa) | GET | USA COVID-19 statistics |
| [NASA Mars](https://placeholderr.onrender.com/nasa-mars) | GET | Mars rover photos |
| [NASA APOD](https://placeholderr.onrender.com/nasa-apod) | GET | Astronomy Picture of the Day |

## 💡 How to Use

### Basic API Call
You can easily call these APIs via Fetch, Axios, or any HTTP client:

```javascript
fetch("https://placeholderr.onrender.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### Limiting Results
Get a **specific number** of items by adding the count to the URL:

```javascript
// Get first 5 Mars photos
fetch("https://placeholderr.onrender.com/nasa-mars/5")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Get first 10 comments
fetch("https://placeholderr.onrender.com/comments/10")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### Country-Specific COVID Data
For **COVID world data**, specify the country name:

```javascript
fetch("https://placeholderr.onrender.com/covid-world/denmark")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### Creating New Posts
Send POST requests to create new blog posts:

```javascript
fetch("https://placeholderr.onrender.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My New Blog Post Title",
    body: "This is the body content of my blog post with sufficient length."
  })
})
.then((response) => response.json())
.then((data) => console.log(data));
```

## 📝 POST Request Validation

When creating posts, ensure your data meets these requirements:
- **title**: Minimum 10 characters, required
- **body**: Minimum 20 characters, required

## 🔧 Available Endpoints Patterns

Most endpoints support these patterns:
- `GET /endpoint` - Get all items
- `GET /endpoint/:n` - Get first n items
- `GET /covid-world/:country` - Get country-specific data

## 📦 Dependencies

- **express**: Web framework
- **node-fetch**: HTTP client for external APIs
- **cors**: Cross-origin resource sharing
- **joi**: Data validation

## 📄 Copyright

The data in these endpoints is gathered from various sources like **NASA**, **JSONPlaceholder**, **Unsplash** and **COVID-19 India** and this data is free to use under The MIT License.

## 👨‍💻 Creator

This REST API and documentation is hand coded by [**Devang Saklani**](https://devang-saklani.web.app/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes locally
5. Submit a pull request

---

**Happy coding! 🚀**

