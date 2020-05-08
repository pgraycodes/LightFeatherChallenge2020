const express = require('express');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

// Load env vars
dotenv.config({ path: './config/config.env' });

//Route Files
const caesarsRoute = require('./routes/caesarsRoute');

const app = express();

app.use(express.json());
app.use(cookieParser());

//security headers for dns headers etc
app.use(helmet());

//prevent xss attacks injecting html etc
app.use(xss());

//rate limit request
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
});

app.use(limiter);

// prevent http param polution
app.use(hpp());

//enable cors
app.use(cors());

//MOUNT ROUTERS
app.use('/api/encode', caesarsRoute);

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(errorHandler);

const PORT = process.env.PORT || 23456;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
