const express = require('express');
const users = require('./users.json');

const app = express();

app.get('/', (req, res) => {
    res.send(users);
});




const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`) );