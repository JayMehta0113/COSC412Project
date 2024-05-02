const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.listen(3000, ()=> console.log('server listening on port 3000'))
app.use(bodyParser.json());
app.use(cors());

const URI = 'mongodb+srv://jaymehta0113:prolink484@prolinkcluster.wkozyum.mongodb.net/?retryWrites=true&w=majority&appName=ProlinkCluster';



    app.post('/api/login', async (req, res) => {
        console.log('login request: '+ req.body);
        
    });
 

