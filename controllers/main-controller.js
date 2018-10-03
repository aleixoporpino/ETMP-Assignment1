/*
 * main-controller.js manage all the requests and response http methods.
 *
 * Developed by Jose Aleixo Araujo Porpino Filho
 * Date: 2018-09-29
 * Version 1.0.0
 */
const productsSave = require('save')('products');
var getCounter = 0;
var postCounter = 0;
var deleteCounter = 0;
module.exports = function (app) {
    // Get all the products
    app.get("/products", function (req, res) {
        // Increment get counter and show the counter
        getCounter++;
        showRequestCount();

        //Get all the objects saved before.
        productsSave.find({}, function (error, products) {
            res.send(products)
        });
    });

    //Create a new product
    app.post("/products/new", function (req, res) {
        // Increment post counter and show the counter
        postCounter++;
        showRequestCount();

        // Get the object in the request body, save and send the response
        var newProduct = req.body;
        productsSave.create( newProduct, function (error, product) {
            res.send(201, product)
        });
    });

    // Delete all the products
    app.del('/products/deleteAll', function (req, res) {
        // Increment delete counter and show the counter
        deleteCounter++;
        showRequestCount();

        // delete all the records and send the response.
        productsSave.deleteMany({},function (error) {
            res.send(200, "All products were deleted.");
        });
    });
};

// just print in the log the counters of the requests
function showRequestCount() {
    console.log("Processed Request Count--> sendGet:" + getCounter
        + ", sendPost:" + postCounter
        + ", sendDelete:" + deleteCounter);
}