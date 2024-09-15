const mysql = require('mysql');
const fs = require('fs');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tas@12345',
  database: 'tas'
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Query to fetch data
const query = 'SELECT * FROM tas_table';

// Execute the query
connection.query(query, (error, results, fields) => {
  if (error) {
    console.error('Error fetching data:', error.stack);
    return;
  }

  // Convert results to JSON
  const jsonData = JSON.stringify(results, null, 2);
  console.log(jsonData);

  // Create HTML content with embedded JSON
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data</title>
  </head>
  <body>
    <h1>JSON Data</h1>
    <pre id="jsonData">${jsonData}</pre>
    <script>
      const data = ${jsonData};
      console.log(data);
    </script>
  </body>
  </html>
  `;

  // Write HTML content to file
  fs.writeFile('data.html', htmlContent, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data written to file data.html');
    }
  });
});

// Close the connection
connection.end(err => {
  if (err) {
    console.error('Error closing the connection:', err.stack);
    return;
  }
  console.log('Connection closed.');
});
