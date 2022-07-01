 const express = require('express');

 const app = express();

 app.use(express.static(__dirname+'/dist/todos-app'));

 app.get('/*', (req, resp) => {
     resp.sendFile(__dirname+'/dist/todos-app/index.html');
 })

 app.listen(process.env.PORT || 8080)