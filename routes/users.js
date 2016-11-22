var express = require('express');
var router = express.Router();
var User = require('./../models/user');


router.post('/',function(req, res, next){
  var user = new User();
  user.name = req.body.name;

  user.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'User created!',user });
  });

});
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
});
/* GET single user. */
router.get('/:_id',function(req, res, next){
  User.findById(req.params._id, function(err, user){
    if(err)
      res.send(err);
    if(user != null){
      res.json(user);
    }
    else{
       res.json({message:'No such user.',user});
    }
  });
});
/*Update user*/
router.put('/:_id',function(req, res, next){
  User.findById(req.params._id, function(err, user){
    if(err)
      res.send(err);

    if(user != null){
      user.name = req.body.name;

      user.save(function(err){
        if(err)
          res.send(err);

        res.json({message:'User updated!',user})
      });
    }
    else{
       res.json({message:'No such user.',user});
    }
  });
});

router.delete('/:_id',function(req,res,next){
  User.findById(req.params._id,function(err,user){
    if(err)
      res.send(err);

    if(user != null){
      user.remove(function(err){
        if(err)
          res.send(err);

        res.send("'User deleted!");

      });
    }
    else{
       res.json({message:'No such user.',user});
    }
  });
});

module.exports = router;
