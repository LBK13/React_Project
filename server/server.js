const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const db = fs.readFileSync(path.join(__dirname, 'db.json'));
const app = express();

app.use(cors());

app.use((req,res) => {
    res.send(db);
});


app.listen(3001, 
    console.log('server on')
);