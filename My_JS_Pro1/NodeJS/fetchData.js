const mysql = require('mysql');

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

  // Optionally, you can write the JSON to a file
  const fs = require('fs');
  fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data written to file data.json');
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
