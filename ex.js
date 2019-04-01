const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("test");
  });


app.get('/', function(req, res)
  {
    //console.log(req);
    var query = {name:req.query.name};
    dbo.collection("drugs").find(query).toArray(function(err, result) {
      if (err) throw err;
      return res.json(result)
      //console.log(fin_result);
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
