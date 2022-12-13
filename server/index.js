const express = require('express');
let app = express();
console.log('ENV', process.env);
app.use(express.static(__dirname + '/../public/'));
app.listen(3000, () => console.log('Listening on port 3000'));