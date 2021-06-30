const express = require('express');
const app = express();

const mockData = [{name:"jack"}, {name:"jackson"}]

app.listen(8000, () => {console.log("Nodejs server started")});

app.get("/users", function(req, res) {
    res.json({
        success: true,
        message: 'Successfully got users!',
        users: mockData
    })
})