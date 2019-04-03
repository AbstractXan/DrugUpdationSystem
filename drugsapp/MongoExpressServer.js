const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())


const port = 3000
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("test");
  });
app.get('/api/all',function(req,res)
  {
    var query  ={};
    dbo.collection("drugs").find(query).toArray(function(err,result){
    if (err) throw err;
    return res.json(result);
    })

  })
app.get('/api/find', function(req, res)
  {

    var nam = req.query.name;
    var sciName = req.query.scientificName;
    var cls = req.query.class;
    //console.log(nam);
    var query = {$or : [{name:nam},{scientificName:sciName},{class: cls}]};
    console.log(query);
    dbo.collection("drugs").find(query).toArray(function(err, result) {
      if (err) throw err;
      return res.json(result)
      //console.log(fin_result);
    })

})
app.put('/add',function(req,res)
  {
    var query = {
      article: req.query.article,
      name : req.query.name,
      scientificName: req.query.scientificName,
      class: req.query.class,
      mechanismOfAction: req.query.mechanismOfAction,
      adverseEffects: req.query.adverseffects,
      interactions: req.query.interactions,
      uses: req.query.uses,
      date: req.query.date

    }
    dbo.collection("test").insertOne(query,function(err,result){
      if (err) return res.json({message: "Could Not Add"})
      return res.json({message:"Added Successfully"})
    })
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
