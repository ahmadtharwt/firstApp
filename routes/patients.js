const router = require('express').Router();

const Patient = require('../models/Patient');
const Visit = require('../models/Visit');


module.exports = router;

// We will use router.param to match any route with an ':id' param in it.
// this callback function will run anytime the route matches that param
// generally, we want to use router.param to put objects on the req object itself
// here, we perform the findById and add the instance of the puppy at req.puppy
// We also handle
router.param('id', (req, res, next, id) => {
  Patient.findById(id)
    .then(patient => {
      // if no patient found, send 404
      if (!patient) res.sendStatus(404);
      else {
        req.patient = patient;
        // we have to call next here so that the actual route we want to hit will match after the router.param
        next();
      }
    })
    .catch(next);
});

// get all patients route
router.get('/', (req, res, next) => {
  // here we can also use a req.query to match against patients if we need to!
  // this allows use to use routes like /patients?favFood=pizza to get all patients who love pizza.
  // if no query is present, we there is no where condition to match against, so everthing is returned. neat!
  Patient.findAll({
    where: req.query,
    include: [{all: true}],
    //offset: parseInt(req.query.offset),
    //limit: req.query.limit,
  })
  // quick one-line res.send. This will res.send whatever the previous promise resolves to.
  .then(res.send.bind(res))
  .catch(next);
});

// post a new Patient
// req.body is the Patient object
router.post('/', (req, res, next) => {
  Patient.create(req.body)
    .then(patient => {
      res.send(patient);
    })
    .catch(next);
});

// get patient by id
router.get('/:id', (req, res, next) => {
  // router.param has now taken care of this!!
  res.send(req.patient);
});

// update a particular patient
router.put('/:id', (req, res, next) => {
  // we already got a patient from the db with router.param
  req.patient.update(req.body)
  .then(updatedPatient => {
    res.send(updatedPatient);
  })
  .catch(next);
});

