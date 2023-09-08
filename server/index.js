const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Middlewares
app.use(express.json());
app.use(cors());

// Import routes
const usersRouter = require('./routes/auth');
const transactionsRouter = require('./routes/transactions');

// Routes
app.use('/auth', usersRouter);
app.use('/api/v1', transactionsRouter);



const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  console.log('Connected to MongoDB');

}).catch((error) => console.log(error.message));