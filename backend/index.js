// import contact from '../src/components/Contact'
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(8080, () =>{
    console.log("server strated")
});

app.post('/contact', (req, res) =>{
    console.log(req.body);
    res.render('../src/components/Contact')
})