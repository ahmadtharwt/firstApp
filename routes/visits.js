const router = require('express').Router();

const Visit = require('../models/Visit');


module.exports = router;

// We will use router.param to match any route with an ':id' param in it.
// this callback function will run anytime the route matches that param
// generally, we want to use router.param to put objects on the req object itself
// here, we perform the findById and add the instance of the puppy at req.puppy
// We also handle
router.param('id', (req, res, next, id) => {
  Visit.findById(id)
    .then(visit => {
      // if no visit found, send 404
      if (!visit) res.sendStatus(404);
      else {
        req.visit = visit;
        // we have to call next here so that the actual route we want to hit will match after the router.param
        next();
      }
    })
    .catch(next);
});

// get all visits route
router.get('/', (req, res, next) => {
  // here we can also use a req.query to match against visits if we need to!
  // this allows use to use routes like /visits?favFood=pizza to get all visits who love pizza.
  // if no query is present, we there is no where condition to match against, so everthing is returned. neat!
  Visit.findAll({
    where: req.query,
    include: [{all: true}],
    //offset: parseInt(req.query.offset),
    //limit: req.query.limit,
  })
  // quick one-line res.send. This will res.send whatever the previous promise resolves to.
  .then(res.send.bind(res))
  .catch(next);
});

// post a new Visit
// req.body is the Visit object
router.post('/', (req, res, next) => {
  Visit.create(req.body)
    .then(visit => {
      res.send(visit);
    })
    .catch(next);
});

// get visit by id
router.get('/:id', (req, res, next) => {
  // router.param has now taken care of this!!
  res.send(req.visit);
});

// update a particular visit
router.put('/:id', (req, res, next) => {
  // we already got a visit from the db with router.param
  req.visit.update(req.body)
  .then(updatedVisit => {
    res.send(updatedVisit);
  })
  .catch(next);
});

