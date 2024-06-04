import * as express from "express";
import * as http from "http";
const path = require('path');
const app = express()
const port = 3000;
const server = require('http').Server(app);


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "/html/index.html"));
})
app.post('/', (req, res) => {
        

})


app.listen(port, function(){
    console.log('listing, on port ' + port);

})



