// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());

// Sample data
const newsData = [
  {
    id: 1,
    title: "Transforming Communities Through Play",
    description: "Our NGO uses sports to drive positive change.",
    photourl: "https://www.adobe.com/uk/products/illustrator/media_16249e7e9719df685a92c2158f8413e738aa2f4f0.jpeg?width=750&format=jpeg&optimize=medium",
    articlelink: "https://www.geeksforgeeks.org/blog-app-using-reactjs/"
  },
  {
    id: 2,
    title: "Empowering Youth Through Sports",
    description: "Join us in empowering the next generation.",
    photourl: "https://img.freepik.com/free-vector/graphic-designer-sale-banner-template_23-2150837586.jpg",
    articlelink: "https://www.google.com/search?sca_esv=ece89a6f5dd32326&rlz=1C1CHBF_enNP1121NP1121&sxsrf=ADLYWIKaaqjUYdir5ewza-4ziXGUu0rihQ:1724549130921&q=banners&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2jonhbbcqQszH7grY4dWHpFL1N9XzOZiS1X3ZYaIeHEN89NyWmsA2yMMQ8AJ0f-tC4NRjBO85RpCbWSfetJ2OMk2oUcW2YMtyk8DV0CWYVBYsuWs7Bk&sa=X&sqi=2&ved=2ahUKEwjtp-KS_o6IAxXxU2wGHWqpDH0QtKgLegQIGBAB&biw=1536&bih=695&dpr=1.25#imgrc=KbzGo_xVMfMjuM&imgdii=0O2ie9caLEKIzM"
  },
  {
    id: 3,
    title: "Empowering Youth Through Sports",
    description: "Join us in empowering the next generation.",
    photourl: "https://img.freepik.com/free-psd/shopping-ad-template-banner_23-2148754552.jpg",
    articlelink: "https://thisweekinreact.com/"
  },
  {
    id: 4,
    title: "Empowering Youth Through Sports",
    description: "Join us in empowering the next generation.",
    photourl: "https://img.freepik.com/free-psd/shopping-ad-template-banner_23-2148754552.jpg",
    articlelink: "https://react.dev/blog"
  },
  {
    id: 5,
    title: "Empowering Youth Through Sports",
    description: "Join us in empowering the next generation.",
    photourl: "https://img.freepik.com/free-psd/shopping-ad-template-banner_23-2148754552.jpg",
    articlelink: "https://www.geeksforgeeks.org/news-app-using-react/"
  },
  {
    id: 6,
    title: "Empowering Youth Through Sports",
    description: "Join us in empowering the next generation.",
    photourl: "https://img.freepik.com/free-psd/shopping-ad-template-banner_23-2148754552.jpg",
    articlelink: "https://www.cosmicjs.com/templates/react-news-app"
  },
  {
    id: 7,
    title: "Empowering Youth Through Sports",
    description: "Join us in empowering the next generation.",
    photourl: "https://img.freepik.com/free-psd/shopping-ad-template-banner_23-2148754552.jpg",
    articlelink: "https://www.youtube.com/watch?v=rFmL-rF0l5w"
  },
];

// Route to get news
app.get('/news', (req, res) => {
  res.json(newsData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
