const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = (703 * (weight / height ** 2));

    res.send('Your BMI is ' + bmi.toFixed(2));
})



app.listen(3000, function() {
    console.log('Server started on port 3000');
});