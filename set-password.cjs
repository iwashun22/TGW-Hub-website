const fs = require('fs');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const password = process.argv[2];

if(!password) {
  console.error("No password was provided.");
  process.exit();
}

const hash = bcrypt.hashSync(password, salt);

fs.writeFileSync('./passwd', hash, 'utf-8');