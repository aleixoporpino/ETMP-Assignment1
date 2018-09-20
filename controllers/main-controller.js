module.exports = function(app) {
    app.get("/sendGet",function(req, res) {
        res.send('sendGet its working');
    });
};