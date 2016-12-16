var router = require('express').Router();
var post = require('./postModel.js')
var user = require(__dirname + '/../user/userModel.js')
// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){    
    post.find(function (err, posts) {
 		if (err) return console.error(err);
   		res.send(posts);
  });
})
  .post(function(req, res){
  if(!req.body) next();
  var newpost = new post(req.body);
    post.author = user.find({username: req.body.username}, function(user){
  	return user._id;
  })
  newpost.save(function (err, user) {
  	if(err) next(err);
  	});
  res.send();  
  });
module.exports = router;

