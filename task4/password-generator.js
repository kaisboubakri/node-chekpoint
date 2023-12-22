const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,  // You can adjust the length as needed
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });

  return password;
}

// Generate and log a random password
const randomPassword = generateRandomPassword();
console.log('Random Password:', randomPassword);
