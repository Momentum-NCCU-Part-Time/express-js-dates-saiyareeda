const express = require('express');
const dayjs = require('dayjs');

const app = express();
const port = 3000;

// Middleware to set JSON response and handle 404 errors
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// Endpoint to get the current date
app.get('/api/dates/today', (req, res) => {
  const currentDate = dayjs().format('dddd MMM DD, YYYY');
  res.status(200).json({ date: currentDate });
});

// Endpoint to get the date of the next day
app.get('/api/dates/tomorrow', (req, res) => {
  const nextDate = dayjs().add(1, 'day').format('dddd MMM DD, YYYY');
  res.status(200).json({ date: nextDate });
});

// Endpoint to get the date of the previous day
app.get('/api/dates/yesterday', (req, res) => {
  const prevDate = dayjs().subtract(1, 'day').format('dddd MMM DD, YYYY');
  res.status(200).json({ date: prevDate });
});

// Endpoint to get the day of the week for a specific date
app.get('/api/day-of-week/:year/:month/:day', (req, res) => {
  const { year, month, day } = req.params;
  const inputDate = dayjs(`${year}-${month}-${day}`);
  const dayOfWeek = inputDate.format('dddd');
  res.status(200).json({ dayOfWeek });
});

// Endpoint to get the current time
app.get('/api/current-time', (req, res) => {
  let format = req.query.format || '24';
  format = format === '12' ? 'h:mm:ss A' : 'HH:mm:ss';
  const currentTime = dayjs().format(format);
  res.status(200).json({ time: currentTime });
});

// Endpoint to get the current timestamp
app.get('/api/timestamp', (req, res) => {
  let format = req.query.format || 'milliseconds';
  format = format === 'seconds' ? 'X' : 'x';
  const currentTimestamp = dayjs().format(format);
  res.status(200).json({ timestamp: currentTimestamp });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});