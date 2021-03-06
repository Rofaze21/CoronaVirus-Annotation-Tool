// app.use(express.static("./dist/coronaNewsAnnotationTool"));
// app.get("/*", function(req, res) { res.sendFile("index.html", {root: "./dist/coronaNewsAnnotationTool"});})
// app.listen(process.env.PORT || 8080);
// //Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/coronaNewsAnnotationTool'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/coronaNewsAnnotationTool/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);