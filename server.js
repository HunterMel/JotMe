const express = require('express');
const path = require('path')
const app = express ();

// middleware
app.use(express.static('public'));

app.get (`/notes`, function (req,res){
    res.sendFile(path.join(__dirname,'./public/notes.html'))
})



app.get('/test', function(req, res) {
    res.send('Hello there! this is a test')
})

app.get('/test/user', function(req, res) {
    res.send('This is test user')
})


app.get('*', function(req, res) {
    res.send('This is the hjomepage')
})


//(above) combines public notes to root directory of server 





app.listen(3000,function(){
    console.log('server is running')
})