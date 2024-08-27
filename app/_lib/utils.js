/////////////////////////////////////
/////////////////////////////////////
// CONVERT DATE & TIME TO UNIX TIMESTAMP(SECONDS)
export function parseDateToTimestamp(dateStr) {
  // Spliting the date string into parts (assuming the format is 'YYYY-MM-DD')
  const [year, month, day] = dateStr.split("-").map(Number);

  // Creating a new Date object with the default time set to 11:00 AM
  const date = new Date(year, month - 1, day, 11, 0, 0); // 11:00 AM

  // Get previous day
  date.setDate(date.getDate() - 1);

  // Get the Unix timestamp in seconds (divide by 1000 to convert from milliseconds)
  const timestamp = Math.floor(date.getTime() / 1000);

  return timestamp;
}

/////////////////////////////////////
/////////////////////////////////////
// CONVERT UNIX TIMESTAMP(SECONDS) TO DATE & TIME STRING
export function timestampToDateTimeString(unixTimestamp) {
  // Convert the Unix timestamp from seconds to milliseconds
  const date = new Date(unixTimestamp * 1000);

  // Extract date components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");

  // Extract time components
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Format the date and time string
  const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return dateTimeString;
}
