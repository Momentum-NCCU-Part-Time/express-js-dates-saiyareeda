# Express API: Dates and Times 📆

For this project, you will build a small API that returns data about dates. Familiarity working with dates, `Date` objects in JavaScript, and with date formatting libraries like [Day.js](https://day.js.org/) is essential for a developer.

## Getting Started

You'll need to create a new Express app from scratch for this project, beginning with installing `express` as a dependency. You'll also need to install `dayjs` as a dependency.

You'll need to read the [Day.js documentation](https://day.js.org/docs/en/display/format) to learn how to use the library to make these endpoints work.

## Requirements: Endpoints

Your API should have the following endpoints:

- `GET /api/dates/today`: Returns the current date in the format `Tuesday Jan 16, 2024`.
- `GET /api/dates/tomorrow`: Returns the date of the next day in the format `Wednesday Jan 17, 2024`.
- `GET /api/dates/yesterday`: Returns the date of the previous day in the format `Monday Jan 15, 2024`.
- `GET /api/day-of-week/:year/:month/:day`: Returns the day of the week for the date provided in the URL as a parameter, e.g. `/api/day-of-week/2024/1/16`.
- `GET /api/current-time`: Returns the current time in the format `19:20:30`. This endpoint should accept a query parameter called `format` that can be used to change the format of the time. For example, `/api/current-time?format=12` should return the time in the format `7:20:30 PM`. The default format should be `24`.
- `GET /api/timestamp`: Returns [the current timestamp in milliseconds](https://en.wikipedia.org/wiki/Unix_time). This endpoint should accept a query parameter called `format` that can be used to change the format of the timestamp. For example, `/api/timestamp?format=seconds` should return the timestamp in seconds. The default format should be `milliseconds`.

Each endpoint should return JSON data in the following format:

```json
{
  "date": "Tuesday Jan 16, 2024"
}
```

Successful responses should be sent with a `200` status code.

### 404s

If a user attempts to access an endpoint that does not exist, your API should return a JSON response in the following format:

```json
{
  "error": "Not found"
}
```

The response should also have a status code of `404`.

## 🌶️ Spicy Options

- Return the current date in the format `2024-01-16` for the `today`, `tomorrow`, and `yesterday` endpoints when a query pa.
- Add an endpoint that returns the current date in the format `2024-01-16T19:20:30.000Z`. This is the format used by the JavaScript `Date` object and is called [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
- Add the ability to accept a query parameter called `timezone` to the `current-time` endpoint. Return the current date and time in the timezone provided. For example, `/api/current-time?timezone=America/New_York` should return the current time in New York. You can use the [Day.js timezone plugin](https://day.js.org/docs/en/plugin/timezone) to help with this.
- Look through the Day.js library. What other features does it have? Add a new endpoint that uses one of these features.

## References that may help

- [Day.js documentation](https://day.js.org/docs/en/display/format) _If you open the console on this page, you can run the methods in the documentation to see what they return._
- [Express documentation](https://expressjs.com/en/4x/api.html)
- [MDN JS Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [REST Client extension for VS Codium](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) _This makes it super easy to test your endpoints right in VS Codium._
