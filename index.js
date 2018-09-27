const app = require('./config/express-handler')();
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server is listening at http://127.0.0.1:" + port + "/");
    console.log("Endpoins:");
    console.log("http://127.0.0.1:" + port + "/sendGet method: GET");
    console.log("http://127.0.0.1:" + port + "/sendPost method: POST");
    console.log("http://127.0.0.1:" + port + "/sendDelete method: DELETE");
});