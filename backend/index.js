const express = require('express');


const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    
});

app.listen(3000, () => {
    console.log('Backend server is running');
});