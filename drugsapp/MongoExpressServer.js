const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
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


  app.get('/api/add',bodyParser.json(),function(req,res)
  {
    console.log(req);
    console.log(req.query);
    var mech_d = req.query.mechanismOfAction;
    var eff_d = req.query.adverseEffects;
    var intrt_d = req.query.interactions;
    var use_d = req.query.uses;
    console.log(mech_d,eff_d,intrt_d,use_d);
    var mech = mech_d.split(":");
    var effect = eff_d.split(":");
    var inter= intrt_d.split(":");
    var use = use_d.split(":");
    var query = {
      article: req.query.article,
      name : req.query.name,
      scientificName: req.query.scientificName,
      class: req.query.class,
      mechanismOfAction: mech,
      adverseEffects: effect,
      interactions: inter,
      uses: use,
      date: req.query.date

    }
    dbo.collection("drugs").insertOne(query,function(err,result){
      if (err) return res.json({message: "Could Not Add"})
      return res.json({message:"Added Successfully"})
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
app.get('/api/del',function(req,res){
  var query = {
    name : req.query.name
  }
  dbo.collection("drugs").deleteOne(query,function(err,result){
      if (err) {return res.json({message: "Unable to Remove"})}
      else{
      console.log("Deletion Successful");
      return res.json({message: "Deletion Successful"})
      }
  })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
