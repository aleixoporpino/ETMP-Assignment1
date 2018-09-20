var getCounter = 0;
var postCounter = 0;
module.exports = function (app) {
    app.get("/sendGet", function (req, res) {
        getCounter++;
        showRequestCount();
        res.send('sendGet is working');
    });

    app.post("/sendPost", function (req, res) {
        postCounter++;
        showRequestCount();

        console.log(req.body);

        res.send('sendPost is working');
    });
};

function showRequestCount() {
    console.log("Processed Request Count--> sendGet:" + getCounter + ", sendPost:" + postCounter);
}