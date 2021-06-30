const express = require('express');
//To send post data through /endpoints.
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.listen(8000, function(){console.log("Nodejs server running on port:8000")})
const mockData = [{name:"jack"}, {name:"jackson"}]


app.get("/users", function(req, res) {
    
    res.json({
        success: true,
        message: 'Successfully got users!',
        users: mockData,
    })
    console.log(`Data recived ${mockData}`);
})

app.get("/user/:id", function(req, res) {
    
    res.json({
        success: true,
        message: 'User found',
        user:req.params.id
    })
})

app.post("/login", function(req,res){

    //Typically passwords are encrypted using something like bcrypt before sending to db
    const userName = req.body.userName;
    const password = req.body.passWord;

    //These will retrive from DB
    const mockUser = "billy";
    const mockPassword = "secret";

    if(userName === mockUser && password === mockPassword) {
        //Best practice is to use JWT
        res.json({
            success: true,
            message: 'user and password match',
            token: 'encrypted token goes here'
        }) 
    } else {
        res.json({
            success: false,
            message: ' username and password doesnt match'
        })
    }
})