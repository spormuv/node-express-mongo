/* eslint-disable import/no-extraneous-dependencies */
// require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Catching Uncaught Exceptions
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));
// .catch(err => console.log('ERROR'));

// console.log(app.get('env'));
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}...`);
});

// Handling Errors Outside Express Unhandled Rejections
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
