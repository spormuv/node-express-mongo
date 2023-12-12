require('dotenv').config({ path: './config.env' });
const app = require('./app');

// console.log(app.get('env'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}...`);
});
