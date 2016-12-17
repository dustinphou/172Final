var router = require('express').Router();
var user = require('./userModel.js');
// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.
router.route('/')
  .get(function(req, res){    
    user.find(function (err, users) {
 		if (err) next();
   		res.send(users);
  });
})
  .post(function(req, res, next){
  if(!req.body.username || !req.body.address) next();
  var newuser = new user(req.body);
  newuser.save(function (err, user) {
  	if(err) 
      {
        console.log("??????????????"); 
        return next(err);
      }
  	});
  res.send();  
  });

// router.route('/:user_id')
// 	.get(function(req, res){    
//     user.find({_id: req._id}, function (err, user) {
//  		if (err) return console.error(err);
//    		res.send(user);
//   });
// })
//   .post(function(req, res){
//   if(!req.body.username || !req.body.address) next();
//   var newuser = new user(req.body);
//   newuser.save(function (err, user) {
//   	if(err) next(err);
//   	});
//   res.send();  
//   });

module.exports = router;

