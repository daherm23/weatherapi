let express = require('express')
let path = require('path')
let app = express()


app.use(express.static( __dirname + '/weather/dist' ));

app.listen(8000, function() {
    console.log('listening on port 8000');
})