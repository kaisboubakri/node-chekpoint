const fs = require('fs');

// Read the content of welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Log the content to the console
  console.log('Content of welcome.txt:', data);
});
