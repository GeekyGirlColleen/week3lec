let express = require('express');
let app = express();

app.get("/add/:no1/:no2", function(req, res) {
    let n1 = parseInt(req.params.no1);
    let n2 = parseInt(req.params.no2);

    let result = n1 + n2;

    res.send(n1 + " + " + n2 + " = " + result);
});

app.get("/sub", function(req, res) {
    let n1 = parseInt(req.query.no1);
    let n2 = parseInt(req.query.no2);

    let result = n1 - n2;

    res.send(n1 + " - " + n2 + " = " + result);
});

app.get("/math/:op/:no1/:no2", function(req, res) {
    let operation = req.params.op;
    let n1 = parseInt(req.params.no1);
    let n2 = parseInt(req.params.no2);

    if (operation === "add") {
        let result = n1 + n2;
        res.send("Output: " + result);
    } else if (operation === "sub") {
        let result = n1 - n2;
        res.send("Output: " + result);
    } else {
        res.send("Unknown Operation");
    }
});

app.listen(8080);