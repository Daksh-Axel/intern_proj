const bcrypt = require('bcrypt');

// Assuming you have a plain-text password
const plainPassword = 'admin123';

// Hash the password with a cost factor of 10
bcrypt.hash(plainPassword, 10, function(err, hash) {
    if (err) {
        // Handle error
        console.error('Error hashing password:', err);
        return;
    }

    // Now 'hash' contains the hashed password
    console.log('Hashed password:', hash);

    // Here you would typically insert the hashed password into your MongoDB record
    // For example, if you have a 'users' collection:
    // db.users.insertOne({ username: 'example_user', password: hash });
});
