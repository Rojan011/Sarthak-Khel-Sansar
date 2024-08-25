// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

const PORT = 8000;
const port = 8002;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Set up CORS with credentials
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true
}));

// Middleware to parse JSON requests
app.use(express.json());

// Example in-memory user data store
let users = [];

// Registration endpoint
app.post('/user/register', async (req, res) => {
  const { username, full_name, address, city, state, email, phone_number, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Add user registration logic here (e.g., save to database)
  // For now, just store the user in memory
  users.push({ username, full_name, address, city, state, email, phone_number, password });
  res.send({ message: 'success' });
});

// Login endpoint
app.post('/user/login', async (req, res) => {
  const { username, password } = req.body;
  // Add login logic here (e.g., validate credentials)
  const user = users.find(u => u.username === username);
  if (user) {
    // Compare hashed password
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.send({ message: 'success', user });
    } else {
      res.send({ message: 'fail' });
    }
  } else {
    res.send({ message: 'fail' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


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

// Route to handle contact form submissions
app.post("/contactus/add", (req, res) => {
  const { name, email, message } = req.body;

  // Configure the email transport using your Gmail credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sandeshkoirala1212@gmail.com", // Your Gmail address
      pass: "nnmu enuh xkyb iffn", // Your Gmail password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: "sandeshkoirala1212@gmail.com", // Your Gmail address to receive the email
    subject: `New contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Failed to send email.");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully!");
  });
});

// Start the server
app.listen(8001, () => {
  console.log("Server is running on port 8001");
});