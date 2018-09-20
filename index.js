var app = require('./config/express-handler')();

app.listen(3000, function(){
    console.log("Server running on localhost:3000");
});