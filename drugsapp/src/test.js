

var db = connect('127.0.0.1:27017/test');
db.drugs.insert({
article: ' my name is blurry face and I care what people think',
name :'phenytoin',
scientificName : 'diphenylhydantion',
class: 'antiepileptic',
mechanism:'Phenytoin prevents repetitive detonation of normal brain cells. This is achieved by prolonging the inactivated state of voltage sensitive neuronal Na+ channel that governs the refractory period of the neurone. As a result high frequency discharges are inhibited with little effect on normal low frequency discharges.',
AdverseEffects:['Gum Hypertrophy','Hirutism'],
Interactions:[
    'Phenobarbitome competitively inhibits phenytoin metabolism',
    'Carbamazepine and phenytoin induce each other\'s metabolism',
    'Valproate displaces protein bound phenytoin and decreases its metabolism: plasma level of inbound phenytoin increases',
    'Chloremphenicol, isoniazid, cimetidine and warfarine inhibit phenytoin metabolism- can precipitate toxicity',
    'Phenytoin increases degradation of steroids, doxycycline, theophylline.',
    'Sucralfate binds to phenytoin in git and decreases absorption.'
],
Uses:[
    'Phenytoin has been a standard drug for GTCS and partial seizures, but is now only used when better tolerated when newer drugs cannot be used. It produces frequent side effects and numerous drug interactions.',
    'It is second choice of drug to carbamazepine in trigeminal neuralgia'

],
lastUpdated: Date()
}
);

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
*/
