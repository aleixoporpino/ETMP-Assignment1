var app = require('./config/express-handler')();

app.listen(3000, function () {
    console.log("Server is listening at http://127.0.0.1:3000/");
    console.log("Endpoins:");
    console.log("http://127.0.0.1:3000/sendGet method: GET");
    console.log("http://127.0.0.1:3000/sendPost method: POST");
    console.log("http://127.0.0.1:3000/sendDelete method: DELETE");
});