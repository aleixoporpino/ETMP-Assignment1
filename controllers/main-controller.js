module.exports = function(app) {
    app.get("/sendGet",function(req, res) {
        res.send('sendGet is working');
    });

    app.post("/sendPost",function(req, res) {
        res.send('sendPost is working');
    });
};