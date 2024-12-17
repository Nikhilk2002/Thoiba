const express = require('express');
const dotenv = require('dotenv');
const { dbConnect } = require('./Config/dbConnection'); // Import the dbConnect function

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to the database
dbConnect();

// Routes
app.get('/', (req, res) => {
  res.send('Server and Database are working fine!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
