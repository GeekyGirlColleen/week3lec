let express = require('express');
let app = express();

app.get("/", function(req, res, next) {
    res.send("Hello to my first express app");
});

app.get("/wiki/:keyword/fit2095/:id", function(req, res) {
    console.log(req.url)
    console.log(req.params);

    res.send("wiki page apparently")
})

app.get("/about", function(req, res, next){
    res.send("This is the about page")
});

app.get("/report", function(req, res, next){
    console.log(req.url);
    console.log(req.query);

    console.log("The name is===" + req.query.name)
    console.log("The age is===" + req.query.age)
    
    res.send("This is a report page")
});

app.listen(8080);