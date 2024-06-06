const express = require('express')
const path = require('path');
const app = express()
const port = 3000;
const server = require('http').Server(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "./html/index.html"));
})


app.listen(port, function(){
    console.log('listing, on port ' + port);

})

