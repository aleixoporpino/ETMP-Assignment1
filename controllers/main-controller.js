const productsSave = require('save')('products');
var getCounter = 0;
var postCounter = 0;
var deleteCounter = 0;
module.exports = function (app) {
    app.get("/sendGet", function (req, res) {
        getCounter++;
        showRequestCount();
        productsSave.find({}, function (error, products) {
            res.send(products)
        });
    });

    app.post("/sendPost", function (req, res) {
        postCounter++;
        showRequestCount();

        console.log(req.body);

        var newProduct = req.body;

        productsSave.create( newProduct, function (error, product) {
            res.send(201, product)
        });
    });

    // Delete all the products
    app.del('/sendDelete', function (req, res, next) {
        deleteCounter++;
        showRequestCount();
        productsSave.deleteMany({},function (error) {
            // Send a 200 OK response
            res.send(200, "All products were deleted.");
        });
    });
};

function showRequestCount() {
    console.log("Processed Request Count--> sendGet:" + getCounter
        + ", sendPost:" + postCounter
        + ", sendDelete:" + deleteCounter);
}