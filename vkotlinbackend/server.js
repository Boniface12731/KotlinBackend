const express  = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app  = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//sample  data 
const data = [
    {id:1,  name:'John Doe', age:25},
    {id:2 , name: 'Jane Smith', age:21},
    {id:3 , name: 'Osuka Odhiambo', age:25}
];

//API  Endpoints 
app.get('/api/people', (req, res) => {
    res.json(data);
});

app.get('/api/people/:id', (req, res) => {
    const person = data.find(d => d.id === parseInt(req.params.id));
    if(person){
        res.json(person);
    }else{
        res.status(404).json({message: 'Person not  found'});
    }
});

//start  the  server 
app.listen(port, () => {
    console.log(`Server is Running on PORT:- ${port}`);
});

