var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',(req,res)=>{
  console.log(req.body);
  
  MongoClient.connect("mongodb://localhost:27017",function(err,client){

  // if (err) 
  //   console.log("error");
  //   else


  //  client.db('hahaaaj').collection('usr').insertOne(req.body)

if (err) {
  console.log("error");
  
} else {

  client.db('hahaaaj').collection('user').insertOne(req.body)
  
}


  })

  res.send("gotit")
})

module.exports = router;
