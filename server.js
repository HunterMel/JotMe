/*const express = require('express');
const path = require('path')
const app = express ();

// middleware
app.use(express.static('public'));

app.get (`/notes`, function (req,res){
    res.sendFile(path.join(__dirname,'./public/notes.html'))
})


app.get('/api/notes', function(req, res) {
    res.send(path.join(__dirname,'./public/notes.html'))
})

app.get('/api/notes/', function(req, res) {
    res.send('This is test user')
})


app.get('*', function(req, res) {
    res.send('This is the hjomepage')
})


//(above) combines public notes to root directory of server 





app.listen(3000,function(){
    console.log('server is running')
})*/


//fs module provides utilities for working w/ file and directory paths
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes.js')
const apiRoutes = require('./routes/apiRoutes.js')
const app = express();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'))
//showing what folder you use
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)
// gives us a web page to listen for
app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});