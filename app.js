var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("assets"));

app.get('/',(req,res) => {
    res.render('ToDo.ejs');
})

app.listen(process.env.PORT || 3000, () =>{
    'Server Initiated'
});